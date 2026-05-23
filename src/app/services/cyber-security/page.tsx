import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { ServiceItem } from "@/types";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";

export const metadata: Metadata = {
  title: "Cyber Security Service",
  description: "Enterprise cyber security auditing, threat detection, and mitigation strategies.",
};

export default function CyberSecurityPage() {
  const services = loadData<ServiceItem[]>("services.text");
  const service = services.find((s) => s.slug === "cyber-security");
    const faqs = loadData<{ cyberSecurity: FAQItem[] }>("faqs.text");

  if (!service) {
    return <div className="text-center py-24">Service not found.</div>;
  }

  return (
    <>
      <ServiceDetailLayout
        service={service}
        heading="Securing applications, networks, and cloud infrastructure"
        imageSrc="/images/cybersecurity.jpg"
        imageAlt="Cyber security monitoring and digital protection interface"
        imageSide="left"
        summary="Our security work combines assessment, hardening, monitoring, and practical remediation guidance so teams can reduce risk without slowing down delivery."
        deliverables={[
          "Vulnerability assessment",
          "Cloud and IAM hardening",
          "Security report and roadmap",
          "Incident response guidance",
        ]}
      />
      <FAQSection
        items={faqs.cyberSecurity}
        subtitle="Cyber Security FAQ"
        title="Questions About Our Service" />
    </>
  );
}
