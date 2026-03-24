import { client } from "@/lib/sanity/client";
import { allResourcesQuery } from "@/lib/sanity/queries";
import ResourcesClient from "./ResourcesClient";

export const revalidate = 60;

export const metadata = {
  title: "Resources | Once Upon a Techie",
  description: "Templates, guides, freebies, and tools from the creative vault.",
};

export default async function ResourcesPage() {
  const resources = await client?.fetch(allResourcesQuery).catch(() => []) ?? [];
  return <ResourcesClient resources={resources} />;
}
