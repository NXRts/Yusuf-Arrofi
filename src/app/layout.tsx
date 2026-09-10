import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Yusuf Arrofi (NXRts) — Full-Stack & Go Developer",
  description: "Official portfolio of Muhammad Yusuf Arrofi (NXRts), 19 y/o Software Engineer specializing in Go, Next.js, React, and Arch Linux desktop workflows. Creator of JapanApp and Aria2App.",
  keywords: [
    "Muhammad Yusuf Arrofi",
    "NXRts",
    "Yusuf Arrofi",
    "Full-Stack Developer",
    "Go Developer",
    "Golang",
    "Next.js",
    "React",
    "Surakarta",
    "Indonesia",
    "JapanApp",
    "Aria2App",
  ],
  authors: [{ name: "Muhammad Yusuf Arrofi", url: "https://github.com/NXRts" }],
  creator: "Muhammad Yusuf Arrofi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusufarrofi.vercel.app/",
    title: "Muhammad Yusuf Arrofi (NXRts) — Full-Stack & Go Developer",
    description: "Specialized in building performant web applications, responsive frontend architectures, and Go/Node services.",
    siteName: "Muhammad Yusuf Arrofi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yusuf Arrofi (NXRts)",
    description: "Full-Stack & Go Developer from Surakarta, Indonesia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#0d1323] text-[#dde2f9] min-h-screen flex flex-col font-sans selection:bg-[#4f46e5] selection:text-white antialiased">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
