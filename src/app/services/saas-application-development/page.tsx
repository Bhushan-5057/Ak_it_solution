import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { ServiceItem } from "@/types";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";


export const metadata: Metadata = {
  title: "SaaS Application Development Service",
  description: "End-to-end SaaS development with multi-tenant database models and subscription engines.",
};

export default function SaaSApplicationDevelopmentPage() {
  const services = loadData<ServiceItem[]>("services.text");
  const service = services.find((s) => s.slug === "saas-application-development");
        const faqs = loadData<{ saasApplicationDevelopment: FAQItem[] }>("faqs.text");


  if (!service) {
    return <div className="text-center py-24">Service not found.</div>;
  }

  return (
    <>
    <ServiceDetailLayout
      service={service}
      heading="Building scalable multi-tenant SaaS products with room to grow"
      imageSrc="/images/saasappdevelopment.jpg"
      imageAlt="SaaS application dashboard and cloud product development concept"
      imageSide="right"
      summary="We help shape the product foundation: tenant isolation, roles, billing, dashboards, admin tools, onboarding, and deployment practices that can support real customers from day one."
      deliverables={[
        "Product architecture blueprint",
        "Tenant and role management",
        "Subscription workflow setup",
        "Cloud deployment pipeline",
      ]}
    />
    <FAQSection
      items={faqs.saasApplicationDevelopment}
      subtitle="SaaS Application Development FAQ"
      title="Questions About Our Service" />
  </>
  );
}
