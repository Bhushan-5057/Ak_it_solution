import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, UserRound, CheckCircle2 } from "lucide-react";
import { loadData } from "@/utils/dataLoader";
import { BlogPost } from "@/types";
import PageHero from "@/components/common/PageHero";
import ContactCTA from "@/components/common/ContactCTA";
import { DynamicIcon } from "@/components/common/Cards";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function getPosts() {
  return loadData<BlogPost[]>("blogs.text");
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][Number(month) - 1];

  return `${monthName} ${Number(day)}, ${year}`;
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);

  if (!post) notFound();

  const date = formatDate(post.publishedAt);

  return (
    <div className="pt-24 pb-0 space-y-0">
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        backHref="/blogs"
        backLabel="Back to Blogs"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-muted-foreground sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            {date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2">
            <Clock className="h-4 w-4 text-primary" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2">
            <UserRound className="h-4 w-4 text-primary" />
            {post.author}
          </span>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20 lg:py-24 section-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <aside className="lg:col-span-4">
            <div className="sticky top-32 rounded-lg border border-border/80 bg-card/95 p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <DynamicIcon name={post.iconName} className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-extrabold text-foreground">
                Article Focus
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Practical security guidance for teams improving resilience, visibility, and incident readiness.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold text-foreground/75">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/blogs"
                className="mt-6 inline-flex items-center text-sm font-bold text-primary transition-colors hover:text-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                All blogs
              </Link>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <div className="rounded-lg border border-border/80 bg-white/85 p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="space-y-10">
                {post.content.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-extrabold leading-tight text-foreground">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
                      {section.body}
                    </p>
                    {section.bullets && (
                      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 text-sm font-semibold leading-6 text-foreground/85">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
