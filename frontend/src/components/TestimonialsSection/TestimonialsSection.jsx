import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect,useRef} from "react";
import "swiper/css";
import testimonials from "./testimonials";
import TestimonialCard from "./TestimonialCard";

// const TestimonialsSection = () => {
//   return (
//     <section className="pb-16 px-4">
//       <h2 className="cal-sans-regular text-center mb-16 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
//         WHAT STUDENTS <span className="text-[#FFC02B]">SAY</span>
//       </h2>

//       {/* Mobile: Carousel */}
//       <div className="sm:hidden">
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1.1}
//           centeredSlides={true}
//           loop={true}
//         >
//           {testimonials.map((t, index) => (
//             <SwiperSlide key={index}>
//               <TestimonialCard testimonial={t} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop: Grid */}
//       <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {testimonials.map((t, index) => (
//           <TestimonialCard key={index} testimonial={t} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;


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
    <section className="pb-4">
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




// const TestimonialsSlider = () => {
//   const trackRef = useRef(null);
//   const [currentGroup, setCurrentGroup] = useState(0);

//   const cardsPerGroup = 3;
//   const gap = 32;
//   const cardWidth = 350;
//   const groupCount = Math.ceil(testimonials.length / cardsPerGroup);

//   // Pad to fill last group
//   const paddedTestimonials = [
//     ...testimonials,
//     ...Array(
//       (cardsPerGroup - (testimonials.length % cardsPerGroup)) % cardsPerGroup
//     ).fill(null),
//   ];

//   // Calculate max offset so last group is always fully visible
//   const maxOffset =
//     (paddedTestimonials.length - cardsPerGroup) * (cardWidth + gap);

//   // Auto-slide every 3s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentGroup((prev) => {
//         if (
//           (prev + 1) * cardsPerGroup >
//           paddedTestimonials.length - cardsPerGroup
//         ) {
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [paddedTestimonials.length, cardsPerGroup]);

//   useEffect(() => {
//     if (trackRef.current) {
//       const xOffset = Math.min(
//         currentGroup * (cardWidth + gap) * cardsPerGroup,
//         maxOffset
//       );
//       trackRef.current.style.transform = `translateX(-${xOffset}px)`;
//     }
//   }, [currentGroup, maxOffset, cardWidth, gap, cardsPerGroup]);

//   return (
//     <div
//   className="relative w-full max-w-6xl mx-auto pb-12 px-8 max-[380px]:px-4 max-[325px]:px-1"
// >
//       <div
//         ref={trackRef}
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           width: `${paddedTestimonials.length * (cardWidth + gap)}px`,
//         }}
//       >
//         {paddedTestimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             style={{
//               width: `${cardWidth}px`,
//               flexShrink: 0,
//               marginLeft: `${index === 0 ? 0 : gap}px`,
//             }}
//             className="flex justify-center"
//           >
//             {testimonial ? (
//               <TestimonialCard {...testimonial} />
//             ) : (
//               <div className="w-full h-full" />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center gap-2 mt-6">
//         {Array.from({ length: groupCount }).map((_, i) => (
//           <div
//             key={i}
//             className="w-3 h-3 rounded-full transition-all duration-300"
//             style={{
//               backgroundColor:
//                 i === currentGroup ? "var(--color-primary)" : "#D1D5DB",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSlider;
