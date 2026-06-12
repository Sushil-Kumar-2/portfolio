import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-accent-brand" aria-hidden />
        <p className="text-xs font-semibold tracking-[0.18em] text-accent-brand uppercase">
          {label}
        </p>
      </div>
      <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
