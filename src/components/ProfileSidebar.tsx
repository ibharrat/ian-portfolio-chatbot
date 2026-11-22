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
  ChevronRight,
  X,
  Target,
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
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
        />
      )}

      {/* Solid Matte Wine Red Sidebar - No blur or transparency */}
      <aside
        className={`fixed top-14 right-0 bottom-0 z-40 w-full sm:w-96 bg-[#1e0e15] border-l border-[#341825] overflow-y-auto transition-transform duration-200 ease-in-out lg:static lg:block ${
          isOpen ? "translate-x-0" : "translate-x-full lg:hidden"
        }`}
      >
        <div className="p-5 space-y-5">
          {/* Header row in drawer for mobile */}
          <div className="flex items-center justify-between pb-3 border-b border-[#341825] lg:hidden">
            <h2 className="text-sm font-medium text-[#f0e6e9]">
              Profile Overview
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#a8919a] hover:text-[#f0e6e9] hover:bg-[#25121b]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Bio & Aspirations Card */}
          <div className="p-4 rounded-xl bg-[#25121b] border border-[#3d1e2d] space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-[#f0e6e9] text-sm">
                  {IAN_PROFILE.name}
                </h3>
                <p className="text-xs text-[#a8919a] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#756168]" />
                  {IAN_PROFILE.location}
                </p>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#321824] border border-[#482234] text-[#dfd2d6] font-mono">
                GPA 3.97
              </span>
            </div>

            <div>
              <span className="text-[11px] font-medium text-[#a8919a] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <Target className="w-3 h-3 text-[#f497a8]" /> Career Aspirations
              </span>
              <div className="flex flex-wrap gap-1">
                {["Software Engineer", "Infrastructure", "Data Analytics"].map(
                  (role, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#321824] border border-[#482234] text-[11px] text-[#dfd2d6]"
                    >
                      {role}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="text-xs text-[#a8919a] leading-relaxed">
              {IAN_PROFILE.bio}
            </p>

            <div className="pt-2 border-t border-[#341825] flex flex-col gap-1.5 text-xs text-[#a8919a]">
              <a
                href={`mailto:${IAN_PROFILE.email}`}
                className="flex items-center gap-2 hover:text-[#f0e6e9] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#756168]" />
                <span>{IAN_PROFILE.email}</span>
              </a>
              <a
                href={`tel:${IAN_PROFILE.phone}`}
                className="flex items-center gap-2 hover:text-[#f0e6e9] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#756168]" />
                <span>{IAN_PROFILE.phone}</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#a8919a] flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#756168]" />
                Education
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt("What is Ian's educational background, GPA, and honors at Kean University?")
                }
                className="text-[11px] text-[#756168] hover:text-[#dfd2d6] flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {IAN_PROFILE.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#25121b] border border-[#3d1e2d] text-xs"
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="font-medium text-[#dfd2d6]">{edu.degree}</span>
                    {edu.gpa && (
                      <span className="text-[10px] text-[#a8919a] font-mono shrink-0">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                  <div className="text-[#756168] mt-0.5">
                    {edu.institution} • {edu.gradDate}
                  </div>
                  {edu.honors && (
                    <div className="mt-2 pt-1.5 border-t border-[#341825] text-[11px] text-[#a8919a]">
                      {edu.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#a8919a] flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#756168]" />
                Certifications
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt(
                    "What certifications does Ian hold and what topics do they cover?"
                  )
                }
                className="text-[11px] text-[#756168] hover:text-[#dfd2d6] flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {IAN_PROFILE.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#25121b] border border-[#3d1e2d] flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-medium text-[#dfd2d6]">{cert.name}</div>
                    <div className="text-[11px] text-[#756168]">{cert.issuer}</div>
                  </div>
                  {cert.badgeUrl ? (
                    <a
                      href={cert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Credly Badge"
                      className="p-1 rounded text-[#756168] hover:text-[#dfd2d6] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#a8919a] flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#756168]" />
                Experience
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt(
                    "Describe Ian's Cloud Engineer Internship at Cintas and what he achieved with GCP and Terraform."
                  )
                }
                className="text-[11px] text-[#756168] hover:text-[#dfd2d6] flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {IAN_PROFILE.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#25121b] border border-[#3d1e2d] text-xs space-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="font-medium text-[#dfd2d6]">{exp.role}</div>
                  <span className="text-[10px] text-[#756168]">{exp.period}</span>
                </div>
                <div className="text-[#756168] text-[11px]">
                  {exp.company} • {exp.location}
                </div>
                <p className="text-[#a8919a] text-[11px] line-clamp-2">
                  {exp.highlights[0]}
                </p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#a8919a] flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#756168]" />
                Projects
              </h4>
              <button
                onClick={() =>
                  onSelectPrompt(
                    "Tell me about Ian's Python Movie Data Visualization and HashiCorp Packer projects."
                  )
                }
                className="text-[11px] text-[#756168] hover:text-[#dfd2d6] flex items-center gap-0.5 transition-colors"
              >
                Ask <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {IAN_PROFILE.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#25121b] border border-[#3d1e2d] text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#dfd2d6]">{proj.title}</span>
                    {proj.websiteUrl && (
                      <a
                        href={proj.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#756168] hover:text-[#dfd2d6] transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="text-[11px] text-[#756168] mt-0.5 line-clamp-2">
                    {proj.description}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 4).map((t, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-[#321824] text-[10px] text-[#c9b2ba] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Tech Stack */}
          <div className="space-y-2.5 pb-6">
            <h4 className="text-xs font-medium uppercase tracking-wider text-[#a8919a] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#756168]" />
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1">
              {[
                "Python",
                "SQL",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "GCP (BigQuery)",
                "Vertex AI",
                "AWS (S3, SageMaker)",
                "Terraform",
                "dbt",
                "Airflow",
                "Docker",
                "Kubernetes",
                "GitLab CI/CD",
                "Go",
                "Linux",
              ].map((skill, i) => (
                <button
                  key={i}
                  onClick={() =>
                    onSelectPrompt(`Tell me about Ian's experience with ${skill}.`)
                  }
                  className="px-2 py-0.5 rounded bg-[#25121b] hover:bg-[#321824] border border-[#3d1e2d] text-[11px] text-[#bdaab1] hover:text-[#f0e6e9] transition-colors"
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
