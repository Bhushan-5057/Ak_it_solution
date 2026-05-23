import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { ServiceItem } from "@/types";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { DynamicIcon } from "@/components/common/Cards";
import { Check } from "lucide-react";
import ContactCTA from "@/components/common/ContactCTA";
import PageHero from "@/components/common/PageHero";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our software engineering solutions, including website development, mobile apps, SaaS, and cyber security.",
};

export default function ServicesPage() {
  const services = loadData<ServiceItem[]>("services.text");
  const faqs = loadData<{ services: FAQItem[] }>("faqs.text");

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow="Our Offerings"
        title="High-Performance IT Solutions"
        description="From design to deployment, we build robust software architectures that accelerate business performance."
      />
      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Software Excellence"
            title="We Solve Complex Architecture Challenges"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-card/95 border border-border/80  p-6 sm:p-8 rounded-xl flex flex-col justify-between hover-glow shadow-sm backdrop-blur"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <DynamicIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.details}
                  </p>
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground/80 mb-2">
                      Key Highlights:
                    </h4>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start text-xs sm:text-sm text-foreground/90">
                        <span className="p-0.5 bg-primary/10 text-primary rounded-full mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Button
                    href={`/services/${service.slug}`}
                    variant="outline"
                    className="w-full text-center"
                  >
                    Learn More About {service.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        items={faqs.services}
        subtitle="Services FAQ"
        title="Questions About Our Services"
      />
      <ContactCTA />
    </div>
  );
}
