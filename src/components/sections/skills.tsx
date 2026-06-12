import {
  Braces,
  Database,
  Globe,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { skillGroups, languages } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

const groupMeta: Record<
  string,
  { icon: LucideIcon; accent: string; border: string }
> = {
  Frontend: {
    icon: Globe,
    accent: "text-sky-600 dark:text-sky-400",
    border: "border-l-sky-500",
  },
  Backend: {
    icon: Braces,
    accent: "text-violet-600 dark:text-violet-400",
    border: "border-l-violet-500",
  },
  Databases: {
    icon: Database,
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-l-emerald-500",
  },
  Tools: {
    icon: Wrench,
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-l-amber-500",
  },
};

export function Skills() {
  return (
    <SectionShell id="skills" variant="muted">
      <FadeIn>
        <SectionHeading label="Skills" title="Tools I work with" />
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const meta = groupMeta[group.title] ?? groupMeta.Tools;
          const Icon = meta.icon;

          return (
            <FadeIn key={group.title} delay={index * 0.04}>
              <div
                className={cn(
                  "h-full rounded-xl border border-border border-l-4 bg-card p-5 shadow-sm md:p-6",
                  meta.border,
                )}
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <Icon className={cn("h-4 w-4", meta.accent)} />
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-muted/60 px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
          <span className="text-sm font-semibold text-foreground">
            Languages
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
          {languages.map((lang) => (
            <span
              key={lang}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
            >
              {lang}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
