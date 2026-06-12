import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { education } from "@/lib/data/education";

export function Education() {
  return (
    <SectionShell id="education">
      <FadeIn>
        <SectionHeading label="Education" title="Academic background" />
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item, index) => (
          <FadeIn key={item.degree + item.institution} delay={index * 0.05}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm md:p-6">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-brand/10">
                <GraduationCap className="h-4 w-4 text-accent-brand" />
              </div>
              <p className="font-medium leading-snug text-foreground">
                {item.degree}
              </p>
              <p className="mt-1.5 flex-1 text-sm text-muted-foreground">
                {item.institution}
              </p>
              <p className="mt-4 text-xs font-medium tracking-wide text-accent-brand">
                {item.period}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
