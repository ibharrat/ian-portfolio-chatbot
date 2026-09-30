"use client";

import React from "react";
import { Cloud, GraduationCap, Terminal, Award, BarChart3, Target } from "lucide-react";

interface QuickPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

export const PROMPT_CARDS = [
  {
    icon: Target,
    title: "Career Aspirations",
    prompt: "What are Ian's career aspirations across Infrastructure, Data Analytics, and Software Engineering?",
    description: "Infrastructure, Data Analytics, and Software Engineer roles for 2027",
  },
  {
    icon: Cloud,
    title: "Cintas Cloud Internship",
    prompt: "Tell me about Ian's Cloud Engineer Internship at Cintas and his work with GCP and Terraform.",
    description: "GCP microservices, GitLab CI/CD, Terraform, Shared VPCs",
  },
  {
    icon: BarChart3,
    title: "Movie Data Analytics",
    prompt: "Explain Ian's Python Movie Data Visualization project and his findings on budget diminishing returns.",
    description: "45,000+ Kaggle movies, Pandas, NumPy, Matplotlib analysis",
  },
  {
    icon: Terminal,
    title: "HashiCorp Packer Project",
    prompt: "How did Ian build the HashiCorp Packer automated Golden AMI pipeline?",
    description: "Immutable Amazon Linux images, IaC, security baselines",
  },
  {
    icon: GraduationCap,
    title: "Kean Univ & 3.97 GPA",
    prompt: "What is Ian's education, GPA (3.97/4.0), and honors society membership at Kean University?",
    description: "B.S. IT (Cybersecurity Option), Phi Kappa Phi Honors",
  },
  {
    icon: Award,
    title: "Certifications",
    prompt: "What certifications does Ian hold and what are his Credly credentials?",
    description: "AWS CloudOps Engineer, Cloud Practitioner, CompTIA ITF+",
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
