"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Square,
  Trash2,
  ArrowDown,
} from "lucide-react";
import { Header } from "@/components/Header";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { ChatMessage, MessageItem } from "@/components/ChatMessage";
import { QuickPrompts } from "@/components/QuickPrompts";

const INITIAL_WELCOME: MessageItem = {
  id: "welcome-message",
  role: "assistant",
  content: `Hello! I'm **Ian Bharrat's AI Assistant**.

I can answer any questions regarding Ian's background, qualifications, and career goals:
- **Career Aspirations**: **Infrastructure**, **Data Analytics**, and **Software Engineering** (seeking full-time roles starting January 2027).
- **Cloud Engineering Experience**: Cloud Engineer Intern at **Cintas** (refactored microservices on GCP, standardized Terraform, GitLab CI/CD, Shared VPCs).
- **Data Analytics Projects**: **Python Movie Data Visualization** (Pandas & Matplotlib analysis on 45,000+ movies investigating production budget diminishing returns).
- **Infrastructure as Code**: **HashiCorp Packer Golden AMI** automated pipeline for secure, immutable Amazon Linux base images.
- **Academic Honors**: B.S. in Information Technology - Cybersecurity Option at Kean University (**3.97 GPA**, **Phi Kappa Phi Honors Society**).
- **Certifications**: AWS Certified CloudOps Engineer – Associate, AWS Certified Cloud Practitioner, CompTIA ITF+.

Ask a question below or click any of the suggested topics!`,
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

  // Monitor scroll position to show "scroll to bottom" button
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

    // Placeholder assistant message for streaming
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

    // Create AbortController for stream cancellation
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // Exclude initial welcome message from API context to save tokens and keep context fresh
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
                  content: `⚠️ **Connection Error**: ${errorMessage}\n\nPlease check your connection or verify the OpenAI API key in your \`.env\` file.`,
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
    <div className="flex flex-col h-screen bg-black text-zinc-100 overflow-hidden font-sans">
      {/* Top Header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onClearChat={clearChat}
        hasMessages={messages.length > 1}
      />

      {/* Main Layout Container */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Chat Area */}
        <main className="flex-1 flex flex-col h-full bg-gradient-to-b from-black via-zinc-950 to-black relative">
          {/* Subtle Ambient Radial Lighting */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.07),rgba(255,255,255,0))]" />

          {/* Messages Scroll Area */}
          <div
            ref={chatContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 scroll-smooth"
          >
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Quick Hero Banner if only welcome message */}
              {messages.length === 1 && (
                <div className="pt-2 pb-4 text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    Interactive Resume & Portfolio
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Ask me anything about Ian Bharrat
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
                    Powered by OpenAI and grounded in Ian&apos;s real-world cloud
                    internship at Cintas, data analytics projects, Kean University
                    honors (3.97 GPA), and career aspirations in Infrastructure, Data Analytics, and Software Engineering.
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

              {/* Quick Prompt Cards when only 1 or 2 messages */}
              {messages.length <= 2 && !isLoading && (
                <div className="pt-4 pb-2">
                  <QuickPrompts onSelectPrompt={(prompt) => sendMessage(prompt)} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Scroll to bottom floating button */}
          {showScrollBottom && (
            <button
              onClick={() => scrollToBottom("smooth")}
              className="absolute bottom-28 right-6 z-20 p-2 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white shadow-xl hover:bg-zinc-800 transition-all"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          )}

          {/* Input Area */}
          <div className="p-4 sm:p-5 border-t border-zinc-800/80 bg-black/90 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto space-y-2.5">
              {/* Quick Prompt Chips (when in deep conversation) */}
              {messages.length > 2 && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs">
                  <span className="text-zinc-400 font-mono text-[11px] shrink-0 mr-1">
                    Quick:
                  </span>
                  {[
                    "Career Aspirations",
                    "Cintas GCP Internship",
                    "Movie Data Viz",
                    "Packer Golden AMI",
                    "3.97 GPA & Honors",
                    "Certifications",
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      disabled={isLoading}
                      onClick={() => {
                        const prompts: Record<string, string> = {
                          "Career Aspirations":
                            "What are Ian's career aspirations in Infrastructure, Data Analytics, and Software Engineering?",
                          "Cintas GCP Internship":
                            "Tell me about Ian's Cloud Engineer Internship at Cintas and his work with GCP and Terraform.",
                          "Movie Data Viz":
                            "Explain Ian's Python Movie Data Visualization project analyzing 45,000+ Kaggle movies.",
                          "Packer Golden AMI":
                            "How did Ian build the HashiCorp Packer automated Golden AMI pipeline?",
                          "3.97 GPA & Honors":
                            "What is Ian's GPA and honors society membership at Kean University?",
                          Certifications:
                            "What certifications and Credly badges does Ian have?",
                        };
                        sendMessage(prompts[chip] || chip);
                      }}
                      className="px-2.5 py-1 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all shrink-0 text-[11px] disabled:opacity-50"
                    >
                      {chip}
                    </button>
                  ))}
                  <button
                    onClick={clearChat}
                    title="Reset conversation"
                    className="ml-auto px-2 py-1 rounded-md text-[11px] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all flex items-center gap-1 shrink-0"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                </div>
              )}

              {/* Text Input Container */}
              <div className="relative flex items-end rounded-2xl bg-zinc-900/90 border border-zinc-800 focus-within:border-zinc-600 focus-within:ring-1 focus-within:ring-zinc-600 transition-all shadow-inner">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={handleTextareaChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about Ian's cloud experience, education, or projects..."
                  rows={1}
                  disabled={isLoading}
                  className="w-full resize-none bg-transparent py-3.5 pl-4 pr-24 text-sm text-zinc-100 placeholder-zinc-400 focus:outline-none max-h-44 disabled:opacity-60"
                />

                <div className="absolute right-2.5 bottom-2.5 flex items-center gap-1.5">
                  {isLoading ? (
                    <button
                      onClick={stopGenerating}
                      title="Stop generating"
                      className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                    >
                      <Square className="w-4 h-4 fill-zinc-200" />
                    </button>
                  ) : (
                    <button
                      onClick={() => sendMessage()}
                      disabled={!input.trim()}
                      title="Send message (Enter)"
                      className="p-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 disabled:opacity-30 disabled:hover:bg-zinc-100 transition-all shadow"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Footer notes */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1">
                <span>
                  Responses generated via OpenAI GPT model • Grounded in Ian&apos;s
                  resume & LinkedIn
                </span>
                <span className="hidden sm:inline">
                  Press <kbd className="px-1 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono text-[10px]">Enter</kbd> to send
                </span>
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
