"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  { name: "Vercel Cloud", imageUrl: "/images/tech/vercel.svg" },
  { name: "AWS Enterprise", imageUrl: "/images/tech/AWS.svg" },
  { name: "Oracle Systems", imageUrl: "/images/tech/oracle.svg" },
  { name: "Stripe Payments", imageUrl: "/images/tech/stripe.svg" },
  { name: "Microsoft Partner", imageUrl: "/images/tech/microsoft.svg" },
  { name: "Okta Identity", imageUrl: "/images/tech/Okta.svg" },
];

export default function Slider() {
  return (
    <div className="w-full bg-white/70  py-9 sm:py-10 border-y border-border/40  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-secondary ">
          Powering Infrastructures Alongside Industry Leaders
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="flex items-center"
      >
        {partners.map((partner) => (
          <SwiperSlide
            key={partner.name}
            className="flex items-center justify-center"
          >
            <div
              className="
        flex flex-col items-center justify-center
        gap-3
        py-4 px-4
        min-h-[120px]
        select-none
        opacity-85
        transition-all duration-300
        hover:opacity-100
        hover:-translate-y-1
      "
            >
              <div className="flex h-20 w-36 items-center justify-center rounded-xl border border-border/70 bg-white px-5 shadow-sm  ">
                <Image
                  src={partner.imageUrl}
                  alt={`${partner.name} logo`}
                  width={112}
                  height={60}
                  className="
            h-12 md:h-14
            w-auto
            max-w-[110px]
            object-contain
          "
                />
              </div>

              <p
                className="
          text-xs
          sm:text-sm
          font-semibold
          text-center
          text-slate-700
          
          tracking-wide
        "
              >
                {partner.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
