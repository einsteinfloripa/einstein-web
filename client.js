import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_DATASET;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
});
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
