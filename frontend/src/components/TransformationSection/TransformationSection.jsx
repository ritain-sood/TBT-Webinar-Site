import React from "react";
import blackChessIcon from "../../assets/images/blackChessIcon.png";
import chessIcon from "../../assets/images/chessIcon.png";
import { useState, useEffect, useCallback } from "react";



// --- INLINE SVG for Carousel Arrows ---
const ChevronLeft = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRight = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
const TransformationSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const features = [
    {
      title: 'Real Trade Analysis',
      description: 'Watch Smit break down trades step-by-step with clarity.',
    },
    {
      title: 'Proven Strategies',
      description: 'Get frameworks that real traders use to win consistently.',
    },
    {
      title: 'Resources',
      description: 'Receive exclusive PDFs, templates & trading tools post-session.',
    },
  ];

  // Memoize the next/prev functions so they don't cause the timer to reset unnecessarily
  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, [features.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  // Set up the auto-swipe timer
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="relative z-10 py-20 mt-[5%] overflow-hidden">
      <div className="cal-sans-regular text-center mb-16 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
        <h2>
          How This <span className="text-[#FFC02B]">Masterclass</span> Will{" "}
          <br className="hidden md:block" />
          Transform Your <span className="text-[#FFC02B]">Trading Journey</span>
        </h2>
      </div>

      <div className="relative flex justify-center items-center h-[320px] md:h-auto md:gap-8">
        {/* --- Card Mapping for Mobile & Desktop --- */}
        {features.map((feature, index) => {
          
          const getMobileStyle = (itemIndex) => {
            const isActive = itemIndex === activeIndex;
            const isPrev = itemIndex === (activeIndex - 1 + features.length) % features.length;
            const isNext = itemIndex === (activeIndex + 1) % features.length;

            if (isActive) return { transform: 'translate(-50%, -50%) scale(1)', zIndex: 20, opacity: 1, top: '50%', left: '50%' };
            if (isPrev) return { transform: 'translate(-120%, -50%) scale(0.8)', zIndex: 10, opacity: 0.4, top: '50%', left: '50%' };
            if (isNext) return { transform: 'translate(20%, -50%) scale(0.8)', zIndex: 10, opacity: 0.4, top: '50%', left: '50%' };
            
            return { transform: 'translate(-50%, -50%) scale(0.6)', opacity: 0, zIndex: 5, top: '50%', left: '50%' };
          };

          const isHighlighted = index === activeIndex;

          return (
            <article
              key={index}
              className={`
                flex flex-col items-center justify-center rounded-full transition-all duration-500
                ${isHighlighted ? 'bg-[#FFC02B] border-none' : 'border border-[#979797]/40'}
                
                ${/* MOBILE STYLES (Absolute) */''}
                absolute w-[280px] h-[280px] p-8 gap-2
                
                ${/* DESKTOP STYLES (Relative) */''}
                md:relative md:w-[412px] md:h-[412px] md:px-[58px] md:py-[85px] md:gap-[26px]
                ${isHighlighted ? 'z-20' : 'z-10'}
                ${index === 0 ? 'md:-translate-x-[-25%]' : ''}
                ${index === 2 ? 'md:translate-x-[-25%]' : ''}
              `}
              style={getMobileStyle(index)}
            >
              <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] relative">
                <img
                  src={isHighlighted ? blackChessIcon : chessIcon}
                  alt={feature.title}
                  className={`w-full h-full object-contain ${isHighlighted ? '' : 'opacity-50 md:opacity-100'}`}
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className={`text-center font-semibold capitalize text-lg md:text-[22px] ${isHighlighted ? 'text-[#181818]' : 'text-[#979797]/60 md:text-[#979797]'}`}>
                  {feature.title}
                </h3>
                <p className={`h-auto text-center capitalize text-sm md:text-base ${isHighlighted ? 'text-[#181818]' : 'text-[#979797]/60 md:text-[#979797]'}`}>
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
        
        {/* --- MOBILE SLIDER CONTROLS --- */}
        <button onClick={handlePrev} className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors">
            <ChevronLeft className="w-8 h-8"/>
        </button>
        <button onClick={handleNext} className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors">
            <ChevronRight className="w-8 h-8"/>
        </button>
      </div>
    </section>
  );
};

export default TransformationSection;