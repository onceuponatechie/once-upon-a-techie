import { schemaTypes } from "./lib/sanity/schemas";

const config = {
  name: "portfolio",
  title: "Portfolio Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [],

  schema: {
    types: schemaTypes,
  },
};

export default config;
