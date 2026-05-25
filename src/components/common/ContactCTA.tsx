"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden text-gray-900 bg-[url('/images/about_bg.png')] bg-cover bg-center section-divider">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/15 px-4 py-2 rounded-full inline-block">
            Secure Your Next Move
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Ready to Strengthen Your Digital Environment?
          </h2>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto leading-relaxed">
            Talk with our specialists about cyber security, cloud hardening, SOC monitoring, and reliable software delivery.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact-us" variant="primary" size="lg" className="w-full sm:w-auto">
              Request Security Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/services" variant="primary" size="lg" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
