import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { ServiceItem } from "@/types";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";


export const metadata: Metadata = {
  title: "Website Development Service",
  description: "Enterprise website development using modern tech stacks like Next.js, React, and TypeScript.",
};

export default function WebsiteDevelopmentPage() {
  const services = loadData<ServiceItem[]>("services.text");
  const service = services.find((s) => s.slug === "website-development");
      const faqs = loadData<{ websiteDevelopment: FAQItem[] }>("faqs.text");
  if (!service) {
    return <div className="text-center py-24">Service not found.</div>;
  }

  return (
    <>
    <ServiceDetailLayout
      service={service}
      heading="Engineering value-driven web applications that load fast and convert clearly"
      imageSrc="/images/webdevelopment.jpg"
      imageAlt="Website development workspace with responsive web interface planning"
      imageSide="right"
      summary="We focus on clean architecture, search visibility, conversion-ready pages, and maintainable code so your website becomes a dependable growth channel rather than a one-time brochure."
      deliverables={[
        "Responsive UI implementation",
        "Performance and SEO setup",
        "CMS or admin integrations",
        "Analytics-ready launch support",
      ]}
    />
    <FAQSection
      items={faqs.websiteDevelopment}
      subtitle="Website Development FAQ"
      title="Questions About Our Service" />
  </>
  );
}
