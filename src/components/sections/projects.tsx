"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import TiltedCard from "@/components/react-bits/tilted-card";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <SectionShell id="projects" variant="accent" wide>
      <FadeIn>
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Production-style applications built end to end — from database design to polished interfaces."
        />
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-2">
        {featured.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.06}>
            <ProjectCard project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md hover:shadow-accent-brand/5">
      <TiltedCard className="w-full" rotateAmplitude={4}>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 font-mono text-xs font-medium text-white/80">
            0{index + 1}
          </span>
        </div>
      </TiltedCard>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 2).map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-muted-foreground"
            >
              <span className="text-accent-brand">·</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-md border-border/80 bg-muted/30 font-normal text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 pt-6">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-brand hover:underline"
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
              !project.liveUrl && "text-accent-brand",
            )}
          >
            <Code2 className="h-3.5 w-3.5" />
            Source Code
          </Link>
        </div>
      </div>
    </article>
  );
}
