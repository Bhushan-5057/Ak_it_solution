"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    title: "Website Development",
    href: "/services/website-development",
    description: "Responsive and SEO-optimized web apps.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Native-quality iOS & Android solutions.",
    icon: Smartphone,
  },
  {
    title: "SaaS Application Development",
    href: "/services/saas-application-development",
    description: "Scalable multi-tenant cloud software.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    href: "/services/cyber-security",
    description: "Enterprise threat mitigation & audits.",
    icon: Shield,
  },
];

const navLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] =
    useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeNavigation = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? `
              backdrop-blur-xl
              bg-white/88
              
              border-b border-primary/10 
              shadow-[0_10px_32px_rgb(16,32,51,0.08)]
              
              py-3
            `
            : `
              backdrop-blur-xl
              bg-white/78
              
              border-b border-primary/10 
              py-4
            `
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center"
              onClick={closeNavigation}
            >
              <Image
                src="/logos/akit-logo.png"
                alt="AK IT Solution Logo"
                width={150}
                height={50}
                priority
                className="h-12 w-auto object-contain "
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 lg:space-x-3">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() =>
                        setServicesDropdownOpen(true)
                      }
                      onMouseLeave={() =>
                        setServicesDropdownOpen(false)
                      }
                    >
                      <button
                        onClick={() =>
                          setServicesDropdownOpen(
                            !servicesDropdownOpen
                          )
                        }
                        className={`flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary   ${
                          isActive(link.href)
                            ? "text-primary  bg-primary/10  font-semibold"
                            : "text-foreground/85 "
                        }`}
                      >
                        {link.label}

                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            servicesDropdownOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 15,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="
                              absolute left-1/2 top-full
                              -translate-x-1/2
                              mt-3
                              w-80
                              rounded-2xl
                              border border-primary/10 
                              bg-white/95 
                              backdrop-blur-xl
                              shadow-2xl
                              p-2
                              z-50
                            "
                          >
                            <div className="grid gap-1">
                              {servicesList.map((service) => {
                                const Icon = service.icon;

                                return (
                                  <Link
                                    key={service.title}
                                    href={service.href}
                                    onClick={closeNavigation}
                                    className={`flex items-start p-3 rounded-xl transition-all duration-200 group hover:bg-primary/10  ${
                                      pathname === service.href
                                        ? "bg-primary/10 "
                                        : ""
                                    }`}
                                  >
                                    <div
                                      className="
                                        flex-shrink-0
                                        p-2
                                        rounded-lg
                                        bg-secondary/5                                        
                                        text-secondary
                                        group-hover:bg-primary
                                        group-hover:text-white
                                        transition-all
                                      "
                                    >
                                      <Icon className="h-5 w-5" />
                                    </div>

                                    <div className="ml-4">
                                      <p className="text-sm font-semibold text-slate-900  group-hover:text-primary  transition-colors">
                                        {service.title}
                                      </p>

                                      <p className="text-xs text-slate-500  mt-1 line-clamp-1">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            <div className="p-2 border-t border-primary/10  mt-2">
                              <Link
                                href="/services"
                                onClick={closeNavigation}
                                className="block text-center text-xs font-semibold text-primary  hover:underline py-1"
                              >
                                View All Services -&gt;
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeNavigation}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary   ${
                      isActive(link.href)
                        ? "text-primary  bg-primary/10  font-semibold"
                        : "text-foreground/85 "
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  lg:hidden
                  p-2
                  rounded-lg
                  text-foreground
                  hover:bg-secondary/5
                  
                  transition-colors
                "
                aria-label="Toggle navigation drawer"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                bounce: 0.08,
                duration: 0.45,
              }}
              className="
                fixed right-0 top-0 bottom-0
                w-4/5 max-w-sm
                  bg-white 
                backdrop-blur-xl
                border-l border-primary/10 
                z-50
                p-6
                flex flex-col
                lg:hidden
                shadow-2xl
              "
            >
              <div className="flex items-center justify-between pb-6 border-b border-black/5 ">
                <Image
                  src="/logos/akit-logo.png"
                  alt="AK IT Solution Logo"
                  width={110}
                  height={35}
                  priority
                  className="h-8 w-auto object-contain "
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    p-2
                    rounded-lg
                    text-foreground
                    hover:bg-secondary/5
                    
                    transition-colors
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto py-6">
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => {
                    if (link.hasDropdown) {
                      return (
                        <div
                          key={link.label}
                          className="flex flex-col"
                        >
                          <button
                            onClick={() =>
                              setMobileServicesOpen(
                                !mobileServicesOpen
                              )
                            }
                            className="
                              flex items-center justify-between
                              px-3 py-2
                              rounded-lg
                              text-left
                              text-base
                              font-semibold
                              text-slate-900 
                              hover:bg-secondary/5
                              
                              transition-all
                            "
                          >
                            <span>{link.label}</span>

                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                mobileServicesOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                transition={{
                                  duration: 0.25,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 border-l border-black/5  ml-3 mt-3 space-y-3">
                                  {servicesList.map(
                                    (service) => (
                                      <Link
                                        key={service.title}
                                        href={service.href}
                                        onClick={closeNavigation}
                                        className={`block py-1 text-sm transition-colors hover:text-primary  ${
                                          pathname ===
                                          service.href
                                            ? "text-primary  font-semibold"
                                            : "text-slate-600 "
                                        }`}
                                      >
                                        {service.title}
                                      </Link>
                                    )
                                  )}

                                  <Link
                                    href="/services"
                                    onClick={closeNavigation}
                                    className="block py-1 text-xs font-semibold text-primary  hover:underline"
                                  >
                                    Explore All Services -&gt;
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={closeNavigation}
                        className={`px-3 py-2 text-base font-semibold rounded-lg transition-all duration-200 hover:bg-secondary/5  ${
                          isActive(link.href)
                            ? "text-primary  bg-secondary/5 "
                            : "text-slate-700 "
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
