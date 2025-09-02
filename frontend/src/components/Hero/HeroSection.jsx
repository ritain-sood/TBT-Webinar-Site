import HeaderBadge from "./HeaderBadge";
import HeroTitle from "./HeroTitle";
import CountdownTimer from "./CountdownTimer";
import FeatureCards from "./FeatureCards";
import HeroMain from "./HeroMain";
import WebArrow from "../../assets/images/WebArrow.png";
import chartBg from "../../assets/images/heroBg.png";

const HeroSection = () => {
  const webinarDate = "2025-09-27T18:00:00"; // Format - YYYY-MM-DDTHH:MM:SS

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
      <img src={chartBg} className="absolute object-contain -top-4" />
      <div className="w-full mx-auto flex flex-col items-center gap-6">
        <HeaderBadge />
        <HeroTitle />
        <img
          src={WebArrow}
          alt=""
          className="absolute w-18 h-16 left-[38%] top-62"
        />
        <CountdownTimer targetDate={webinarDate} />
        <FeatureCards />
        <HeroMain targetDate={webinarDate} />
      </div>
    </section>
  );
};

export default HeroSection;
