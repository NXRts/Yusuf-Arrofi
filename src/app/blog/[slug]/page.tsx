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
    title: post.title.en,
    description: post.excerpt.en,
    keywords: [post.category, "Muhammad Yusuf Arrofi", "Tech Blog", "Software Engineering"],
    alternates: {
      canonical: `https://yusufarrofi.my.id/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${post.title.en} — Muhammad Yusuf Arrofi`,
      description: post.excerpt.en,
      url: `https://yusufarrofi.my.id/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Muhammad Yusuf Arrofi"],
      images: [
        {
          url: post.image,
          alt: post.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title.en} — Muhammad Yusuf Arrofi`,
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
