import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog & Tech Articles",
  description:
    "Technical case studies, deep dives into Go, React, Next.js, machine learning, and developer tooling written by Muhammad Yusuf Arrofi.",
  alternates: {
    canonical: "https://yusufarrofi.my.id/blog",
  },
  openGraph: {
    title: "Engineering Blog & Tech Articles | Muhammad Yusuf Arrofi",
    description:
      "Articles, tutorials, and development insights on full-stack web architecture, systems programming, and performance engineering.",
    url: "https://yusufarrofi.my.id/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
