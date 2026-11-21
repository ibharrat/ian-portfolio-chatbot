"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Square, ArrowDown } from "lucide-react";
import { Header } from "@/components/Header";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { ChatMessage, MessageItem } from "@/components/ChatMessage";

const INITIAL_WELCOME: MessageItem = {
  id: "welcome-message",
  role: "assistant",
  content: `Hello! I'm **Ian Bharrat's AI Assistant**.

I can answer questions regarding Ian's background, qualifications, and career goals:
- **Career Aspirations**: Infrastructure, Data Analytics, and Software Engineering (seeking full-time roles starting January 2027).
- **Cloud Engineering Experience**: Cloud Engineer Intern at Cintas (microservices on GCP, Terraform, GitLab CI/CD, Shared VPCs).
- **Data Analytics Projects**: Python Movie Data Visualization (Pandas & Matplotlib analysis on 45,000+ movies investigating budget diminishing returns).
- **Infrastructure as Code**: HashiCorp Packer automated Golden AMI pipeline for Amazon Linux base images.
- **Academic Honors**: B.S. in Information Technology - Cybersecurity Option at Kean University (3.97 GPA, Phi Kappa Phi).
- **Certifications**: AWS Certified CloudOps Engineer – Associate, AWS Certified Cloud Practitioner, CompTIA ITF+.

Ask a question below to get started.`,
  timestamp: "Just now",
};

export default function Home() {
  const [messages, setMessages] = useState<MessageItem[]>([INITIAL_WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll logic
  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages, isLoading]);

  // Monitor scroll position
  const handleScroll = () => {
    if (!chatContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;
    setShowScrollBottom(!isNearBottom);
  };

  // Adjust textarea height dynamically
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        180
      )}px`;
    }
  };

  // Submit message
  const sendMessage = async (contentToSend?: string) => {
    const text = (contentToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: MessageItem = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    setIsLoading(true);

    const assistantId = (Date.now() + 1).toString();
    const assistantPlaceholder: MessageItem = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, assistantPlaceholder]);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const apiMessages = newMessages
        .filter((m) => m.id !== "welcome-message")
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! Status: ${res.status}`
        );
      }

      if (!res.body) {
        throw new Error("ReadableStream not supported on this browser.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId ? { ...msg, content: accumulatedText } : msg
          )
        );
      }
    } catch (err: unknown) {
      if ((err as Error).name === "AbortError") {
        console.log("Stream stopped by user");
      } else {
        const errorMessage = (err as Error).message || "An error occurred";
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content: `Connection Error: ${errorMessage}. Please verify the OpenAI API key in your environment.`,
                }
              : msg
          )
        );
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const stopGenerating = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    if (isLoading && abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([INITIAL_WELCOME]);
  };

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-zinc-300 overflow-hidden font-sans">
      {/* Top Header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onClearChat={clearChat}
        hasMessages={messages.length > 1}
      />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Chat Area */}
        <main className="flex-1 flex flex-col h-full bg-[#121212] relative">
          {/* Messages Scroll Area */}
          <div
            ref={chatContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 scroll-smooth"
          >
            <div className="max-w-3xl mx-auto space-y-5">
              {/* Minimal Hero Header if only welcome message */}
              {messages.length === 1 && (
                <div className="pt-2 pb-2 text-center space-y-2">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-200">
                    Ian Bharrat — Portfolio Assistant
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
                    Ask about Ian&apos;s cloud engineering experience at Cintas, data analytics projects, education, and career aspirations.
                  </p>
                </div>
              )}

              {/* Chat Message List */}
              {messages.map((message, index) => {
                const isLastMessage = index === messages.length - 1;
                return (
                  <ChatMessage
                    key={message.id}
                    message={message}
                    isStreaming={isLastMessage && isLoading}
                  />
                );
              })}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Scroll to bottom button */}
          {showScrollBottom && (
            <button
              onClick={() => scrollToBottom("smooth")}
              className="absolute bottom-24 right-6 z-20 p-2 rounded-full bg-[#1c1c1c] border border-zinc-700 text-zinc-300 hover:text-zinc-100 hover:bg-[#252525] transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          )}

          {/* Input Area - Solid opaque matte bar */}
          <div className="p-4 sm:p-5 border-t border-[#262626] bg-[#161616]">
            <div className="max-w-3xl mx-auto space-y-2">
              {/* Text Input Box */}
              <div className="relative flex items-end rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] focus-within:border-zinc-500 transition-colors">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={handleTextareaChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about Ian's experience or background..."
                  rows={1}
                  disabled={isLoading}
                  className="w-full resize-none bg-transparent py-3 pl-4 pr-24 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none max-h-44 disabled:opacity-60"
                />

                <div className="absolute right-2 bottom-2 flex items-center gap-1.5">
                  {isLoading ? (
                    <button
                      onClick={stopGenerating}
                      title="Stop generating"
                      className="p-1.5 rounded-lg bg-[#27272a] hover:bg-[#323238] text-zinc-300 transition-colors"
                    >
                      <Square className="w-4 h-4 fill-zinc-300" />
                    </button>
                  ) : (
                    <button
                      onClick={() => sendMessage()}
                      disabled={!input.trim()}
                      title="Send message (Enter)"
                      className="p-1.5 rounded-lg bg-[#27272a] hover:bg-[#323238] text-zinc-200 border border-zinc-700/60 disabled:opacity-30 disabled:hover:bg-[#27272a] transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Subtitle / Footer notes */}
              <div className="flex items-center justify-between text-[11px] text-zinc-500 px-1">
                <span>Grounded in Ian Bharrat&apos;s resume, projects, and credentials</span>
                <span className="hidden sm:inline">Press Enter to send</span>
              </div>
            </div>
          </div>
        </main>

        {/* Profile Sidebar */}
        <ProfileSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSelectPrompt={(prompt) => {
            setSidebarOpen(false);
            sendMessage(prompt);
          }}
        />
      </div>
    </div>
  );
}
