import { client } from "@/lib/sanity/client";
import { allBookReadsQuery } from "@/lib/sanity/queries";
import ReadersCornerClient from "./ReadersCornerClient";

export const revalidate = 60;

export const metadata = {
  title: "Reader's Corner | Once Upon a Techie",
  description: "Books that shape how I think about products, stories, and craft.",
};

export default async function ReadersCornerPage() {
  const books = await client?.fetch(allBookReadsQuery).catch(() => []) ?? [];
  return <ReadersCornerClient books={books} />;
}
