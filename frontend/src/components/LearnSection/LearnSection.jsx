import React from "react";
import Laptop1 from "../../assets/images/Laptop1.png";
import Laptop2 from "../../assets/images/Laptop2.png";



const LearnCard = ({ title, description, image, index, inverted = false }) => {
  return (
    <div
      className={`flex flex-col p-8 gap-10 md:flex-row ${
        inverted ? "md:flex-row-reverse" : ""
      } bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
    >
      {/* Image */}
      <div className="relative md:w-1/2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span
          className={`absolute bottom-3 text-3xl font-bold text-gray-400 opacity-60 
      ${inverted ? "left-4" : "right-4"}`}
        >
          {index < 10 ? `0${index}` : index}
        </span>
      </div>

      {/* Text */}
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

const LearnSection = () => {
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

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl cal-sans-regular text-center mb-16 text-white text-[40px] font-bold mx-auto tracking-wider">
        WHAT YOU’LL <span className="text-[#FFC02B]">LEARN</span> IN THIS
        <p className="text-[#FFC02B]">MASTERCLASS</p>
      </h2>

      <div className="space-y-10 max-w-6xl mx-auto">
        {learnItems.map((item, i) => (
          <LearnCard
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            index={i + 1}
            inverted={i % 2 === 0} // alternate layout
          />
        ))}
      </div>
    </section>
  );
};

export default LearnSection;
