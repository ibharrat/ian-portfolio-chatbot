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
  title: "Ian Bharrat | Portfolio AI Assistant",
  description:
    "Ask questions about Ian Bharrat's background, cloud experience, data analytics projects, and career aspirations.",
  keywords: [
    "Ian Bharrat",
    "Cloud Engineer",
    "DevOps",
    "Terraform",
    "Data Analytics",
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
    <html lang="en" className="dark bg-[#160a0f]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#160a0f] text-[#dfd2d6] min-h-screen selection:bg-[#451e31] selection:text-[#f0e6e9]`}
      >
        {children}
      </body>
    </html>
  );
}
