export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  details: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  details: string;
  offerings: string[];
  imageUrl: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'ai-ml' | 'security';
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AboutData {
  motto: string;
  mottoDetails: string;
  vision: string;
  visionDetails: string;
  manifesto: string;
  manifestoDetails: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface ContactData {
  address: string;
  email: string;
  phone: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  responsePromise?: string;
  quickFacts?: string[];
  process?: {
    title: string;
    description: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  iconName: string;
  tags: string[];
  content: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
}
