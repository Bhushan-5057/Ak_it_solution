import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { ServiceItem } from "@/types";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";

export const metadata: Metadata = {
  title: "Mobile App Development Service",
  description: "Cross-platform mobile applications developed with React Native and Flutter.",
};

export default function MobileAppDevelopmentPage() {
  const services = loadData<ServiceItem[]>("services.text");
  const service = services.find((s) => s.slug === "mobile-app-development");
      const faqs = loadData<{ mobileAppDevelopment: FAQItem[] }>("faqs.text");

  if (!service) {
    return <div className="text-center py-24">Service not found.</div>;
  }

  return (
    <>
    <ServiceDetailLayout
      service={service}
      heading="Delivering smooth mobile experiences across iOS and Android"
      imageSrc="/images/mobileappdevelopment.jpg"
      imageAlt="Mobile app development interface shown across smartphone screens"
      imageSide="left"
      summary="From onboarding to payments, notifications, offline data, and release support, we design mobile flows around how users actually move through the app on small screens."
      deliverables={[
        "App architecture planning",
        "Cross-platform development",
        "API and device integrations",
        "Store release assistance",
      ]}
    />
    <FAQSection
      items={faqs.mobileAppDevelopment}
      subtitle="Mobile App Development FAQ"
      title="Questions About Our Service" />
  </>
  );
}
