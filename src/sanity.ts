import { env } from "~/env";
import { createClient, type ClientConfig } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const config = {
  dataset: env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
} satisfies ClientConfig;

export const sanityClient = createClient(config);

export const urlFor = (source: SanityImageSource | null) => {
  if (source == null) return null;
  return createImageUrlBuilder(config).image(source);
};
