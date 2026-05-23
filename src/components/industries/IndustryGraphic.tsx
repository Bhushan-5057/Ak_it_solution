"use client";

import { Activity, Heart } from "lucide-react";

interface GraphicProps {
  slug: string;
}

export default function IndustryGraphic({ slug }: GraphicProps) {
  const containerClass =
    "w-full aspect-[4/3] rounded-2xl bg-secondary/5  border border-border/85  shadow-inner flex items-center justify-center relative overflow-hidden group";

  if (slug === "transforming-domains") {
    return (
      <div className={containerClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,146,203,0.1),transparent_70%)]" />
        <svg className="w-40 h-40 text-primary  opacity-80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "12s" }} />
          <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: "20s" }} />
          <path d="M50 15 V40 M50 60 V85 M15 50 H40 M60 50 H85" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="15" r="4" fill="currentColor" />
          <circle cx="50" cy="85" r="4" fill="currentColor" />
          <circle cx="15" cy="50" r="4" fill="currentColor" />
          <circle cx="85" cy="50" r="4" fill="currentColor" />
        </svg>
        <div className="absolute bottom-6 left-6 right-6 text-center space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary ">Automation Engine</span>
        </div>
      </div>
    );
  }

  if (slug === "service-offerings") {
    return (
      <div className={containerClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,146,203,0.1),transparent_70%)]" />
        <svg className="w-40 h-40 text-primary  opacity-80" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="30" width="50" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
          <line x1="25" y1="42" x2="75" y2="42" stroke="currentColor" strokeWidth="2" />
          <rect x="32" y="50" width="12" height="6" rx="1" fill="currentColor" />
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-spin" style={{ animationDuration: "30s" }} />
          <circle cx="70" cy="70" r="12" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
          <path d="M70 64 V76 M67 67 H73 M67 73 H73" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="absolute bottom-6 left-6 right-6 text-center space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary ">Encrypted Payment Gateway</span>
        </div>
      </div>
    );
  }

  if (slug === "secure-scalable-solutions") {
    return (
      <div className={containerClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,146,203,0.1),transparent_70%)]" />
        <svg className="w-40 h-40 text-primary  opacity-80" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 H30 L35 30 L42 70 L48 45 L52 53 L58 50 H90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <Heart className="w-12 h-12 text-secondary  absolute top-10 right-10 animate-pulse stroke-[1.5]" />
        </svg>
        <div className="absolute bottom-6 left-6 right-6 text-center space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary ">HIPAA Telemedicine Core</span>
        </div>
      </div>
    );
  }

  if (slug === "empowerment") {
    return (
      <div className={containerClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,146,203,0.1),transparent_70%)]" />
        <svg className="w-40 h-40 text-primary  opacity-80" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="65" width="10" height="15" fill="currentColor" />
          <rect x="40" y="50" width="10" height="30" fill="currentColor" opacity="0.8" />
          <rect x="55" y="35" width="10" height="45" fill="currentColor" opacity="0.6" />
          <rect x="70" y="20" width="10" height="60" fill="currentColor" opacity="0.4" />
          <line x1="20" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="2" />
          <path d="M20 70 L45 45 L60 55 L85 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="85" cy="25" r="4" fill="currentColor" />
        </svg>
        <div className="absolute bottom-6 left-6 right-6 text-center space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary ">E-Commerce Headless Dashboard</span>
        </div>
      </div>
    );
  }

  if (slug === "future-powering") {
    return (
      <div className={containerClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,146,203,0.1),transparent_70%)]" />
        <svg className="w-40 h-40 text-primary  opacity-80" viewBox="0 0 100 100" fill="none">
          <path d="M20 30 C35 30 45 35 50 40 C55 35 65 30 80 30 V75 C65 75 55 80 50 85 C45 80 35 75 20 75 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <line x1="50" y1="40" x2="50" y2="85" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="25" r="5" fill="currentColor" className="animate-ping" />
          <circle cx="50" cy="25" r="3" fill="currentColor" />
        </svg>
        <div className="absolute bottom-6 left-6 right-6 text-center space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary ">EdTech Interactive LMS</span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <Activity className="w-16 h-16 text-primary" />
    </div>
  );
}
