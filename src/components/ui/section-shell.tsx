import { cn } from "@/lib/utils";

type SectionVariant = "default" | "muted" | "accent";

interface SectionShellProps {
  id?: string;
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
  wide?: boolean;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "",
  muted: "border-y border-border/60 bg-muted/30",
  accent:
    "border-y border-border/60 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]",
};

export function SectionShell({
  id,
  children,
  variant = "default",
  className,
  wide = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", variantStyles[variant], className)}
    >
      <div
        className={cn(
          "mx-auto px-6",
          wide ? "max-w-6xl" : "max-w-5xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}
