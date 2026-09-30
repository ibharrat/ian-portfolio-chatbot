"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Briefcase,
  Layers,
  ExternalLink,
  Code2,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  ChevronRight,
  X,
} from "lucide-react";
import { IAN_PROFILE } from "@/lib/ianData";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt: (prompt: string) => void;
}

export function ProfileSidebar({
  isOpen,
  onClose,
  onSelectPrompt,
}: ProfileSidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-16 right-0 bottom-0 z-40 w-full sm:w-96 bg-zinc-950/95 border-l border-zinc-800/80 backdrop-blur-2xl overflow-y-auto transition-transform duration-300 ease-in-out lg:static lg:block ${
          isOpen ? "translate-x-0" : "translate-x-full lg:hidden"
        }`}
      >
        <div className="p-5 space-y-6">
          {/* Header row in drawer for mobile */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 lg:hidden">
            <h2 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Ian Bharrat — Overview
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Bio Card */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/90 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-zinc-100 text-base">
                  {IAN_PROFILE.name}
                </h3>
                <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  {IAN_PROFILE.location}
                </p>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 font-medium">
                GPA 3.96
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {IAN_PROFILE.bio}
            </p>

            <div className="pt-2 border-t border-zinc-800/60 flex flex-col gap-1.5 text-xs text-zinc-400">
              <a
                href={`mailto:${IAN_PROFILE.email}`}
                className="flex items-center gap-2 hover:text-zinc-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{IAN_PROFILE.email}</span>
              </a>
              <a
                href={`tel:${IAN_PROFILE.phone}`}
                className="flex items-center gap-2 hover:text-zinc-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{IAN_PROFILE.phone}</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                Education
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt("What is Ian's educational background and GPA?")
                }
                className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {IAN_PROFILE.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all text-xs"
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="font-medium text-zinc-200">{edu.degree}</span>
                    <span className="text-[10px] text-emerald-400 font-mono shrink-0">
                      {edu.gpa}
                    </span>
                  </div>
                  <div className="text-zinc-400 mt-0.5">
                    {edu.institution} • {edu.gradDate}
                  </div>
                  {edu.coursework && (
                    <div className="mt-2 pt-2 border-t border-zinc-800/40 flex flex-wrap gap-1">
                      {edu.coursework.slice(0, 4).map((c, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 rounded bg-zinc-800/60 text-[10px] text-zinc-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-zinc-400" />
                Certifications
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt(
                    "What certifications does Ian hold and what topics do they cover?"
                  )
                }
                className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {IAN_PROFILE.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-medium text-zinc-200">{cert.name}</div>
                    <div className="text-[11px] text-zinc-400">{cert.issuer}</div>
                  </div>
                  {cert.badgeUrl && (
                    <a
                      href={cert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Credly Badge"
                      className="p-1 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                Experience
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt(
                    "Describe Ian's cloud internship experience at Diamond Distribution Inc."
                  )
                }
                className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {IAN_PROFILE.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all text-xs space-y-1.5"
              >
                <div className="flex items-start justify-between">
                  <div className="font-medium text-zinc-200">{exp.role}</div>
                  <span className="text-[10px] text-zinc-400">{exp.period}</span>
                </div>
                <div className="text-zinc-400 text-[11px]">{exp.company}</div>
                <p className="text-zinc-300 text-[11px] line-clamp-2">
                  {exp.highlights[0]}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                Featured Projects
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt(
                    "Tell me about the Terraform AWS Web Infrastructure project Ian created."
                  )
                }
                className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {IAN_PROFILE.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-200">{proj.title}</span>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                    {proj.description}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-zinc-800/80 text-[10px] text-zinc-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills Badges */}
          <div className="space-y-3 pb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "AWS",
                "Terraform",
                "CloudFormation",
                "Python",
                "Java",
                "JavaScript",
                "TypeScript",
                "React / Next.js",
                "Docker",
                "Aurora Serverless",
                "PostgreSQL",
                "MongoDB",
                "CI/CD",
                "Linux",
              ].map((skill, i) => (
                <button
                  key={i}
                  onClick={() =>
                    onSelectPrompt(`Tell me about Ian's experience with ${skill}.`)
                  }
                  className="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-[11px] text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
