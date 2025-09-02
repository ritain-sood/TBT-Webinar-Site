import React from "react";
import SocialButton from "./SocialButton";
import Founder from "../../assets/images/FounderTbt.png";
import Achievements from "./Achievements";
import Instagram from "../../assets/icons/Instagram.svg";
import Youtube from "../../assets/icons/Youtube.svg";

const FounderSection = () => {
  return (
    <section className="relative mt-6 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center" id="aboutMe">
      {/* Left Side */}
      <div className="w-full lg:w-[60%]">
        {/* Heading */}
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] sorts-mill-goudy uppercase text-center tracking-wide">
          ANUBRATA DAS
        </h2>
        {/* Divider */}
        <div className="w-[140px] md:w-[160px] h-0 border-b border-[#373737] mx-auto"></div>
        <div className="text-[#EAEAEA] text-lg sm:text-xl md:text-xl sorts-mill-goudy text-center tracking-wider py-2">
          Founder of TradeScribe
        </div>
        {/* Divider */}
        <div className="w-[140px] md:w-[160px] h-0 border-t border-[#373737] mx-auto"></div>

        {/* Achievements Grid */}
        <div className="mb-10">
          <Achievements />
        </div>

        {/* Bio */}
        <p className="text-white sorts-mill-goudy text-base leading-[1.8] mb-10 text-center tracking-wider">
          I believe trading success isn’t luck — it’s discipline, clarity, and
          strategy. As a SEBI-certified RA and mentor to thousands, I’ve made it
          my mission to help everyday traders to think, act, and trade
          like&nbsp;institutions.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <SocialButton
            href="https://www.instagram.com/thebengaltrader"
            label="Instagram"
            icon={Instagram}
          />
          <SocialButton href="https://www.youtube.com/@thebengaltrader008" label="Youtube" icon={Youtube} />
        </div>
      </div>

      {/* Right Side - Founder Image */}
      <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center ">
        <img
          src={Founder}
          alt="Founder"
          className="object-contain scale-[1.125] -top-[50px] relative -z-10"
        />
      </div>
    </section>
  );
};

export default FounderSection;
