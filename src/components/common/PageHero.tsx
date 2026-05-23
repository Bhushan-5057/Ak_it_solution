import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ReactNode } from "react";
import DottedSurface from "./DottedSurface";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  backHref,
  backLabel = "Back",
  children,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#eef6ff_0%,#ffffff_45%,#e8f1ff_100%)] text-foreground pt-20 pb-16 sm:pt-24 sm:pb-20">
      <DottedSurface className="opacity-70" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(54,146,203,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(29,45,121,0.14),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
          {backHref && (
            <Link
              href={backHref}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>
          )}

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-foreground">
            {title}
          </h1>
          <p className={`mt-5 text-sm sm:text-base lg:text-lg leading-8 text-muted-foreground max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
