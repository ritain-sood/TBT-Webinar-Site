import CTASection from "../components/CTASection/CTASection";
import FAQSection from "../components/FAQs/FAQSection";
import Footer from "../components/Footer/Footer";
import FounderSection from "../components/FounderSection/FounderSection";
import HeroSection from "../components/Hero/HeroSection";
import LearnSection from "../components/LearnSection/LearnSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import TransformationSection from "../components/TransformationSection/TransformationSection";
import VideoShowcaseSection from "../components/VideoShowcase/VideoShowcaseSection";
import EllipseIcon from "../assets/images/Ellipse.png";
import EllipseIcon1 from "../assets/images/Ellipse1.png";

function App() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <div className="absolute -left-[20%] top-[12%] hidden md:block">
        <img
          src={EllipseIcon}
          style={{
            width: "1000px",
            height: "600px",
          }}
        />
      </div>

      {/* Right Blur Hero Section */}

      <div
        className="pointer-events-none absolute blur-[110px] -right-[35%] top-[13%] hidden md:block"
        style={{
          width: "816px",
          height: "816px",
          background:
            "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
          opacity: 0.17,
        }}
      />

      <VideoShowcaseSection />
      <TransformationSection />
      <div
        className="w-full z-20 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(24,24,24,0) 52%, rgba(24,24,24,0.88) 77%, rgba(24,24,24,1) 93%)",
        }}
      >
        <FounderSection />
      </div>

      {/* Left Blur Founder Section */}

      <div
        className="pointer-events-none absolute blur-[120px] z-10 -left-[40%] top-[32%] hidden md:block"
        style={{
          width: "816px",
          height: "816px",
          background:
            "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
          opacity: 0.17,
        }}
      />

      {/* Left Side Ellipse Shape */}
      <div className="absolute -left-[10%] top-[35%] hidden md:block">
        <img
          src={EllipseIcon1}
          style={{
            width: "800px",
            height: "600px",
          }}
        />
      </div>

      {/* Right Side Ellipse Shape */}
      <div className="absolute top-[36.5%] -right-[8%] -z-100 hidden md:block">
        <img
          src={EllipseIcon1}
          style={{
            width: "800px",
            height: "600px",
          }}
        />
      </div>
      <LearnSection />

      {/* Left Side Ellipse Shape */}
      <div className="absolute -left-[10%] top-[52%] -z-100 hidden md:block">
        <img
          src={EllipseIcon1}
          style={{
            width: "800px",
            height: "600px",
          }}
        />
      </div>

      {/* Right Side Ellipse Shape */}
      <div className="absolute top-[61%] -right-[8%] -z-100 hidden md:block">
        <img
          src={EllipseIcon1}
          style={{
            width: "800px",
            height: "600px",
          }}
        />
      </div>
      <TestimonialsSection />

      {/* Left Blur FAQ Section */}

      <div
        className="pointer-events-none absolute blur-[120px] z-10 -left-[40%] top-[82%] hidden md:block"
        style={{
          width: "816px",
          height: "816px",
          background:
            "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
          opacity: 0.17,
        }}
      />
      <FAQSection />
      <CTASection />
      {/* Left Side Ellipse Shape */}
      <div className="absolute -left-[25%] top-[90%] -z-100 hidden md:block">
        <img
          src={EllipseIcon1}
          style={{
            width: "800px",
            height: "600px",
          }}
        />
      </div>

      {/* Right Side Ellipse Shape */}
      <div className="absolute top-[90%] -right-[24%] -z-100 hidden md:block">
        <img
          src={EllipseIcon1}
          style={{
            width: "800px",
            height: "600px",
          }}
        />
      </div>

      {/* Right Blur Footer Section */}

      <div
        className="pointer-events-none absolute blur-[110px] -right-[30%] top-[93%] hidden md:block"
        style={{
          width: "816px",
          height: "816px",
          background:
            "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
          opacity: 0.17,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
