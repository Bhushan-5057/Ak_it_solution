"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../common/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert("Please fill all the fields.");
      return;
    }
    
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  const servicesOptions = [
    "Website Development",
    "Mobile App Development",
    "SaaS Application Development",
    "Cyber Security",
  ];

  if (status === "success") {
    return (
      <div className="bg-card border border-primary/20 p-8 sm:p-12 rounded-2xl text-center space-y-6 shadow-xl flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="text-muted-foreground text-sm max-w-sm">
          Your form submitted our team will contact soon
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" size="sm">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card/95 border border-border/80  p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl shadow-primary/5 space-y-7 backdrop-blur">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Request a Quote</h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and our architecture team will respond within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 text-sm bg-background border border-border/80  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/60"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 text-sm bg-background border border-border/80  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/60"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Service Required
          </label>
          <select
            id="service"
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-background border border-border/80  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground cursor-pointer"
          >
            <option value="" disabled>
              Select a service
            </option>
            {servicesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Project Description
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your goals, tech preferences, timeline, and scope..."
            className="w-full px-4 py-3 text-sm bg-background border border-border/80  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/60 resize-y min-h-[120px]"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="flex items-center space-x-2">
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              <span>Sending Details...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
