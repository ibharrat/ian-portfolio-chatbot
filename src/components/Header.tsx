"use client";

import React, { useState } from "react";
import {
  Mail,
  Check,
  PanelRightOpen,
  PanelRightClose,
  Sparkles,
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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/60 shadow-inner font-semibold text-zinc-100 text-sm tracking-wider">
            IB
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-zinc-100 tracking-tight">
                {IAN_PROFILE.name}
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
                <Sparkles className="w-3 h-3 text-zinc-400" />
                AI Assistant
              </span>
            </div>
            <p className="text-xs text-zinc-400 flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-none">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Open to Software & Cloud/DevOps Roles
            </p>
          </div>
        </div>

        {/* Right: Social Actions & Controls */}
        <div className="flex items-center gap-2">
          {/* Reset button if messages exist */}
          {hasMessages && (
            <button
              onClick={onClearChat}
              title="Reset conversation"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

          {/* Email button with quick copy */}
          <button
            onClick={copyEmail}
            title={copiedEmail ? "Copied!" : `Copy email: ${IAN_PROFILE.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
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

          {/* LinkedIn Link */}
          <a
            href={IAN_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Ian's LinkedIn Profile"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* GitHub Link */}
          <a
            href={IAN_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Ian's GitHub Profile"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Hide Profile Overview" : "Show Profile Overview"}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              sidebarOpen
                ? "bg-zinc-800 border-zinc-700 text-white"
                : "bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 text-zinc-300"
            }`}
          >
            {sidebarOpen ? (
              <PanelRightClose className="w-4 h-4" />
            ) : (
              <PanelRightOpen className="w-4 h-4" />
            )}
            <span className="hidden md:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
