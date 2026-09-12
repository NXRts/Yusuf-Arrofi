import type { MetadataRoute } from "next";
import { blogPostsData } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yusufarrofi.my.id";
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic Blog Post routes
  blogPostsData.forEach((post) => {
    let postDate = now;
    if (post.date) {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) {
        postDate = parsed;
      }
    }

    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}
