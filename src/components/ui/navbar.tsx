"use client";

import { m } from "motion/react";
import Link from "next/link";

export function Navbar() {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="border flex border-neutral-800 rounded-xl shadow-sm w-fit mx-auto pointer-events-auto bg-black"
    >
      <Link
        className="p-3 px-4 block text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
        href="#home"
      >
        Home
      </Link>
      <Link
        className="p-3 px-4 block text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
        href="#projects"
      >
        Projects
      </Link>
      <Link
        className="p-3 px-4 block text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
        href="#work"
      >
        Work
      </Link>
      <Link
        className="p-3 px-4 block text-sm opacity-70 hover:opacity-100 transition-all ease-in-out"
        href="#about"
      >
        About
      </Link>
    </m.div>
  );
}
