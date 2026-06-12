import { Briefcase } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { experience } from "@/lib/data/experience";

export function Experience() {
  return (
    <SectionShell id="experience">
      <FadeIn>
        <SectionHeading
          label="Experience"
          title="Where I've built and learned"
        />
      </FadeIn>

      <div className="relative space-y-0">
        <div
          className="absolute top-3 bottom-3 left-[19px] w-px bg-border md:left-[23px]"
          aria-hidden
        />

        {experience.map((item, index) => (
          <FadeIn key={item.company} delay={index * 0.06}>
            <article className="relative grid gap-6 pb-12 pl-12 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-10 md:pl-14">
              <span
                className="absolute top-1.5 left-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-accent-brand shadow-sm shadow-accent-brand/30 md:left-4"
                aria-hidden
              >
                <Briefcase className="h-2.5 w-2.5 text-white" />
              </span>

              <div className="md:sticky md:top-28 md:self-start">
                <span className="inline-block rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {item.period}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-accent-brand">{item.company}</p>
              </div>

              <ul className="space-y-3">
                {item.highlights.slice(0, 4).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-brand/60" />
                    {highlight}
                  </li>
                ))}
                {item.highlights.length > 4 ? (
                  <li className="text-xs text-muted-foreground/70">
                    +{item.highlights.length - 4} more accomplishments
                  </li>
                ) : null}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
