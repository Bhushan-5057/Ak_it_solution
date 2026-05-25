"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import { ArrowRight, Bot, Code2, Database, Server, ShieldAlert, Smartphone } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

interface TechItem {
  name: string;
  imageUrl: string;
}

interface CategoryDetails {
  title: string;
  description: string;
  items: TechItem[];
}

interface TechnologiesSectionProps {
  data: {
    categories: {
      [key: string]: CategoryDetails;
    };
  };
}

export default function TechnologiesSection({ data }: TechnologiesSectionProps) {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "database", label: "Database", icon: Database },
    { id: "ai-ml", label: "AI & ML", icon: Bot },
    { id: "security", label: "Security", icon: ShieldAlert },
  ].filter((tab) => data.categories[tab.id]);

  const currentCategory = data.categories[activeTab];

  if (!currentCategory) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white/55  border-t border-border/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Technology Capabilities"
          title="Cutting-Edge Stacks We Utilize"
          align="center"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-card/90 text-foreground hover:bg-primary/10 hover:text-primary border border-border/80 "
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {currentCategory.description}
          </p>
        </div>

        <div className="mb-12" data-aos="fade-up">
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 24 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {currentCategory.items.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center select-none border border-border/70 shadow-sm">
                    <Image
                      src={tech.imageUrl}
                      alt={`${tech.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="font-bold text-foreground text-sm sm:text-base tracking-wide leading-tight">
                    {tech.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button href="/technologies" variant="outline" size="lg">
            Explore All Technologies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
