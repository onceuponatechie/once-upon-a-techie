import { client } from "@/lib/sanity/client";
import { allBuildsQuery } from "@/lib/sanity/queries";
import BuildsClient from "./BuildsClient";

export const revalidate = 60;

export const metadata = {
  title: "Builds | Once Upon a Techie",
  description: "Case studies and projects — from concept to launch.",
};

export default async function BuildsPage() {
  const builds = await client?.fetch(allBuildsQuery).catch(() => []) ?? [];
  return <BuildsClient builds={builds} />;
}
