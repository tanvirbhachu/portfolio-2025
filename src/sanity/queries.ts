import { defineQuery } from "next-sanity";
import { sanityFetch } from "./lib/live";

const TOTAL_POSTS_QUERY = defineQuery(/* groq */ `count(*[
  _type == "post"
  && defined(slug.current)
  && isFeatured != true
])`);

export async function getPostsCount() {
  return await sanityFetch({
    query: TOTAL_POSTS_QUERY,
  });
}

const POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
}`);

export async function getPosts(startIndex: number, endIndex: number) {
  return await sanityFetch({
    query: POSTS_QUERY,
    params: {
      startIndex,
      endIndex,
    },
  });
}

const FEATURED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
}`);

export async function getFeaturedPosts(quantity: number) {
  return await sanityFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  });
}

const FEED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
]|order(isFeatured, publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
}`);

export async function getPostsForFeed() {
  return await sanityFetch({
    query: FEED_POSTS_QUERY,
  });
}

const POST_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  excerpt,
  body,
}
`);

export async function getPost(slug: string) {
  return await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });
}
