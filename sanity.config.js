import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  name: "default",
  title: "Einstein Floripa (Site)",

  projectId: "7jfw7fno",
  dataset: "production",

  schema: {
    types: schemaTypes,
  },

  plugins: [deskTool(), visionTool()],
});
