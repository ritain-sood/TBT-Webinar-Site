import Ach1 from "../../assets/images/Ach1.png";
import Ach2 from "../../assets/images/Ach2.png";
import Ach3 from "../../assets/images/Ach3.png";
import Ach4 from "../../assets/images/Ach4.png";
import Ach5 from "../../assets/images/Ach5.png";

const achievements = [
  {
    id: 1,
    icon: Ach1,
    title: "7+ Years",
    subtitle: "Market Experience",
  },
  {
    id: 2,
    icon: Ach2,
    title: "SEBI Reg.",
    subtitle: "Research Analyst",
  },
  {
    id: 3,
    icon: Ach3,
    title: "Trained",
    subtitle: "1,50,000+ Traders",
  },
  {
    id: 4,
    icon: Ach4,
    title: "Founder",
    subtitle: "The Bengal Trader",
  },
  {
    id: 5,
    icon: Ach5,
    title: "Mentor",
    subtitle: "100+ Institutions",
  },
];

const Achievements = () => {
  return (
    <div className="mt-8 space-y-6">
      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-center gap-7">
        {achievements.slice(0, 3).map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <img src={item.icon} className="md:h-15 h-[34px]" alt={item.title} />
            <div>
              <div className="font-serif text-[18px] sm:text-[20px] text-[#FFC02B] leading-none tracking-wide">
                {item.title}
              </div>
              <div className="font-serif text-[14px] sm:text-[15px] text-[#EAEAEA]">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex justify-center gap-7">
        {achievements.slice(3, 5).map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <img src={item.icon} className="md:h-15 h-[34px]" alt={item.title} />
            <div>
              <div className="font-serif text-[18px] sm:text-[20px] text-[#FFC02B] leading-none tracking-wide">
                {item.title}
              </div>
              <div className="font-serif text-[14px] sm:text-[15px] text-[#EAEAEA]">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-6 lg:hidden">
        {/* First row → 2 items */}
        {achievements.slice(0, 2).map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <img src={item.icon} className="h-[28px] sm:h-[32px]" alt={item.title} />
            <div>
              <div className="font-serif text-[18px] text-[#FFC02B] leading-none">
                {item.title}
              </div>
              <div className="font-serif text-[14px] text-[#EAEAEA]">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}

        {/* Second row → 1 centered item */}
        <div className="col-span-2 flex justify-center">
          <div className="flex items-center gap-2">
            <img src={achievements[2].icon} className="h-[28px] sm:h-[32px]" alt={achievements[2].title} />
            <div>
              <div className="font-serif text-[18px] text-[#FFC02B] leading-none">
                {achievements[2].title}
              </div>
              <div className="font-serif text-[14px] text-[#EAEAEA]">
                {achievements[2].subtitle}
              </div>
            </div>
          </div>
        </div>

        {/* Third row → 2 items */}
        {achievements.slice(3, 5).map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <img src={item.icon} className="h-[28px] sm:h-[32px]" alt={item.title} />
            <div>
              <div className="font-serif text-[18px] text-[#FFC02B] leading-none">
                {item.title}
              </div>
              <div className="font-serif text-[14px] text-[#EAEAEA]">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
