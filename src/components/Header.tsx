"use client";

import React, { useState } from "react";
import {
  Mail,
  Check,
  PanelRightOpen,
  PanelRightClose,
  RotateCcw,
} from "lucide-react";
import { IAN_PROFILE } from "@/lib/ianData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  onClearChat: () => void;
  hasMessages: boolean;
}

export function Header({
  sidebarOpen,
  setSidebarOpen,
  onClearChat,
  hasMessages,
}: HeaderProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(IAN_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#262626] bg-[#161616]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#202020] border border-[#2e2e2e] font-medium text-zinc-300 text-xs tracking-wider">
            IB
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-medium text-zinc-200 tracking-tight">
                {IAN_PROFILE.name}
              </h1>
              <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-[11px] bg-[#222222] border border-[#2a2a2a] text-zinc-400">
                AI Assistant
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 truncate max-w-[200px] sm:max-w-none">
              Infrastructure • Data Analytics • Software Engineering
            </p>
          </div>
        </div>

        {/* Right: Controls & Links */}
        <div className="flex items-center gap-2">
          {hasMessages && (
            <button
              onClick={onClearChat}
              title="Reset conversation"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-[#202020] hover:bg-[#282828] border border-[#2e2e2e] text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

          <button
            onClick={copyEmail}
            title={copiedEmail ? "Copied!" : `Copy email: ${IAN_PROFILE.email}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-[#202020] hover:bg-[#282828] border border-[#2e2e2e] text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 hidden sm:inline">Copied</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Email</span>
              </>
            )}
          </button>

          <a
            href={IAN_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#202020] hover:bg-[#282828] border border-[#2e2e2e] text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={IAN_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#202020] hover:bg-[#282828] border border-[#2e2e2e] text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Hide Profile" : "Show Profile"}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              sidebarOpen
                ? "bg-[#2a2a2a] border-zinc-600 text-zinc-200"
                : "bg-[#202020] hover:bg-[#282828] border-[#2e2e2e] text-zinc-300"
            }`}
          >
            {sidebarOpen ? (
              <PanelRightClose className="w-3.5 h-3.5" />
            ) : (
              <PanelRightOpen className="w-3.5 h-3.5" />
            )}
            <span className="hidden md:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
