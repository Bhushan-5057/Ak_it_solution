import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { BlogPost } from "@/types";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import BlogCard from "@/components/blogs/BlogCard";
import ContactCTA from "@/components/common/ContactCTA";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Cyber security insights from AK IT Solution covering SOC monitoring, cloud security, threat detection, penetration testing, and secure infrastructure.",
};

export default function BlogsPage() {
  const posts = loadData<BlogPost[]>("blogs.text");

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow="Security Insights"
        title="Cyber Security Blogs"
        description="Practical guidance for business leaders and technology teams who want stronger security, cleaner operations, and better risk decisions."
      />

      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Latest Articles"
            title="Clear Thinking for Secure Digital Growth"
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
