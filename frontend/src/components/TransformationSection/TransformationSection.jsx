import React from "react";
import blackChessIcon from "../../assets/images/blackChessIcon.png";
import chessIcon from "../../assets/images/chessIcon.png";
import { useState, useEffect, useCallback } from "react";

// --- INLINE SVG for Carousel Arrows ---
const ChevronLeft = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const TransformationSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Mobile/Tablet slider starts with the middle card

  const features = [
    {
      title: 'Real Trade Analysis',
      description: 'Watch Smit break down trades step-by-step with clarity.',
      isHighlighted: false,
    },
    {
      title: 'Proven Strategies',
      description: 'Get frameworks that real traders use to win consistently.',
      isHighlighted: true,
    },
    {
      title: 'Resources',
      description: 'Receive exclusive PDFs, templates & trading tools post-session.',
      isHighlighted: false,
    },
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, [features.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  // Auto-swipe timer for mobile/tablet
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="relative z-10 py-20 mt-[5%] overflow-hidden">
      <div className="cal-sans-regular text-center mb-16 text-white text-3xl lg:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
        <h2>
          How This <span className="text-[#FFC02B]">Masterclass</span> Will{" "}
          <br className="hidden lg:block" />
          Transform Your <span className="text-[#FFC02B]">Trading Journey</span>
        </h2>
      </div>

      {/* --- DESKTOP LAYOUT (lg and up) --- */}
      <div className="hidden lg:flex relative justify-center items-center gap-8">
        {features.map((feature, index) => (
          <article
            key={index}
            className={`flex w-[412px] h-[412px] flex-col items-center justify-center gap-[26px] aspect-square px-[58px] py-[85px] rounded-full transition-transform duration-300
              ${index === 0 ? 'translate-x-[15%]' : ''}
              ${index === 2 ? '-translate-x-[15%]' : ''}
              ${feature.isHighlighted ? 'bg-[#FFC02B] border-none z-20 scale-105' : 'border border-[#979797] z-10'}
            `}
          >
            <div className="w-[140px] h-[140px] relative">
              <img
                src={feature.isHighlighted ? blackChessIcon : chessIcon}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className={`text-center text-[22px] font-semibold sora-regular capitalize ${feature.isHighlighted ? 'text-[#181818]' : 'text-[#979797]'}`}>
                {feature.title}
              </h3>
              <p className={`h-auto text-center text-base font-normal capitalize sora-regular ${feature.isHighlighted ? 'text-[#181818]' : 'text-[#979797]'}`}>
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* --- MOBILE & TABLET LAYOUT (below lg) --- */}
      <div className="lg:hidden relative h-[320px]">
        {features.map((feature, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + features.length) % features.length;
          const isNext = index === (activeIndex + 1) % features.length;
          
          let style = { transform: 'translate(-50%, -50%) scale(0.6)', opacity: 0, zIndex: 5, top: '50%', left: '50%' };
          if (isActive) style = { transform: 'translate(-50%, -50%) scale(1)', zIndex: 20, opacity: 1, top: '50%', left: '50%' };
          if (isPrev) style = { transform: 'translate(-120%, -50%) scale(0.8)', zIndex: 10, opacity: 0.4, top: '50%', left: '50%' };
          if (isNext) style = { transform: 'translate(20%, -50%) scale(0.8)', zIndex: 10, opacity: 0.4, top: '50%', left: '50%' };

          return (
            <article
              key={index}
              className={`absolute flex flex-col items-center justify-center rounded-full transition-all duration-500 w-[280px] h-[280px] p-8 gap-2
                ${isActive ? 'bg-[#FFC02B] border-none' : 'border border-[#979797]/40'}
              `}
              style={style}
            >
              {!isActive && <div className="absolute inset-0 rounded-full"></div>}
              
              <div className="w-[80px] h-[80px] relative">
                <img
                  src={isActive ? blackChessIcon : chessIcon}
                  alt={feature.title}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className={`text-center font-semibold capitalize text-lg ${isActive ? 'text-[#181818]' : 'text-[#979797]/60'}`}>
                  {feature.title}
                </h3>
                <p className={`h-auto text-center capitalize text-sm ${isActive ? 'text-[#181818]' : 'text-[#979797]/60'}`}>
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
        
        {/* Slider Controls */}
        <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors">
            <ChevronLeft className="w-8 h-8"/>
        </button>
        <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors">
            <ChevronRight className="w-8 h-8"/>
        </button>
      </div>
    </section>
  );
};

export default TransformationSection;