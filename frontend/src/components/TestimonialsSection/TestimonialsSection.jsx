import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testimonials from "./testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl cal-sans-regular text-center mb-16 text-white text-[40px] font-bold mx-auto tracking-wider">
        WHAT STUDENTS <span className="text-[#FFC02B]">SAY</span>
      </h2>

      {/* Mobile: Carousel */}
      <div className="sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
