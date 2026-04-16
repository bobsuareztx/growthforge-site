import { Metadata } from "next";
import BlogPostTemplate from "@/templates/BlogPostTemplate";
import { getAllBlogPostSlugs, getBlogPostBySlug } from "@/data/resources/blogPosts";

export function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  return { title: `${post.title} | Growthforge`, description: post.description };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  return <BlogPostTemplate {...post} />;
}
