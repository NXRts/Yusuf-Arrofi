import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
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
  metadataBase: new URL("https://yusufarrofi.my.id"),
  title: {
    default: "Muhammad Yusuf Arrofi (NXRts) — Full-Stack & Go Developer",
    template: "%s | Muhammad Yusuf Arrofi",
  },
  description: "Official portfolio of Muhammad Yusuf Arrofi (NXRts), 19 y/o Software Engineer specializing in Go, Next.js, React, TypeScript, and Arch Linux desktop workflows. Creator of JapanApp, DataScry, Aria2App, and Prameswari EO.",
  keywords: [
    "Muhammad Yusuf Arrofi",
    "Yusuf Arrofi",
    "NXRts",
    "YUSUF.DEV",
    "Portofolio Yusuf Arrofi",
    "Full-Stack Developer",
    "Software Engineer Indonesia",
    "Go Developer",
    "Golang",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer Surakarta",
    "Programmer Solo",
    "Arch Linux",
    "JapanApp",
    "DataScry",
    "Aria2App",
    "Prameswari EO",
  ],
  authors: [{ name: "Muhammad Yusuf Arrofi", url: "https://github.com/NXRts" }],
  creator: "Muhammad Yusuf Arrofi",
  publisher: "Muhammad Yusuf Arrofi",
  alternates: {
    canonical: "https://yusufarrofi.my.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusufarrofi.my.id",
    title: "Muhammad Yusuf Arrofi (NXRts) — Full-Stack & Go Developer",
    description: "Specialized in building performant web applications, responsive frontend architectures, and Go/Node services.",
    siteName: "Muhammad Yusuf Arrofi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Yusuf Arrofi — Software Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yusuf Arrofi (NXRts) — Full-Stack & Go Developer",
    description: "Full-Stack & Go Developer from Surakarta, Indonesia. Creator of JapanApp, DataScry, and Aria2App.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "googlef0cd77f63916e9da",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <JsonLd />
      </head>
      <body className="bg-surface text-on-surface min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-white antialiased">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
