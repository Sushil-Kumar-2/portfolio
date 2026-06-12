"use client";

import { cn } from "@/lib/utils";

interface FluidGlassProps {
  children: React.ReactNode;
  className?: string;
}

export default function FluidGlass({ children, className }: FluidGlassProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border border-black/5 bg-[#F8F8F7]/70 shadow-sm backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#141414]/70",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-white/10 dark:from-white/5 dark:to-transparent"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
