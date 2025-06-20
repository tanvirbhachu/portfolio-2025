import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import { Suspense } from "react";
import Loading from "./loading";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description =
  "Hey, I'm Tanvir, a full stack web developer, designer, and creator of Jadebook. Mainly focused on building web applications and platforms.";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Tanvir Bhachu",
    template: "%s | Tanvir Bhachu",
  },
  description: description,
  icons: "/favicon.png",
  openGraph: {
    images: "/open-graph.png",
    type: "website",
    url: "https://tanvirbhachu.dev",
    description: description,
  },
  twitter: {
    images: "/open-graph.png",
    description: description,
  },
  keywords: [
    "portfolio",
    "web developer",
    "ui designer",
    "ux designer",
    "jadebook",
  ],
  alternates: {
    canonical: "https://tanvirbhachu.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <Head>
        {/* preload the `/radial-glass.spline` file */}
        <link rel="preload" href="/radial-glass.spline" as="fetch" />
      </Head>
      <body
        className={`h-full antialiased relative ${geistSans.className} bg-background dark`}
      >
        <Suspense fallback={<Loading />}>
          <LazyMotion features={domAnimation} strict>
            {children}
          </LazyMotion>

          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
