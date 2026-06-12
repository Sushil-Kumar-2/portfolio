"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import FluidGlass from "@/components/react-bits/fluid-glass";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/lib/data/profile";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks: { label: string; href: string; id: SectionId }[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const activeSection = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 md:px-6">
      <FluidGlass className="mx-auto max-w-5xl shadow-sm shadow-black/5 dark:shadow-black/20">
        <nav className="flex h-14 items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-brand text-xs font-bold text-accent-brand-foreground">
              SK
            </span>
            <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-all",
                  activeSection === link.id
                    ? "bg-accent-brand/10 font-medium text-accent-brand"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumePath}
              download
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden rounded-full px-4 sm:inline-flex",
              )}
            >
              Resume
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9 md:hidden",
                )}
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm transition-colors",
                        activeSection === link.id
                          ? "bg-accent-brand/10 font-medium text-accent-brand"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href={profile.resumePath}
                    download
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants(),
                      "mt-3 rounded-lg text-center",
                    )}
                  >
                    Download Resume
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </FluidGlass>
    </header>
  );
}
