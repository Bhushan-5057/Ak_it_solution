import { Metadata } from "next";
import Image from "next/image";
import { loadData } from "@/utils/dataLoader";
import { IndustryItem } from "@/types";
import { Check } from "lucide-react";
import ContactCTA from "@/components/common/ContactCTA";
import PageHero from "@/components/common/PageHero";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Learn how we support finance, healthcare, retail, edtech, and automated logistics domains.",
};

const industryImages: Record<string, string> = {
  "transforming-domains": "/images/manufacturing.jpg",
  "service-offerings": "/images/finance.jpg",
  "secure-scalable-solutions": "/images/healthcare.jpg",
  empowerment: "/images/manufacturing.jpg",
  "future-powering": "/images/education.jpg",
};

export default function IndustriesPage() {
  const industries = loadData<IndustryItem[]>("industries.text");
  const faqs = loadData<{ industries: FAQItem[] }>("faqs.text");

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow="Vertical Markets"
        title="Tailored Industry Expertise"
        description="We deliver industry-compliant software and server configurations designed for your vertical market."
      />
      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={industry.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center`}
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } w-full`}
                >
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl shadow-primary/5  ">
                    <Image
                      src={industryImages[industry.slug] ?? "/images/education.jpg"}
                      alt={`${industry.title} industry solution`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101e]/82 via-[#07101e]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <span className="inline-flex rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur">
                        {industry.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } space-y-6`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Industry Solution {index + 1}
                    </span>
                    <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                      {industry.title}
                    </h2>
                  </div>
                  <div className="h-1.5 w-16 bg-primary rounded-full" />
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {industry.details}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {industry.offerings.map((offering, oIdx) => (
                      <div key={oIdx} className="flex items-center text-xs sm:text-sm text-foreground/90 font-medium">
                        <span className="p-0.5 bg-primary/10 text-primary rounded-full mr-3 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FAQSection
        items={faqs.industries}
        subtitle="Industries FAQ"
        title="Industry Delivery Questions"
      />
      <ContactCTA />
    </div>
  );
}
