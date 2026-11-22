"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Sparkles, Copy, Check } from "lucide-react";

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
      className={`group flex gap-3 max-w-3xl w-full transition-opacity ${
        isUser ? "ml-auto justify-end" : "mr-auto justify-start"
      }`}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#25121b] border border-[#3d1e2d] flex items-center justify-center text-[#c9b2ba] mt-0.5">
          <Sparkles className="w-3.5 h-3.5 text-[#f497a8]" />
        </div>
      )}

      {/* Message Bubble - Solid opaque matte wine red backgrounds */}
      <div
        className={`relative max-w-[88%] sm:max-w-[82%] rounded-2xl px-4 py-3 text-sm transition-all ${
          isUser
            ? "bg-[#301622] border border-[#482234] text-[#f0e6e9] rounded-tr-sm"
            : "bg-[#200e17] border border-[#351926] text-[#dfd2d6] rounded-tl-sm"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap leading-relaxed text-[0.93rem]">
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
                    className="text-[#f497a8] hover:text-[#ffb3c1] underline underline-offset-2 transition-colors"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 my-2 space-y-1 text-[#dfd2d6]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 my-2 space-y-1 text-[#dfd2d6]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                p: ({ children }) => (
                  <p className="leading-relaxed mb-2.5 last:mb-0 text-[#dfd2d6]">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[#f0e6e9]">
                    {children}
                  </strong>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="px-1.5 py-0.5 rounded bg-[#28131e] border border-[#3d1e2d] text-[#e2b0bc] font-mono text-[0.85em]">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <div className="my-2 rounded-lg overflow-hidden border border-[#351926] bg-[#190b12]">
                      <div className="flex items-center justify-between px-3 py-1.5 bg-[#25121b] border-b border-[#351926] text-xs text-[#a8919a] font-mono">
                        <span>Code</span>
                      </div>
                      <pre className="p-3 text-xs font-mono text-[#dfd2d6] overflow-x-auto">
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

        {/* Message footer & copy action */}
        <div
          className={`flex items-center gap-2 mt-1.5 text-[11px] text-[#756168] ${
            isUser ? "justify-end" : "justify-between"
          }`}
        >
          {message.timestamp && <span>{message.timestamp}</span>}

          {!isUser && !isStreaming && (
            <button
              onClick={copyContent}
              title="Copy message"
              className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[11px] text-[#756168] hover:text-[#c9b2ba] transition-opacity ml-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#f497a8]" />
                  <span className="text-[#f497a8]">Copied</span>
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
    </div>
  );
}
