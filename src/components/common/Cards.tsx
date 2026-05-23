"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { Star, ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = Icons as unknown as Record<string, LucideIcon | undefined>;

export function DynamicIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  index?: number;
}

export function FeatureCard({ title, description, iconName, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/95 border border-border/80  rounded-xl p-5 sm:p-6 lg:p-7 hover-glow group shadow-sm backdrop-blur min-h-[220px]"
    >
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5 shadow-inner">
        <DynamicIcon name={iconName} className="w-5 h-5 stroke-[2]" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  slug: string;
  index?: number;
}

export function ServiceCard({ title, description, iconName, slug, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/95 border border-border/80  rounded-xl p-6 hover-glow group flex flex-col justify-between h-full shadow-sm backdrop-blur"
    >
      <div>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/5 text-secondary   group-hover:bg-secondary  group-hover:text-white  transition-all duration-300 mb-5">
          <DynamicIcon name={iconName} className="w-6 h-6 stroke-[1.75]" />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary  transition-colors cursor-pointer group/link"
      >
        Explore Service
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1.5 transition-transform" />
      </Link>
    </motion.div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, comment, rating }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border/80  rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full max-w-xl mx-auto">
      <div>
        <div className="flex space-x-1 mb-6 text-yellow-500">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <blockquote className="text-foreground/90 text-base italic leading-relaxed mb-8">
          &ldquo;{comment}&rdquo;
        </blockquote>
      </div>
      <div className="border-t border-border/50 pt-6 flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary mr-4 text-sm uppercase">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">
            {role}, <span className="font-medium text-secondary ">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
