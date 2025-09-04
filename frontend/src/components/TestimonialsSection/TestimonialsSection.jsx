import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect,useRef} from "react";
import "swiper/css";
import testimonials from "./testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <section className="py-16">
      <h2 className="cal-sans-regular text-center mb-16 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
        WHAT STUDENTS <span className="text-[#FFC02B]">SAY</span>
      </h2>

      {/* Mobile: Custom Carousel */}
      <div className="sm:hidden relative overflow-hidden">
        {/* The track that moves */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="flex-shrink-0 w-full" style={{ padding: '0 8%'}}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Dots for navigation */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
                <div
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-colors ${
                        activeIndex === index ? 'bg-white' : 'bg-gray-600'
                    }`}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;