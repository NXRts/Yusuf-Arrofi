import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
    default: "Muhammad Yusuf Arrofi — Software Engineer & Full-Stack Developer",
    template: "%s | Muhammad Yusuf Arrofi",
  },
  description:
    "Personal portfolio and engineering log of Muhammad Yusuf Arrofi (NXRts). Software engineer focused on Go, backend architectures, deliberate frontend engineering with Next.js & React, and offline-first tools.",
  keywords: [
    "Muhammad Yusuf Arrofi",
    "Yusuf Arrofi",
    "NXRts",
    "Software Engineer",
    "Full-Stack Developer",
    "Go Developer",
    "Golang",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer Surakarta",
    "Programmer Indonesia",
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
    title: "Muhammad Yusuf Arrofi — Software Engineer & Full-Stack Developer",
    description:
      "Editorial developer portfolio of Muhammad Yusuf Arrofi (NXRts). Software engineering, backend architecture in Go, responsive frontend systems, and offline-first utilities.",
    siteName: "Muhammad Yusuf Arrofi",
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
    title: "Muhammad Yusuf Arrofi — Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer based in Surakarta, Indonesia. Creator of JapanApp, DataScry, Aria2App, and Prameswari EO.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-48x48.png?v=2", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
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
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=2" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
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
