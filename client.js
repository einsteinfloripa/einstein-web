import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
});

export default client;
