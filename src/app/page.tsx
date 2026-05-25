import { loadData } from "@/utils/dataLoader";
import { BlogPost, HeroData, CardItem, ServiceItem, TestimonialItem, WhyChooseUsItem } from "@/types";
import Hero from "@/components/home/Hero";
import { FeatureCard, ServiceCard, DynamicIcon } from "@/components/common/Cards";
import BlogCard from "@/components/blogs/BlogCard";
import Slider from "@/components/common/Slider";
import ContactCTA from "@/components/common/ContactCTA";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import { StaggerTestimonials } from "@/components/home/StaggerTestimonials";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";
import { ArrowRight, CheckCircle2, Eye, LockKeyhole, Radar } from "lucide-react";
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
  const blogs = loadData<BlogPost[]>("blogs.text");
  const securityCapabilities = [
    {
      title: "SOC Monitoring",
      description: "Centralized visibility across endpoints, cloud, and network activity with clear escalation paths.",
      icon: Eye,
    },
    {
      title: "Threat Detection",
      description: "Practical detection coverage for suspicious logins, malware behavior, and risky configuration changes.",
      icon: Radar,
    },
    {
      title: "Infrastructure Protection",
      description: "Firewall, IAM, cloud, server, and application hardening aligned with business risk.",
      icon: LockKeyhole,
    },
  ];
  const securityPillars = [
    "Vulnerability Assessment",
    "Penetration Testing",
    "Cloud Security",
    "Endpoint Security",
    "SIEM Solutions",
    "Incident Response",
    "Email Security",
    "Compliance Reviews",
  ];

  return (
    <div className="space-y-0">
      <Hero data={homeData.hero} />
      <Slider />
      <section className="py-14 sm:py-16 lg:py-20 section-surface relative z-10 -mt-8 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Enterprise Security Foundation"
            title="Practical Protection for Modern Digital Operations"
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

      <section className="py-16 sm:py-20 lg:py-24 bg-white/55 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Specialties"
            title="Cyber Security and Enterprise IT Services"
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

      <section className="py-16 sm:py-20 lg:py-24 section-surface section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
                Cyber Security Operations
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                Managed security coverage without unnecessary complexity.
              </h2>
              <div className="mt-5 h-1.5 w-20 bg-primary rounded-full" />
              <p className="mt-6 text-muted-foreground text-base leading-relaxed">
                AK IT Solution helps organizations monitor threats, protect infrastructure, and respond faster with practical security workflows built around your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/services/cyber-security" variant="primary">
                  View Cyber Security
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/contact-us" variant="outline">
                  Talk to Security Team
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-3" data-aos="fade-up">
              {securityCapabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className="rounded-lg border border-border/80 bg-card/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-foreground">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-primary/15 bg-white/75 p-5 shadow-sm" data-aos="fade-up">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {securityPillars.map((pillar) => (
                <div key={pillar} className="flex items-center gap-2 text-xs font-bold text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white/55 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
                Our Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                Why teams trust AK IT Solution for secure growth
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
              <p className="text-muted-foreground text-base leading-relaxed">
                We combine secure engineering, cloud architecture, and managed security thinking so your systems stay resilient as your business grows.
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
                className="bg-card/95 border border-border/80 p-5 sm:p-6 rounded-lg hover-glow group shadow-sm backdrop-blur"
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

      <section className="py-16 sm:py-20 lg:py-24 bg-white/60 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Clients Say About Our Work"
            align="center"
          />

          <div data-aos="fade-up">
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 section-surface section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              subtitle="Security Insights"
              title="Practical Cyber Security Guidance"
              align="left"
              className="mb-0"
            />
            <Button href="/blogs" variant="outline" className="w-full md:w-auto">
              View All Blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogs.slice(0, 3).map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} compact />
            ))}
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
