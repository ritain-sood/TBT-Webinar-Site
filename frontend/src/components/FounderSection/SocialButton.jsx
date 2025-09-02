import React from "react";
import { FaChevronRight } from "react-icons/fa";

const SocialButton = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-[190px] sm:w-[210px] h-[55px] sm:h-[62px] justify-center items-center px-4 sm:px-5 py-3 rounded-full bg-[#FFC02B] overflow-hidden transition-all duration-300 shadow-[0_0_30px_#FFC02B]"
    >
      {/* Animated background */}
      <span className="absolute top-0 left-0 h-full w-0 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#000000] transition-colors duration-300">
        <img
          src={icon}
          alt={label}
          className="w-[24px] sm:w-[28px] h-[24px] sm:h-[28px]"
        />
        <span className="text-[#282828] text-base sm:text-lg font-bold capitalize">
          {label}
        </span>

        <span className="relative z-10 flex justify-center items-center group-hover:text-[#000000] transition-colors duration-300 pl-2">
          <FaChevronRight />
        </span>
      </div>
    </a>
  );
};

export default SocialButton;
