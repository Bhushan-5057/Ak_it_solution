import { Metadata } from "next";
import Image from "next/image";
import { loadData } from "@/utils/dataLoader";
import ContactCTA from "@/components/common/ContactCTA";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Technologies We Use",
  description: "Explore our technology stack including Artificial Intelligence, Machine Learning, Mobile, Frontend, Backend, and Databases.",
};

interface TechItem {
  name: string;
  imageUrl: string;
}

interface CategoryDetails {
  title: string;
  description: string;
  items: TechItem[];
}

interface TechnologiesData {
  categories: {
    [key: string]: CategoryDetails;
  };
}

export default function TechnologiesPage() {
  const data = loadData<TechnologiesData>("technologies.text");
  const categoriesList = [
    { key: "ai-ml", label: "Artificial Intelligence & Machine Learning" },
    { key: "mobile", label: "Mobile Development" },
    { key: "frontend", label: "Frontend Stacks" },
    { key: "backend", label: "Backend Architectures" },
    { key: "database", label: "Database Solutions" },
    { key: "security", label: "Security & DevSecOps" },
  ];

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow="Our Technology Stack"
        title="Engineered with Modern Stacks"
        description="We use modern, fast, and secure tools to build applications that perform under heavy loads."
      />

      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categoriesList.map((cat, index) => {
            const category = data.categories[cat.key];
            if (!category) return null;

            return (
              <div
                key={cat.key}
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="border-b border-border/50 pb-4">
                  <h2 className="text-2xl font-extrabold text-foreground mb-2">
                    {cat.label}
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.items.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-card/95 border border-border/80  rounded-xl p-5 text-center hover-glow flex flex-col items-center justify-center space-y-4 shadow-sm backdrop-blur"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center select-none border border-border/70 shadow-sm">
                        <Image
                          src={tech.imageUrl}
                          alt={`${tech.name} logo`}
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                      </div>
                      <span className="font-bold text-foreground text-sm tracking-wide">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
