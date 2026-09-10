import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPostsData } from "@/data/blogPosts";
import BlogPostView from "@/components/blog/BlogPostView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return {
      title: "Article Not Found — Muhammad Yusuf Arrofi",
    };
  }

  return {
    title: `${post.title.en} — Muhammad Yusuf Arrofi`,
    description: post.excerpt.en,
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
