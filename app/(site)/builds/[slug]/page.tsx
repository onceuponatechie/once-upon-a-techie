import { client } from "@/lib/sanity/client";
import { buildBySlugQuery, buildSlugsQuery } from "@/lib/sanity/queries";
import BuildDetailClient from "./BuildDetailClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: string[] = await client?.fetch(buildSlugsQuery).catch(() => []) ?? [];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const build = await client
    ?.fetch(buildBySlugQuery, { slug: params.slug })
    .catch(() => null) ?? null;
  return {
    title: build ? `${build.title} | Builds` : "Build | Once Upon a Techie",
    description: build?.shortDescription || "",
  };
}

export default async function BuildDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const build = await client
    ?.fetch(buildBySlugQuery, { slug: params.slug })
    .catch(() => null) ?? null;

  if (!build) notFound();

  return <BuildDetailClient build={build} />;
}
