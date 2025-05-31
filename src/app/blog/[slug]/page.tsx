import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/code-block";
import { Navbar } from "@/components/ui/navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { getPost } from "@/sanity/queries";
import { BlockContent } from "@/sanity/sanity.types";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Revalidate every 6 hours (21600 seconds)
export const revalidate = 21600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { data: post } = await getPost(slug);

  if (!post) {
    return {
      title: "Blog post not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Determine the base URL based on NODE_ENV
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://tanvirbhachu.dev";

  // Construct the absolute URL for the OG image
  const url = new URL(`${baseUrl}/api/og`);

  url.searchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://tanvirbhachu.dev/blog/${slug}` },
    keywords: ["journal", "blog"],
    authors: { name: "Tanvir Bhachu", url: "https://tanvirbhachu.dev" },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: url.toString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: url.toString(),
    },
  };
}

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

function Hero({ title, date }: { title: string; date: string }) {
  return (
    <div id="#home" className="h-full">
      <BackgroundBeams />

      <div className="p-5 pt-20 pb-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="sr-only">The blog</h1>

          <TextGenerateEffect
            words={title}
            className={cn(
              orbitron.className,
              "text-4xl md:text-6xl font-bold uppercase text-left max-w-7xl"
            )}
          />

          <p className="text-base max-w-xl text-left mt-8 opacity-80 animate-in fade-in-0 duration-1000">
            Published {format(new Date(date), "PPP")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = (await getPost(slug)) || notFound();

  return (
    <Suspense>
      <RenderPage post={post.data} />
    </Suspense>
  );
}

function RenderPage({
  post,
}: {
  post: {
    publishedAt: string;
    title: string;
    excerpt: string | null;
    body: BlockContent;
  };
}) {
  return (
    <div className="w-full text-white">
      <div className="fixed w-full pointer-events-none z-50 px-5">
        <Navbar />
      </div>

      <div className="px-5">
        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden py-24">
          <Hero title={post.title} date={post.publishedAt} />
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden p-5 sm:p-6 md:p-8 lg:p-12">
          {post.body && (
            <div className="max-w-2xl mx-auto">
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="my-10 text-base/8 first:mt-0 last:mb-0 text-foreground/80">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mt-12 mb-10 text-2xl/8 font-semibold tracking-tight first:mt-0 last:mb-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-12 mb-10 text-xl/8 font-medium tracking-tight first:mt-0 last:mb-0">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="my-10 border-l-2 border-l-emerald-600 pl-6 text-base/8 first:mt-0 last:mb-0">
                        {children}
                      </blockquote>
                    ),
                  },
                  types: {
                    codeBlock: ({ value }) => (
                      <CodeBlock
                        language={value.language}
                        code={value.content}
                      />
                    ),
                    image: ({ value }) => (
                      <img
                        alt={value.alt || ""}
                        src={urlFor(value).width(2000).url()}
                        className="w-full rounded-2xl"
                      />
                    ),
                    separator: ({ value }) => {
                      switch (value.style) {
                        case "line":
                          return (
                            <hr className="my-8 border-t border-gray-200" />
                          );
                        case "space":
                          return <div className="my-8" />;
                        default:
                          return null;
                      }
                    },
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => {
                      return (
                        <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                      );
                    },
                    number: ({ children }) => {
                      return (
                        <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                      );
                    },
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    code: ({ children }) => (
                      <>
                        <span aria-hidden>`</span>
                        <code className="text-[15px]/8 font-semibold">
                          {children}
                        </code>
                        <span aria-hidden>`</span>
                      </>
                    ),
                    link: ({ value, children }) => {
                      return (
                        <Link
                          href={value.href}
                          className="font-medium underline decoration-gray-400 underline-offset-4 data-hover:decoration-gray-600"
                        >
                          {children}
                        </Link>
                      );
                    },
                  },
                }}
              />
            </div>
          )}
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden p-5">
          <Button variant="outline" asChild>
            <Link href="/blog">
              <CaretLeft className="size-4" />
              Back to blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
