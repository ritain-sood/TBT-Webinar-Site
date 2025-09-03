import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import AndroidIcon from "../../assets/icons/footerAndroid.svg";
import AppleIcon from "../../assets/icons/footerApple.svg";
import YoutubeIcon from "../../assets/icons/footerYoutube.svg";
import InstagramIcon from "../../assets/icons/footerInstagram.svg"

const Footer = ({webinarDate}) => {
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Handle division by zero if totalHeight is 0
      const scrollPercentage =
        totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;

      if (scrollPercentage > 12) {
        setIsStickyBarVisible(false);
      } else {
        setIsStickyBarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Format the date for display in the sticky bar
  let finalDisplayDate = "";
  if (webinarDate) {
    const date = new Date(webinarDate);
    const day = date.toLocaleDateString("en-GB", { day: "numeric" });
    const month = date.toLocaleDateString("en-GB", { month: "long" });
    const weekday = date.toLocaleDateString("en-GB", { weekday: "long" });
    const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
    
    // Function to add ordinal suffix (st, nd, rd, th)
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    finalDisplayDate = `${getOrdinal(day)} ${month} - ${weekday} from ${time}`;
    console.log(finalDisplayDate);
  }

  return (
    <footer className="relative z-10 pb-20 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
        {/* Mobile Sticky Bar with conditional visibility */}
        <div
          className={`md:hidden fixed bottom-0 left-0 w-full px-4 py-5 shadow-lg z-50 rounded-t-3xl transform transition-transform duration-500 ease-in-out ${
            isStickyBarVisible ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            background:
              "linear-gradient(rgb(255, 227, 159) 0%, rgb(255, 216, 115) 100%)",
          }}
        >
          <div className="text-center text-black font-semibold text-base mb-4 leading-snug">
            Zoom Webinar is on {finalDisplayDate}
          </div>
          <button className="bg-[#FFB800] hover:bg-[#e0a500] text-black font-semibold px-6 py-3 rounded-full w-full flex items-center justify-center gap-2 transition-colors shadow-md">
            Save My Seat{" "}
            <span className="relative z-10 flex justify-center items-center group-hover:text-[#000000] transition-colors duration-300 md:pl-2">
              <FaChevronRight />
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-20 text-center text-white sora-regular">
          <a
            href="#FAQs"
            rel="noopener noreferrer"
            className="text-base hover:text-[#FFC02B] transition-colors"
          >
            FAQ
          </a>
          <a
            href="mailto:support@thebengaltrader.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to support@thebengaltrader.com"
            className="text-base hover:text-[#FFC02B] transition-colors"
          >
            Contact
          </a>
          <a
            href="#aboutMe"
            rel="noopener noreferrer"
            className="text-base hover:text-[#FFC02B] transition-colors"
          >
            About Me
          </a>
          <a
            href="#hero"
            rel="noopener noreferrer"
            className="text-base hover:text-[#FFC02B] transition-colors"
          >
            Any queries
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-5 justify-center items-center p-4">
          <a
            href="https://www.youtube.com/@thebengaltrader008"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img
              src={YoutubeIcon}
              alt="YouTube"
              className="block w-7 h-7 leading-none"
            />
          </a>
          <a
            href="https://www.instagram.com/thebengaltrader"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="block w-7 h-7 leading-none"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/the-bengal-trader/id6747384999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="iOS"
          >
            <img
              src={AppleIcon}
              alt="iOS"
              className="block w-7 h-7 leading-none"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=co.lily.vwmxx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Android"
          >
            <img
              src={AndroidIcon}
              alt="Android"
              className="block w-7 h-7 leading-none"
            />
          </a>
        </div>

        {/* Credits & Copyright */}
        <div className="text-center text-sm text-white flex flex-col gap-2">
          {/* <p className="sora-regular">
            Created with ❤️ by{" "}
            <a
              href="mailto:contact@ritainsood.dev"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Ritain Sood.
            </a>{" "}
            Visit my{" "}
            <a
              href="http://ritainsood.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-white transition-colors underline"
            >
              portfolio
            </a>
            .
          </p> */}
          <p className="sora-regular">
            © Copyright {new Date().getFullYear()} -{" "}
            <a
              href="https://thebengaltrader.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors underline"
            >
              The Bengal Trader
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
