import { FaChevronRight } from "react-icons/fa";
import Docs from "../../assets/icons/docs.svg";
import TwoPerson from "../../assets/icons/twoPerson.svg";
import VerifiedTick from "../../assets/icons/verifiedTick.svg";
import Live from "../../assets/icons/live.svg";
import Team from "../../assets/icons/team.svg";
import Calender from "../../assets/icons/calender.svg";
import Clock from "../../assets/icons/clock.svg";
import HeroSectionImg from "../../assets/images/HeroSectionImg.png";

const Button = ({ children, className = "" }) => (
  <button
    className={`group relative w-full py-4 px-8 rounded-full bg-[#FFC02B] text-[#212121] font-black text-lg overflow-hidden transition-all duration-300 ${className}`}
  >
    {/* Animated background */}
    <span className="absolute top-0 left-0 h-full w-0 rounded-2xl bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    {/* Text and Icon */}
    <span className="relative z-10 flex justify-center items-center gap-2 group-hover:text-[#000000] transition-colors duration-300">
      {children} <FaChevronRight />
    </span>
  </button>
);

const HeroMain = ({ targetDate }) => {
  const date = new Date(targetDate);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const finalDisplayDate = `${formattedDate}, ${formattedTime}`;

  return (
    <div
      className="relative gradient-border-container mt-6 w-full max-w-6xl"
      id="hero"
    >
      <div className="gradient-border-inner">
        <div className="grid gap-0 items-center grid-cols-[42%_58%]">
          <div className="h-full p-2">
            <img
              src={HeroSectionImg}
              alt="Anubrata Das, Founder of The Bengal Trader"
              className="flex absolute h-[110%] object-cover -top-17.5 left-15"
            />
          </div>

          <div className="p-6 md:p-10 flex flex-col gap-6 bg-black text-white rounded-r-[75px] justify-center items-center">

            {/* Blur */}
            <div
              className="pointer-events-none absolute blur-[150px] z-1 justify-center hidden md:block"
              style={{
                width: "241px",
                height: "474px",
                background:
                  "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
                opacity: 0.8,
              }}
            />
            <div className="text-center">
              <p className="sora-regular tracking-widest text-lg font-light">
                THE TRADING BLUEPRINT BY
              </p>
              <h1 className="sorts-mill-goudy tracking-wide leading-relaxed text-4xl md:text-5xl font-bold">
                ANUBRATA DAS
              </h1>
              <p className="sorts-mill-goudy tracking-wide text-lg">
                Founder of The Bengal Trader
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-white sora-regular px-15 text-sm">
              <div className="flex items-center gap-4 bg-[#222222] px-4 py-2 rounded-2xl h-full">
                <img
                  src={VerifiedTick}
                  alt="Verified Tick"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>Winning Trade Setup Framework</span>
              </div>
              <div className="flex items-center gap-4 bg-[#222222] px-4 py-2 rounded-2xl h-full">
                <img
                  src={TwoPerson}
                  alt="Community Icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>Access to Premium Trader Community</span>
              </div>
              <div className="flex items-center gap-4 bg-[#222222] px-4 py-2 rounded-2xl h-full">
                <img
                  src={Live}
                  alt="Live Icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>Live Trade Breakdown</span>
              </div>
              <div className="flex items-center gap-4 bg-[#222222] px-4 py-2 rounded-2xl h-full">
                <img
                  src={Docs}
                  alt="Document Icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>Free Guide: "Master Risk Management"</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 text-white border-t border-b border-gray-600 py-4 font-semibold">
              <div className="flex items-center gap-3">
                <img src={Calender} alt="" className="w-6 h-6" />
                <span>{finalDisplayDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={Clock} alt="" className="w-6 h-6" />
                <span>Duration: 2 hours</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-center text-white flex gap-3 font-semibold items-center justify-center">
                <img src={Team} alt="" className="w-8 h-8" />
                Live Session on Zoom
              </p>
              <Button>Save My Seat</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
