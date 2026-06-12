"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import BlurText from "@/components/react-bits/blur-text";
import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data/profile";

const Ballpit = dynamic(() => import("@/components/react-bits/ballpit"), {
  ssr: false,
});

export function Hero() {
  const [ballCount, setBallCount] = useState<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setBallCount(media.matches ? 35 : 80);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28 pb-20 [touch-action:pan-y] md:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-35 max-md:opacity-25 dark:opacity-30 dark:max-md:opacity-20"
        aria-hidden
      >
        {ballCount !== null ? (
          <Ballpit
            className="h-full w-full"
            count={ballCount}
            gravity={0.35}
            followCursor={false}
            colors={[0x2563eb, 0x6366f1, 0x0ea5e9, 0x818cf8]}
            ambientColor={0x3b82f6}
            ambientIntensity={0.55}
            lightIntensity={200}
            materialParams={{
              metalness: 0.12,
              roughness: 0.42,
              clearcoat: 1,
              clearcoatRoughness: 0.1,
            }}
          />
        ) : null}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-r from-background/95 via-background/60 to-transparent dark:from-background/95 dark:via-background/70 dark:to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_400px]">
          {/* Left — copy */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-brand/20 bg-accent-brand/5 px-3 py-1 text-xs font-medium text-accent-brand">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-brand opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-brand" />
                  </span>
                  Open to opportunities
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {profile.location}
                </span>
              </div>
            </FadeIn>

            <p className="mb-3 text-sm font-semibold tracking-wide text-accent-brand">
              {profile.role}
            </p>

            <BlurText
              text={profile.name}
              delay={50}
              animateBy="words"
              direction="bottom"
              className="font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.05]"
            />

            <FadeIn delay={0.1}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                {profile.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-2">
                {profile.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#projects"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 rounded-full px-7 shadow-md shadow-accent-brand/20",
                  )}
                >
                  View Projects
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
                </Link>
                <Link
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 rounded-full border-border/80 bg-card/50 px-7 backdrop-blur-sm",
                  )}
                >
                  Get in Touch
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right — portrait */}
          <div className="relative z-20 order-1 mx-auto w-full max-w-[320px] lg:order-2 lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-px rounded-[1.75rem] bg-linear-to-b from-accent-brand/40 via-accent-brand/10 to-transparent opacity-80" />

              <div className="relative overflow-hidden rounded-[1.65rem] border border-white/20 bg-muted shadow-2xl shadow-accent-brand/15 dark:border-white/10 dark:shadow-accent-brand/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={profile.image}
                    alt={`${profile.name} — ${profile.role}`}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 320px, 460px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-5">
                    <p className="font-serif text-xl text-white">{profile.name}</p>
                    <p className="text-sm text-white/75">{profile.role}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 -bottom-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg max-lg:hidden">
                <p className="text-lg font-semibold text-accent-brand">1+</p>
                <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
                  Yrs Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
