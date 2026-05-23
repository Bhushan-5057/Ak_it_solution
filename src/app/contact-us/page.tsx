import { Metadata } from "next";
import { loadData } from "@/utils/dataLoader";
import { ContactData } from "@/types";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageSquareText } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AK IT Solution's engineering team for consultations and estimates.",
};

export default function ContactUsPage() {
  const contact = loadData<ContactData>("contact.text");

  const socialLinks = [
    { icon: FaFacebookF, href: contact.facebook, label: "Facebook" },
    { icon: FaLinkedinIn, href: contact.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: contact.instagram, label: "Instagram" },
    { icon: FaYoutube, href: contact.youtube, label: "YouTube" },
  ];

  return (
    <div className="min-h-[90vh] section-surface py-12 sm:py-16 lg:py-20">
            <PageHero
              eyebrow="Contact Us"
              title="Let&apos;s Discuss Your Project"
              description="We deliver industry-compliant software and server configurations designed for your vertical market."
            />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-900 font-bold">
            {contact.responsePromise}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div
            className="lg:col-span-5 flex flex-col justify-between bg-[linear-gradient(135deg,#12265d,#1d2d79)] text-white  p-6 sm:p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-2xl border border-white/10"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(54,146,203,0.15),transparent_60%)]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-8">
              {contact.quickFacts && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contact.quickFacts.map((fact) => (
                    <div key={fact} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                      {fact}
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-6 pt-4">
                <div className="flex items-start">
                  <div className="p-2.5 bg-white/10  rounded-lg text-primary mr-4 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-100">Office Location</h4>
                    <p className="text-slate-200/80 text-xs sm:text-sm mt-1 leading-relaxed">
                      {contact.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2.5 bg-white/10  rounded-lg text-primary mr-4 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-100">Contact Number</h4>
                    <p className="text-slate-200/80 text-xs sm:text-sm mt-1">
                      {contact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2.5 bg-white/10  rounded-lg text-primary mr-4 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-100">Email Address</h4>
                    <p className="text-slate-200/80 text-xs sm:text-sm mt-1">
                      {contact.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2.5 bg-white/10  rounded-lg text-primary mr-4 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-100">Operating Hours</h4>
                    <p className="text-slate-200/80 text-xs sm:text-sm mt-1">
                      Mon - Fri: 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 pt-8 border-t border-white/10 ">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-200 mb-4">
                Follow Our Streams
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-primary hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center" data-aos="fade-left">
            <ContactForm />
          </div>
        </div>
        {contact.process && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5" data-aos="fade-up">
            {contact.process.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-border/80  bg-card/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2">
                  Step {index + 1}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
