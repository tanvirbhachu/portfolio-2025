"use client";

import { socials } from "@/lib/social";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="max-w-5xl mx-auto bg-background text-foreground w-full border-b border-x flex justify-between pointer-events-auto">
      <div className="flex items-center">
        <Link
          className="h-12 flex items-center px-4 text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
          href="/"
        >
          Portfolio
        </Link>
        <Link
          className="h-12 flex items-center px-4 text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
          href="/blog"
        >
          Blog
        </Link>
      </div>

      <div className="flex items-center gap-0.5">
        <Link
          className="h-12 flex items-center px-2 text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
          href={socials.x.url}
        >
          <socials.x.icon size={20} />
        </Link>
        <Link
          className="h-12 flex items-center px-2 text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
          href={socials.linkedin.url}
        >
          <socials.linkedin.icon size={20} />
        </Link>
        <Link
          className="h-12 flex items-center px-2 text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
          href={socials.github.url}
        >
          <socials.github.icon size={20} />
        </Link>
      </div>
    </div>
  );
}
