import { BlogPostTemplateProps } from "@/types/templates";
import { whyReportingBreaksSlowlyPost } from "@/data/resources/blogPosts/why-reporting-breaks-slowly";

const blogPosts: Record<string, BlogPostTemplateProps> = {
  "why-reporting-breaks-slowly": whyReportingBreaksSlowlyPost,
};

export function getBlogPostBySlug(slug: string): BlogPostTemplateProps {
  const post = blogPosts[slug];
  if (!post) throw new Error(`Unknown blog post slug: ${slug}`);
  return post;
}

export function getAllBlogPostSlugs(): string[] {
  return Object.keys(blogPosts);
}
