import { client } from "@/lib/sanity/client";
import { allBlogPostsQuery } from "@/lib/sanity/queries";
import BlogClient from "./BlogClient";

export const revalidate = 60;

export const metadata = {
  title: "Stories | Once Upon a Techie",
  description: "Thoughts on building, creating, and everything in between.",
};

export default async function BlogPage() {
  const posts = await client?.fetch(allBlogPostsQuery).catch(() => []) ?? [];
  return <BlogClient posts={posts} />;
}
