import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineConfig({
  name: "default",
  title: "Einstein Floripa (Site)",

  projectId: projectId,
  dataset: dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [deskTool(), visionTool()],
});
