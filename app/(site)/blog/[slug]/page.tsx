import { client } from "@/lib/sanity/client";
import { blogPostBySlugQuery, blogPostSlugsQuery } from "@/lib/sanity/queries";
import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: string[] = await client?.fetch(blogPostSlugsQuery).catch(() => []) ?? [];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await client
    ?.fetch(blogPostBySlugQuery, { slug: params.slug })
    .catch(() => null) ?? null;
  return {
    title: post ? `${post.title} | Stories` : "Story | Once Upon a Techie",
    description: post?.excerpt || "",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client
    ?.fetch(blogPostBySlugQuery, { slug: params.slug })
    .catch(() => null) ?? null;

  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
