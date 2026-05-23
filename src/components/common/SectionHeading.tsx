import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "max-w-3xl mb-12 space-y-3",
          {
            "mx-auto text-center": align === "center",
            "text-left": align === "left",
            "ml-auto text-right": align === "right",
          },
          className
        )
      )}
    >
      {subtitle && (
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
        {title}
      </h2>
      <div
        className={clsx(
          "h-1.5 w-20 bg-primary rounded-full transition-all duration-300",
          {
            "mx-auto": align === "center",
            "mr-auto": align === "right",
          }
        )}
      />
    </div>
  );
}
