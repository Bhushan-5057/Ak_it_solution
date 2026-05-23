import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { AboutData, WhyChooseUsItem } from "@/types";
import SectionHeading from "@/components/common/SectionHeading";
import { DynamicIcon } from "@/components/common/Cards";
import PageHero from "@/components/common/PageHero";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about AK IT Solution's motto, vision, core values, manifesto, and team capabilities.",
};

interface AboutPageData extends AboutData {
  whyChooseUs: WhyChooseUsItem[];
}

export default function AboutUsPage() {
  const data = loadData<AboutPageData>("aboutus.text");

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow="About Our Company"
        title="We Build Digital Masterpieces"
        description="AK IT Solution is a team of certified software engineers, cloud architects, and cyber security specialists."
      />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <div className="bg-card border border-border/80 p-8 sm:p-10 rounded-2xl space-y-4 shadow-sm" data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Motto
              </span>
              <h3 className="text-2xl font-extrabold text-foreground">
                {data.motto}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.mottoDetails}
              </p>
            </div>
            <div className="bg-card border border-border/80 p-8 sm:p-10 rounded-2xl space-y-4 shadow-sm" data-aos="fade-left">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Vision
              </span>
              <h3 className="text-2xl font-extrabold text-foreground">
                {data.vision}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.visionDetails}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="AK IT Stats"
            title="Our Numerical Footprint"
            align="center"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card border border-border/80 rounded-2xl hover-glow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Standards"
            title="The Values That Guide Our Code"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChooseUs.map((advantage, index) => (
              <div
                key={advantage.id}
                className="bg-card border border-border/80 p-8 rounded-2xl hover-glow group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                  <DynamicIcon name={advantage.iconName} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(54,146,203,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-aos="fade-up">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/15 px-3 py-1.5 rounded-full inline-block">
            Our manifesto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {data.manifesto}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic max-w-2xl mx-auto">
            {data.manifestoDetails}
          </p>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[url('/images/about_bg.png')] bg-cover bg-center py-20 text-white py-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(54,146,203,0.22),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Ready to Accelerate Your Digital Growth?
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-900 sm:text-base">
            Talk with our team about your goals, technical needs, and the best path to build a reliable digital solution.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact-us" variant="primary" size="md" className="w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/services" variant="primary" size="md" className="w-full sm:w-auto sm:w-auto">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
