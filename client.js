import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const projectId = 'iyxep8a7';
const dataset = 'develop';

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
});
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
