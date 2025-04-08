import { getPostsForFeed } from "@/sanity/queries";
import { Feed } from "feed";
import assert from "node:assert";

export async function GET(req: Request) {
  const siteUrl = new URL(req.url).origin;

  const feed = new Feed({
    title: `Tanvir Bhachu's Blog`,
    description:
      "Just a place on the internet to share some cool ides, problems and thoughts. The idea I have is that whenever to solve a hard problem, I could create a blog post to make life easier for others.",
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  const posts = await getPostsForFeed();

  posts.data.forEach(
    (post: {
      title: string;
      slug: string;
      excerpt: string;
      publishedAt: string;
    }) => {
      try {
        assert(typeof post.title === "string");
        assert(typeof post.slug === "string");
        assert(typeof post.excerpt === "string");
        assert(typeof post.publishedAt === "string");
      } catch {
        console.log("Post is missing required fields for RSS feed:", post);
        return;
      }

      // Construct the absolute URL for the OG image
      const url = new URL(`${siteUrl}/api/og`);

      url.searchParams.set("title", post.title);

      feed.addItem({
        title: post.title,
        id: post.slug,
        link: `${siteUrl}/blog/${post.slug}`,
        content: post.excerpt,
        image: url.toString(),
        author: [{ name: "Tanvir Bhachu" }],
        date: new Date(post.publishedAt),
      });
    }
  );

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31556952",
    },
  });
}
