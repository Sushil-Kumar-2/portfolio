"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, Link2, Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data/profile";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "Sushil-Kumar-2",
    href: profile.github,
    icon: Code2,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "sushil-kumar",
    href: profile.linkedin,
    icon: Link2,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <SectionShell id="contact" variant="accent">
      <FadeIn>
        <SectionHeading
          label="Contact"
          title="Let's build something together"
          description="Open to full-time roles and meaningful collaborations. Reach out — I typically respond within a day."
          align="center"
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={
                "external" in item && item.external ? "_blank" : undefined
              }
              rel={
                "external" in item && item.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-accent-brand/30 hover:shadow-md hover:shadow-accent-brand/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-brand/10 transition-colors group-hover:bg-accent-brand/15">
                <item.icon className="h-4 w-4 text-accent-brand" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="truncate text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent-brand/20 bg-linear-to-br from-accent-brand/10 via-card to-card p-8 text-center shadow-sm md:p-10">
          <p className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
            Ready to collaborate?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Whether it&apos;s a full-time role or a side project — I&apos;d love
            to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 inline-flex h-11 rounded-full px-8 shadow-md shadow-accent-brand/20",
            )}
          >
            Send an email
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
