import React, { useState } from 'react';

const VideoShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Base URL for the YouTube video
  const baseVideoURL = "https://www.youtube.com/embed/Ifb_ClVzu7A?si=fy8b1zec2MjqwTZj";
  
  // Construct the URL with autoplay and mute parameters when playing
  const videoURL = isPlaying 
    ? `${baseVideoURL}&autoplay=1&mute=1` 
    : baseVideoURL;

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <section className="max-w-6xl z-10 mt-[10%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-25 px-4">
        
        {/* Video Box */}
        <div 
          className="relative w-full md:w-auto md:h-[350px] rounded-[20px] p-[4px] bg-gradient-to-br from-[#FFD369] to-[#FFB800] shadow-[0_0_30px_#FFD369] order-2 md:order-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          <div className="relative w-full h-full rounded-[16px] overflow-hidden aspect-video bg-black">
            
            <iframe
              key={isPlaying ? 'playing' : 'paused'} // Force re-render on state change
              src={videoURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
              loading="lazy"
            ></iframe>
            {/* Poster image overlay with a transition for a smoother disappearance */}
            <img 
              src="/thumbnail.png" 
              alt="Video thumbnail" 
              className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-white text-center md:text-left order-1 md:order-2">
          <h3 className="text-lg sm:text-xl md:text-[24px] font-bold leading-snug mb-4">
            Why Do You Always Get Stopped Out?
          </h3>
          <p className="text-[#CCCCCC] text-sm sm:text-base leading-relaxed">
            It’s not bad luck — it’s by design. Institutions hunt retail stop-losses
            daily. In this session, I’ll show you exactly how the “big money”
            manipulates the game, and how to flip their
            strategy&nbsp;into&nbsp;your&nbsp;edge.
          </p>
        </div>
    </section>
  );
};

export default VideoShowcaseSection;

