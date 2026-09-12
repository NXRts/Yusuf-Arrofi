import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineered Projects & Software Artifacts",
  description:
    "Explore the portfolio of production applications, command-line utilities, full-stack web apps, and open-source contributions created by Muhammad Yusuf Arrofi (NXRts).",
  alternates: {
    canonical: "https://yusufarrofi.my.id/projects",
  },
  openGraph: {
    title: "Engineered Projects & Software Artifacts | Muhammad Yusuf Arrofi",
    description:
      "Explore 13+ production applications, CLI utilities, and open-source contributions built with Go, Next.js, React, and TypeScript.",
    url: "https://yusufarrofi.my.id/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
