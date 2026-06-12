import Link from "next/link";
import { Code2, Link2, Mail } from "lucide-react";
import { profile } from "@/lib/data/profile";

const socialLinks = [
  { href: profile.github, icon: Code2, label: "GitHub" },
  { href: profile.linkedin, icon: Link2, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm font-medium text-foreground">
            © 2026 {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent-brand/30 hover:bg-accent-brand/5 hover:text-accent-brand"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
