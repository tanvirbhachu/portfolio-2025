import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { getPosts, getPostsCount } from "@/sanity/queries";
import { POSTS_QUERYResult } from "@/sanity/sanity.types";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { format } from "date-fns";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Just a place on the internet to share some cool ides, problems and thoughts",
  alternates: {
    canonical: "https://tanvirbhachu.dev/blog",
  },
};

const postsPerPage = 10;

async function Posts({ page }: { page: number }) {
  const posts = await getPosts((page - 1) * postsPerPage, page * postsPerPage);

  if (posts.data.length === 0 && page > 1) {
    notFound();
  }

  if (posts.data.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <div>
      {posts.data.map((post: POSTS_QUERYResult[number]) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b last:border-b-0 py-6 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-300 sm:font-medium px-5">
              {post.publishedAt
                ? format(new Date(post.publishedAt), "dd MMM, yyyy")
                : "Unknown published date"}
            </div>
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl px-5">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-400">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <CaretRight className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function Pagination({ page }: { page: number }) {
  function url(page: number) {
    const params = new URLSearchParams();

    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : "/blog";
  }

  const totalPosts = await getPostsCount();
  const hasPreviousPage = page - 1;
  const previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  const hasNextPage = page * postsPerPage < totalPosts.data;
  const nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  const pageCount = Math.ceil(totalPosts.data / postsPerPage);

  if (pageCount < 2) {
    return;
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <Button variant="outline" disabled={!previousPageUrl} asChild>
        <Link href={previousPageUrl ?? "#"}>
          <CaretLeft className="size-4" />
          Previous
        </Link>
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-hover:bg-gray-100",
              "data-active:ring-1 data-active:shadow-sm data-active:ring-black/10",
              "data-active:data-hover:bg-gray-50"
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" disabled={!nextPageUrl} asChild>
        <Link href={nextPageUrl ?? "#"}>
          Next
          <CaretRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div id="#home" className="h-full">
      <BackgroundBeams />

      <div className="p-5 py-24 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="sr-only">The blog</h1>

          <TextGenerateEffect
            words="The Blog"
            className={cn(
              orbitron.className,
              "text-4xl md:text-6xl font-bold uppercase text-left max-w-7xl"
            )}
          />

          <p className="text-base max-w-xl text-left mt-8 opacity-80 animate-in fade-in-0 duration-1000">
            Just a place on the internet to share some cool ides, problems and
            thoughts. The idea I have is that whenever to solve a hard problem,
            I could create a blog post to make life easier for others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const page =
    "page" in params
      ? typeof params.page === "string" && parseInt(params.page) > 1
        ? parseInt(params.page)
        : notFound()
      : 1;

  return (
    <div className="w-full text-white">
      <div className="fixed w-full pointer-events-none z-50 px-5">
        <Navbar />
      </div>

      <div className="px-5">
        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden">
          <Hero />
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden">
          <Posts page={page} />
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden p-5">
          <Pagination page={page} />
        </div>
      </div>
    </div>
  );
}
