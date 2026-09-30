"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { User, Sparkles, Copy, Check } from "lucide-react";

export interface MessageItem {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface ChatMessageProps {
  message: MessageItem;
  isStreaming?: boolean;
}

export function ChatMessage({ message, isStreaming = false }: ChatMessageProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const copyContent = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group flex gap-3.5 max-w-4xl w-full transition-opacity duration-200 ${
        isUser ? "ml-auto justify-end" : "mr-auto justify-start"
      }`}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mt-1 shadow-sm">
          <Sparkles className="w-4 h-4 text-emerald-400" />
        </div>
      )}

      {/* Message Content Bubble */}
      <div
        className={`relative max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3.5 text-sm transition-all ${
          isUser
            ? "bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-tr-sm shadow-md"
            : "bg-zinc-950/80 border border-zinc-850 text-zinc-200 rounded-tl-sm shadow-sm"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap leading-relaxed text-[0.95rem]">
            {message.content}
          </p>
        ) : (
          <div className="prose-dark overflow-hidden">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 underline font-medium transition-colors"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 my-2 space-y-1 text-zinc-200">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 my-2 space-y-1 text-zinc-200">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                p: ({ children }) => (
                  <p className="leading-relaxed mb-2.5 last:mb-0 text-zinc-200">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 font-mono text-[0.85em]">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <div className="my-2 rounded-lg overflow-hidden border border-zinc-800 bg-[#09090b]">
                      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900/90 border-b border-zinc-800 text-xs text-zinc-400 font-mono">
                        <span>Code</span>
                      </div>
                      <pre className="p-3 text-xs font-mono text-zinc-300 overflow-x-auto">
                        <code>{children}</code>
                      </pre>
                    </div>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>

            {isStreaming && <span className="cursor-blink" />}
          </div>
        )}

        {/* Message footer & actions */}
        <div
          className={`flex items-center gap-2 mt-2 pt-1 text-[11px] text-zinc-400 ${
            isUser ? "justify-end" : "justify-between"
          }`}
        >
          {message.timestamp && <span>{message.timestamp}</span>}

          {!isUser && !isStreaming && (
            <button
              onClick={copyContent}
              title="Copy answer"
              className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 transition-opacity ml-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mt-1 shadow-sm">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
