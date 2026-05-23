"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "AK IT Solution rebuilt our customer portal with cleaner workflows and stronger performance. The team understood the business problem quickly.",
    name: "Priya Sharma",
    role: "Operations Director",
    company: "NovaCare Health",
  },
  {
    quote:
      "Their security-first approach gave our finance team confidence from planning through launch. Communication stayed sharp the whole way.",
    name: "Arjun Mehta",
    role: "Founder",
    company: "LedgerWave",
  },
  {
    quote:
      "We needed a reliable partner for a fast-moving product roadmap. They delivered practical architecture, not overbuilt theory.",
    name: "Neha Kapoor",
    role: "Product Lead",
    company: "EduSphere",
  },
  {
    quote:
      "The platform is faster, easier to manage, and ready for our next growth stage. Their team made complex work feel controlled.",
    name: "Rohan Iyer",
    role: "Technology Manager",
    company: "MetroManufacture",
  },
];

export const StaggerTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const handleMove = (steps: number) => {
    setActiveIndex((current) => {
      const next = current + steps;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/85 p-5 shadow-xl shadow-primary/5 backdrop-blur    sm:p-6 lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(74,179,232,0.14),transparent_30%),radial-gradient(circle_at_88%_85%,rgba(124,140,255,0.12),transparent_30%)]" />

      <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="flex min-h-[360px] flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-6   sm:p-8">
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <Quote className="h-6 w-6" />
              </div>
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl font-bold leading-9 text-foreground sm:text-2xl sm:leading-10">
              &quot;{active.quote}&quot;
            </blockquote>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-border/70 pt-6  sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-sm font-extrabold uppercase text-primary">
                {active.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="font-bold text-foreground">{active.name}</p>
                <p className="text-sm text-muted-foreground">
                  {active.role}, {active.company}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleMove(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/80 bg-card text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleMove(1)}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/80 bg-card text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-xl border p-4 text-left transition-all duration-200",
                  isActive
                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                    : "border-border/70 bg-background/65 text-foreground hover:border-primary/45 hover:bg-background  "
                )}
              >
                <p
                  className={cn(
                    "mb-3 line-clamp-2 text-sm font-semibold leading-6",
                    isActive ? "text-white" : "text-foreground"
                  )}
                >
                  {testimonial.quote}
                </p>
                <p
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    isActive ? "text-white/80" : "text-primary"
                  )}
                >
                  {testimonial.company}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
