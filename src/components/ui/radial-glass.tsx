"use client";

import { m } from "motion/react";
import Spline from "@splinetool/react-spline";

export function RadialGlass() {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="size-full"
    >
      <Spline scene="/radial-glass.spline" renderOnDemand />
    </m.div>
  );
}
