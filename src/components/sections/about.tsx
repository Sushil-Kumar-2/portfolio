import Image from "next/image";
import { Mail, MapPin, Phone, Languages } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { profile } from "@/lib/data/profile";

const infoItems = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
] as const;

export function About() {
  return (
    <SectionShell id="about" variant="muted">
      <FadeIn>
        <SectionHeading label="About" title="A developer who ships with care" />
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <FadeIn delay={0.05}>
          <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
            {profile.bio}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: "1+", label: "Years exp." },
              { value: "5+", label: "Projects" },
              { value: "2", label: "Databases" },
              { value: "7+", label: "Tech stacks exp." },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7">
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-accent-brand/20 shadow-md shadow-accent-brand/15">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  unoptimized
                  sizes="56px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>

            <dl className="space-y-4">
              {infoItems.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                      {item.label}
                    </dt>
                    {"href" in item && item.href ? (
                      <dd>
                        <a
                          href={item.href}
                          className="mt-0.5 block truncate text-sm text-accent-brand hover:underline"
                        >
                          {item.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="mt-0.5 text-sm text-foreground">{item.value}</dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
