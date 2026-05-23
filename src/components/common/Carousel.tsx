"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import { TestimonialCard } from "./Cards";
import { TestimonialItem } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
  items: TestimonialItem[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <div className="w-full relative py-6">
      <Swiper
        modules={[Pagination, Autoplay, Keyboard]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="pb-12"
      >
        {items.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-auto">
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              comment={testimonial.comment}
              rating={testimonial.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
