// import React, { useState,useRef } from "react";
// import PlayIcon from "../../assets/icons/Play.svg";

// const VideoShowcaseSection = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handleMouseEnter = () => {
//     setIsPlaying(true);
//     if (videoRef.current) {
//       videoRef.current.muted = false;
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   // Mobile touch: tap to play/pause
//   const handleTouch = () => {
//     setIsPlaying((prev) => {
//       const next = !prev;
//       if (videoRef.current) {
//         if (next) {
//           videoRef.current.muted = false;
//           videoRef.current.play();
//         } else {
//           videoRef.current.pause();
//         }
//       }
//       return next;
//     });
//   };

//   return (
//     <section className="max-w-6xl z-10 mt-[10%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-25 px-4">
//       {/* Video Box */}
//       <div className="relative w-[95%] h-full md:w-[610px] md:h-[620px] rounded-[20px] p-[4px] bg-gradient-to-br from-[#FFD369] to-[#FFB800] shadow-[0_0_30px_#FFD369] order-2 md:order-1"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onTouchStart={handleTouch}
//       >
//         <div className="relative w-full h-[380px] md:h-full rounded-[16px] overflow-hidden bg-black">
//           <video
//             ref={videoRef}
//             src="https://res.cloudinary.com/diqmmch5o/video/upload/v1757497702/lv_0_20250828142414_1_pkuphp.mp4"
//             className="w-full h-full object-cover"
//             playsInline
//             controls
//           />
//           <img
//             src={PlayIcon}
//             alt=""
//             className={`absolute left-20 md:left-40 inset-0 w-[50%] h-full object-contain pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
//           />
//           {/* Poster image overlay with a transition for a smoother disappearance */}
//           {/* <img
//             src="/thumbnail.png"
//             alt="Video thumbnail"
//             className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
//           /> */}
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="flex-1 text-white text-center md:text-left order-1 md:order-2">
//         <h3 className="text-lg sm:text-xl md:text-[24px] font-bold leading-snug mb-4">
//           Why Do You Always Get Stopped Out?
//         </h3>
//         <p className="text-[#CCCCCC] text-sm sm:text-base leading-relaxed">
//           It’s not bad luck — it’s by design. Institutions hunt retail
//           stop-losses daily. In this session, I’ll show you exactly how the “big
//           money” manipulates the game, and how to flip their
//           strategy&nbsp;into&nbsp;your&nbsp;edge.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default VideoShowcaseSection;

import React, { useState, useRef } from "react";
import PlayIcon from "../../assets/icons/Play.svg";

const VideoShowcaseSection = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Mobile touch: tap to play/pause
  const handleTouch = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (videoRef.current) {
        if (next) {
          videoRef.current.muted = false;
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
      return next;
    });
  };

  return (
    <section
      className={`max-w-6xl z-10 mt-[10%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4 ${className}`}
    >
      {/* Video Box */}
      <div
        className="relative w-full md:w-[610px] md:h-[620px] rounded-[20px] p-[4px] 
               bg-gradient-to-br from-[#FFD369] to-[#FFB800] shadow-[0_0_30px_#FFD369] 
               order-1 md:order-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouch}
      >
        <div className="relative w-full h-[380px] md:h-full rounded-[16px] overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/diqmmch5o/video/upload/v1757497702/lv_0_20250828142414_1_pkuphp.mp4"
            className="w-full h-full object-cover"
            playsInline
            controls
          />
          <img
            src={PlayIcon}
            alt=""
            className={`absolute left-20 md:left-40 inset-0 w-[50%] h-full object-contain pointer-events-none transition-opacity duration-300 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-white text-center md:text-left order-2 block md:hidden">
        <h3 className="text-lg sm:text-xl md:text-[24px] font-bold leading-snug mb-4">
          Why Do You Always Get Stopped Out?
        </h3>
        <p className="text-[#CCCCCC] text-sm sm:text-base leading-relaxed">
          It’s not bad luck — it’s by design. Institutions hunt retail
          stop-losses daily. In this session, I’ll show you exactly how the “big
          money” manipulates the game, and how to flip their
          strategy&nbsp;into&nbsp;your&nbsp;edge.
        </p>
      </div>
      <div className="flex-1 text-white text-center md:text-left order-2 hidden md:block">
        <h3 className="lg:text-3xl text-[24px] font-bold leading-snug mb-4">
          Why Do You Always Get Stopped Out?
        </h3>
        <ul className="text-[#CCCCCC] text-2xl leading-relaxed list-disc list-outside space-y-2">
          <li>It’s not bad luck — it’s by design.</li>
          <li>Institutions hunt retail stop-losses daily.</li>
          <li>
            In this session, I’ll show you exactly how the “big money”
            manipulates the game.
          </li>
          <li>Learn how to flip their strategy into your edge.</li>
          <li>
            Discover the hidden patterns institutions use to trap traders.
          </li>
          <li>Uncover why most retail strategies fail against smart money.</li>
          <li>
            Master the mindset needed to trade with clarity and confidence.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
