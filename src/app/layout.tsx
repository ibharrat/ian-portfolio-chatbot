import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ian Bharrat | Interactive AI Portfolio & Resume Assistant",
  description:
    "Ask questions about Ian Bharrat's experience, AWS cloud infrastructure projects, certifications, technical skills, and background.",
  keywords: [
    "Ian Bharrat",
    "Cloud Engineer",
    "DevOps",
    "AWS Certified",
    "Terraform",
    "Kean University",
    "Portfolio AI",
    "Software Engineer",
  ],
  authors: [{ name: "Ian Bharrat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100 min-h-screen selection:bg-zinc-800 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
