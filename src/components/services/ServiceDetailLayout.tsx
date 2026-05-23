import Image from "next/image";
import { ArrowRight, CheckCircle, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { ServiceItem } from "@/types";
import Button from "@/components/common/Button";
import ContactCTA from "@/components/common/ContactCTA";
import PageHero from "@/components/common/PageHero";
import { cn } from "@/lib/utils";

type ServiceDetailLayoutProps = {
  service: ServiceItem;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  summary: string;
  deliverables: string[];
};

export default function ServiceDetailLayout({
  service,
  heading,
  imageSrc,
  imageAlt,
  imageSide = "right",
  summary,
  deliverables,
}: ServiceDetailLayoutProps) {
  const imageFirst = imageSide === "left";

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        description={service.description}
        align="center"
        backHref="/services"
        backLabel="Back to Services"
      />

      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div
              className={cn(
                "lg:col-span-5",
                imageFirst ? "lg:order-1" : "lg:order-2"
              )}
              data-aos={imageFirst ? "fade-right" : "fade-left"}
            >
              <div className="relative mx-auto max-w-[500px]">

                <div className="absolute -inset-4 rounded-[32px] bg-primary/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl">

                  <div className="relative aspect-[4/4.5] overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute top-5 left-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-lg backdrop-blur">
                        <Sparkles className="h-4 w-4" />
                        Premium Service
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/80 leading-6">
                        Delivering scalable and future-ready digital solutions.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-t border-border/20 bg-white/80">
                    <div className="p-4 text-center">
                      <div className="text-lg font-extrabold text-foreground">100%</div>
                      <div className="text-xs text-muted-foreground">
                        Custom Built
                      </div>
                    </div>

                    <div className="p-4 text-center border-x border-border/20">
                      <div className="text-lg font-extrabold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">
                        Support
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <div className="text-lg font-extrabold text-foreground">Modern</div>
                      <div className="text-xs text-muted-foreground">
                        Stack
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "lg:col-span-7",
                imageFirst ? "lg:order-2" : "lg:order-1"
              )}
              data-aos={imageFirst ? "fade-left" : "fade-right"}
            >
              <div className="max-w-3xl space-y-8">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary">
                    <Layers className="h-4 w-4" />
                    Built for practical business outcomes
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
                    {heading}
                  </h2>
                  <p className="text-sm sm:text-base leading-8 text-muted-foreground">
                    {service.details}
                  </p>
                  <p className="text-sm sm:text-base leading-8 text-muted-foreground">
                    {summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 rounded-[8px] border border-border/80 bg-card/80 p-4 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold leading-6 text-foreground/90">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[8px] border border-primary/15 bg-white/70 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-base font-extrabold text-foreground">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    What we usually deliver
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact-us" variant="primary" size="lg" className="w-full sm:w-auto">
                    Discuss This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto bg-white/70">
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
