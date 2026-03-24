import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

const builder = projectId
  ? imageUrlBuilder(createClient({ projectId, dataset, apiVersion }))
  : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    return { width: () => ({ url: () => "/placeholder.svg" }), url: () => "/placeholder.svg" };
  }
  return builder.image(source);
}
