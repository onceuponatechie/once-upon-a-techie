import { client } from "@/lib/sanity/client";
import {
  allBlogPostsQuery,
  allBuildsQuery,
  allFaqsQuery,
} from "@/lib/sanity/queries";
import HomeClient from "./HomeClient";

export const revalidate = 60;

export default async function HomePage() {
  const [posts, builds, faqs] = await Promise.all([
    client?.fetch(allBlogPostsQuery).catch(() => []) ?? [],
    client?.fetch(allBuildsQuery).catch(() => []) ?? [],
    client?.fetch(allFaqsQuery).catch(() => []) ?? [],
  ]);

  return <HomeClient posts={posts} builds={builds} faqs={faqs} />;
}
