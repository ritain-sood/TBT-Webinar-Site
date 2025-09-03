import HeaderBadge from "./HeaderBadge";
import HeroTitle from "./HeroTitle";
import CountdownTimer from "./CountdownTimer";
import FeatureCards from "./FeatureCards";
import HeroMain from "./HeroMain";
import WebArrow from "../../assets/images/WebArrow.png";
import chartBg from "../../assets/images/heroBg.png";
import {WEBINAR_DATE} from "../../webinarDate.js";

const HeroSection = () => {

  return (
    <section className="relative text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">

      {/* Blur */}
      <div
        className="pointer-events-none absolute blur-[120px] z-10 -left-[30%] -top-[10%] hidden md:block"
        style={{
          width: "816px",
        height: "816px",
          background:
            "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
            opacity:0.20,
        }}
      />
      <img src={chartBg} className="absolute object-contain -top-4 hidden md:block" />
      <img src={chartBg} className="absolute inset-0 object-cover  block md:hidden" style={{width:"1000px",height:"681px"}}/>
      <div className="w-full mx-auto flex flex-col items-center gap-6">
        <HeaderBadge />
        <HeroTitle />
        <img
          src={WebArrow}
          alt=""
          className="absolute w-18 h-16 rotate-30 top-[17%] left-[10%] md:w-18 md:h-16 md:left-[38%] md:top-62 md:rotate-none"
        />
        <CountdownTimer webinarDate={WEBINAR_DATE} />
        <FeatureCards />
        <HeroMain webinarDate={WEBINAR_DATE} />
      </div>
    </section>
  );
};

export default HeroSection;
