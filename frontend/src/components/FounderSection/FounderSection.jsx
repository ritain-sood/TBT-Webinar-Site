import React from "react";
import SocialButton from "./SocialButton";
import Founder from "../../assets/images/FounderTbt.png";
import Achievements from "./Achievements";
import Instagram from "../../assets/icons/Instagram.svg";
import Youtube from "../../assets/icons/Youtube.svg";

const FounderSection = () => {
  return (
    <section className="relative mt-6 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center p-4 md:p-6" id="aboutMe">
      {/* Left Side */}
      <div className="w-full lg:w-[65%]">
        {/* Heading */}
        <h2 className="text-white text-[30px] md:text-[48px] sorts-mill-goudy uppercase md:text-center tracking-wide">
          ANUBRATA DAS
        </h2>
        {/* Divider */}
        <div className="w-[180px] md:w-[160px] h-0 border-b border-[#373737] md:mx-auto"></div>
        <div className="text-[#EAEAEA] text-base md:text-xl sorts-mill-goudy md:text-center tracking-wider py-2">
          Founder of TradeScribe
        </div>
        {/* Divider */}
        <div className="w-[180px] md:w-[160px] h-0 border-t border-[#373737] md:mx-auto"></div>

        {/* Achievements Grid */}
        <div className="mb-10 w-60 md:w-full z-10">
          <Achievements />
        </div>

        {/* Bio */}
        <p className="text-white sorts-mill-goudy text-sm md:text-base leading-[1.8] mb-10 text-left md:text-center tracking-wider z-20">
          I believe trading success isn’t luck — it’s discipline, clarity, and
          strategy. As a SEBI-certified RA and mentor to thousands, I’ve made it
          my mission to help everyday traders to think, act, and trade
          like&nbsp;institutions.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
          <SocialButton
            href="https://www.instagram.com/thebengaltrader"
            label="Instagram"
            icon={Instagram}
          />
          <SocialButton href="https://www.youtube.com/@thebengaltrader008" label="Youtube" icon={Youtube} />
        </div>
      </div>

      {/* Right Side - Founder Image */}
      <div className="absolute md:relative w-full lg:w-1/2 lg:mt-0 flex justify-center -top-2 -right-28 md:right-0 md:top-0">
        <img
          src={Founder}
          alt="Founder"
          className="h-90 md:h-full md:object-contain md:scale-[1.125] md:-top-[50px] md:relative -z-10"
        />
      </div>
      <div
        className="absolute w-full h-full -z-5 block md:hidden bottom-[30%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(24,24,24,0) 52%, rgba(24,24,24,0.88) 77%, rgba(24,24,24,1) 93%)",
        }}
      ></div>
    </section>
  );
};

export default FounderSection;
