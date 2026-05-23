"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Button from "../common/Button";
import {
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { HeroData } from "@/types";

interface HeroProps {
  data: HeroData;
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/20 ",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px]",
            "border border-primary/10 ",
            "shadow-[0_8px_32px_0_rgba(54,146,203,0.10)]",
            ""
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero({ data }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => [
      "Modern",
      "Scalable",
      "Powerful",
      "Reliable",
      "Intelligent",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitleNumber((prev) =>
        prev === titles.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearTimeout(timeout);
  }, [titleNumber, titles]);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] w-full overflow-hidden flex items-center justify-center bg-[linear-gradient(135deg,#f7fbff_0%,#eef6ff_45%,#ffffff_100%)]  pt-24 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.14] via-transparent to-secondary/[0.10] blur-3xl  " />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/20 "
          className="left-[-35%] top-[13%] sm:left-[-18%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-400/20 "
          className="right-[-35%] top-[72%] sm:right-[-18%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-secondary/16 "
          className="left-[-12%] bottom-[8%] sm:left-[5%] md:left-[10%] md:bottom-[10%]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-7">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            <h1 className="font-black tracking-tight leading-[1.05] text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] text-slate-900 ">
              <span className="inline-flex flex-wrap justify-center items-center gap-x-4">
                <span>Building</span>

                <span className="relative inline-flex h-[1.2em] overflow-hidden">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: "100%" }}
                      animate={
                        titleNumber === index
                          ? {
                            opacity: 1,
                            y: 0,
                          }
                          : {
                            opacity: 0,
                            y: titleNumber > index ? "-120%" : "120%",
                          }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                      }}
                    >
                      {title}
                    </motion.span>
                  ))}

                  <span className="invisible">Intelligent</span>
                </span>
              </span>

              <span className="block">
                Digital Experiences
              </span>
            </h1>

            <motion.p
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-600  font-medium"
            >
              {data.description}
            </motion.p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              href={data.ctaLink}
              variant="primary"
              size="lg"
              className="group w-full sm:w-auto min-w-[180px] shadow-xl shadow-primary/20"
            >
              {data.ctaText}

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              href="/contact-us"
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto min-w-[180px] border-slate-300   "
            >
              Book a Call

              <PhoneCall className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
