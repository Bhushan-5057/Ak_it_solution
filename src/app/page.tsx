import { loadData } from "@/utils/dataLoader";
import { HeroData, CardItem, ServiceItem, TestimonialItem, WhyChooseUsItem } from "@/types";
import Hero from "@/components/home/Hero";
import { FeatureCard, ServiceCard, DynamicIcon } from "@/components/common/Cards";
import Slider from "@/components/common/Slider";
import ContactCTA from "@/components/common/ContactCTA";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import { StaggerTestimonials } from "@/components/home/StaggerTestimonials";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";
import { ArrowRight } from "lucide-react";
interface HomeData {
  hero: HeroData;
  cards: CardItem[];
  testimonials: TestimonialItem[];
}
interface AboutUsData {
  whyChooseUs: WhyChooseUsItem[];
}
interface TechnologyCategory {
  title: string;
  description: string;
  items: {
    name: string;
    imageUrl: string;
  }[];
}
interface TechnologiesData {
  categories: Record<string, TechnologyCategory>;
}
interface FAQData {
  home: FAQItem[];
  services: FAQItem[];
  industries: FAQItem[];
}

export default function HomePage() {
  const homeData = loadData<HomeData>("home.text");
  const services = loadData<ServiceItem[]>("services.text");
  const aboutData = loadData<AboutUsData>("aboutus.text");
  const techData = loadData<TechnologiesData>("technologies.text");
  const faqs = loadData<FAQData>("faqs.text");

  return (
    <div className="space-y-0">
      <Hero data={homeData.hero} />
      <Slider />
      <section className="py-14 sm:py-16 lg:py-20 section-surface relative z-10 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Deliver"
            title="Practical Technology Foundations for Growth"
            align="center"
            className="mb-9"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {homeData.cards.map((card, idx) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                iconName={card.iconName}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white/55 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Specialties"
            title="Enterprise Technology Services"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                slug={service.slug}
                index={idx}
              />
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Button href="/services" variant="outline" size="lg">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
                Our Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                Why Industry Leaders Choose AK IT Solution
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
              <p className="text-muted-foreground text-base leading-relaxed">
                We combine deep technical expertise with agile software development processes. Our engineers build systems with security, speed, and infinite scaling in mind, ensuring your software remains a competitive advantage.
              </p>
              <div className="pt-4">
                <Button href="/about-us" variant="primary">
                  Learn More About Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutData.whyChooseUs.map((advantage, idx) => (
                <div
                  key={advantage.id}
                className="bg-card/95 border border-border/80  p-5 sm:p-6 rounded-xl hover-glow group shadow-sm backdrop-blur"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                    <DynamicIcon name={advantage.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechnologiesSection data={techData} />

      <section className="py-16 sm:py-20 lg:py-24 bg-white/60 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            align="center"
          />

          <div data-aos="fade-up">
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      <FAQSection
        items={faqs.home}
        subtitle="Home FAQ"
        title="Answers Before We Build"
      />

      <ContactCTA />
    </div>
  );
}
