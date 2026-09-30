"use client";

import React from "react";
import { Cloud, GraduationCap, Terminal, Award, Gamepad2, Send } from "lucide-react";

interface QuickPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

export const PROMPT_CARDS = [
  {
    icon: Cloud,
    title: "AWS & Cloud Migration",
    prompt: "Tell me about Ian's cloud internship at Diamond Distribution and his AWS experience.",
    description: "CloudFormation, EC2 ASG, ALB, Aurora, S3, CloudFront",
  },
  {
    icon: Terminal,
    title: "Terraform Infrastructure",
    prompt: "How did Ian architect his Terraform AWS Web Infrastructure project?",
    description: "Modular HCL, SSM golden AMI, multi-AZ high availability",
  },
  {
    icon: GraduationCap,
    title: "Education & 3.96 GPA",
    prompt: "What is Ian's education, GPA at Kean University, and relevant coursework?",
    description: "B.S. IT (3.96 GPA) & A.A.S. Computer Science",
  },
  {
    icon: Award,
    title: "Certifications",
    prompt: "What certifications does Ian hold and what are his Credly links?",
    description: "AWS Certified Cloud Practitioner, CompTIA ITF+",
  },
  {
    icon: Gamepad2,
    title: "Full-Stack Project",
    prompt: "Tell me about Ian's Space Run arcade game project and tech stack.",
    description: "Phaser JS, HTML5, CSS3, Node.js, MongoDB",
  },
  {
    icon: Send,
    title: "Contact & Availability",
    prompt: "What roles is Ian looking for and how can I contact him for an interview?",
    description: "Email, Phone, LinkedIn, GitHub details",
  },
];

export function QuickPrompts({ onSelectPrompt }: QuickPromptsProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="text-center space-y-1">
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          Suggested Topics
        </p>
        <p className="text-xs text-zinc-400">
          Click any prompt below or type your own question in the chat
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {PROMPT_CARDS.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectPrompt(card.prompt)}
              className="text-left p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-850/90 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 transition-colors shrink-0">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
