import React, { useState, useEffect, useCallback } from "react";
import Laptop1 from "../../assets/images/Laptop1.png";
import Laptop2 from "../../assets/images/Laptop2.png";

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

const learnItems = [
  {
    title: "Daily Profit Blueprint 🚀",
    description:
      "Learn the exact trade setups I rely on every single day — clear rules for entries, smart exits, and a proven system for building consistent profits without guesswork.",
    image: Laptop1,
  },
  {
    title: "Master the Art of Risk ⚔",
    description:
      "Turn risk into your ultimate edge. Discover how to safeguard your capital, cut losses before they grow, and build the confidence to stay in the market for the long run.",
    image: Laptop2,
  },
  {
    title: "Mind Over Markets 🧠",
    description:
      "The toughest battles aren’t on the charts — they’re in the mind. Learn how to control fear, greed, and doubt, and develop the discipline that separates winning traders from the rest.",
    image: Laptop1,
  },
  {
    title: "Chart Reading Secrets 🔎",
    description:
      "Go beyond the basics of technical analysis. Understand price action like a pro, spot high-probability trades, and uncover opportunities in the market before the crowd sees them.",
    image: Laptop2,
  },
];

// --- Desktop Card Component ---
const LearnCard = ({ title, description, image, index, inverted = false }) => {
  return (
    <div
      className={`flex flex-col p-8 gap-10 md:flex-row ${
        inverted ? "md:flex-row-reverse" : ""
      } bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
    >
      <div className="relative md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
        <span
          className={`absolute bottom-2 text-5xl font-bold text-gray-400/20 
      ${inverted ? "left-2" : "right-2"}`}
        >
          {index < 10 ? `0${index}` : index}
        </span>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center gap-2">
        <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-3">
          {title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- Main Section Component ---
const LearnSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % learnItems.length);
  }, []);

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + learnItems.length) % learnItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-16 px-8">
      <h2 className="cal-sans-regular text-center mb-12 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
        WHAT YOU’LL <span className="text-[#FFC02B]">LEARN</span> IN THIS
        <p className="text-[#FFC02B]">MASTERCLASS</p>
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:block space-y-10">
          {learnItems.map((item, i) => (
            <LearnCard
              key={i}
              title={item.title}
              description={item.description}
              image={item.image}
              index={i + 1}
              inverted={i % 2 === 0}
            />
          ))}
        </div>

        {/* --- MOBILE CAROUSEL --- */}
        <div className="md:hidden relative max-w-md mx-auto bg-[#1E1E1E] rounded-2xl shadow-lg">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Sliding Container */}
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {learnItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-6 flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative mt-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <span
                      className={`absolute bottom-0 text-2xl font-bold text-gray-400/20
                      ${index % 2 === 0 ? "left-1" : "right-1"}`}
                    >
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-8 transform p-2 rounded-full text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-8 transform p-2 rounded-full text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
