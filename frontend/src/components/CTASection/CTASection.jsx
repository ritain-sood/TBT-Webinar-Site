// CTASection.jsx
import { FaChevronRight } from "react-icons/fa";

const Button = ({ children, className = "" }) => (
    <button
      className={`group relative w-[200px] sm:w-[220px] h-[55px] sm:h-[62px] flex justify-center items-center px-6 rounded-full bg-[#FFC02B] text-[#212121] font-bold text-lg overflow-hidden transition-all duration-300 shadow-[0_0_30px_#FFC02B] ${className}`}
    >
      {/* Animated background */}
      <span className="absolute top-0 left-0 h-full w-0 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>

      {/* Text */}
      <span className="relative z-10 flex justify-center items-center gap-2 group-hover:text-[#000000] transition-colors duration-300">
        {children}
        <FaChevronRight className="text-sm" />
      </span>
    </button>
  );

const CTASection=()=>{
  return (
    <section className="relative text-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h2 className="cal-sans-regular text-center mb-8 text-white text-[40px] font-bold uppercase mx-auto tracking-wider leading-[3rem]">
          READY TO TRANSFORM YOUR <br className="hidden md:block" /> <span className="text-[#FFC02B]">TRADING</span> GAME?
        </h2>

        {/* Subtext */}
        <p className="text-white mb-10 text-lg sora-regular">
          Secure Your Seat Now And Start Seeing Your Trades In A New Light.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button>Save My Seat</Button>
        </div>
      </div>
    </section>
  );
}


export default CTASection;