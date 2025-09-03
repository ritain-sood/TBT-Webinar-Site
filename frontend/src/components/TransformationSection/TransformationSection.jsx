import React from 'react';
import blackChessIcon from '../../assets/images/blackChessIcon.png';
import chessIcon from '../../assets/images/chessIcon.png'

const TransformationSection = () => {
  const features = [
    {
      title: 'Real Trade Analysis',
      description: 'Watch Smit break down trades step-by-step with clarity.',
      isHighlighted: false
    },
    {
      title: 'Proven Strategies',
      description: 'Get frameworks that real traders use to win consistently.',
      isHighlighted: true
    },
    {
      title: 'Resources',
      description: 'Receive exclusive PDFs, templates & trading tools post-session.',
      isHighlighted: false
    }
  ];

  return (
    <section className="relative z-10 py-20 mt-[5%]">
      <div className="cal-sans-regular text-center mb-16 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
         <h2>
           How This <span className="text-[#FFC02B]">Masterclass</span> Will <br className="hidden md:block" />
           Transform Your <span className="text-[#FFC02B]">Trading Journey</span>
         </h2>
       </div>

      {/* Mobile and Desktop layouts */}
      <div className="relative flex justify-center items-center h-[250px] md:h-auto md:gap-8">
        {features.map((feature, index) => {
          // --- DESKTOP LOGIC ---
          const desktopTransformClass =
            index === 0
              ? 'md:-translate-x-[-25%]' // Desktop Translation
              : index === 2
              ? 'md:translate-x-[-25%]'
              : '';

          // --- MOBILE-SPECIFIC LOGIC ---
          const mobilePositionStyles = {
              1: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, // Center
              0: { top: '50%', left: '50%', transform: 'translate(-110%, -50%) scale(0.8)' }, // Left
              2: { top: '50%', left: '50%', transform: 'translate(10%, -50%) scale(0.8)' }  // Right
          };
          
          const [isMobile, setIsMobile] = React.useState(false);
          React.useEffect(() => {
              const handleResize = () => setIsMobile(window.innerWidth < 768);
              window.addEventListener('resize', handleResize);
              handleResize();
              return () => window.removeEventListener('resize', handleResize);
          }, []);

          return (
            <article
              key={index}
              className={`
                flex flex-col items-center justify-center rounded-full transition-all duration-500
                ${feature.isHighlighted ? 'bg-[#FFC02B] border-none z-20' : 'z-10'}
                
                ${/* MOBILE STYLES */''}
                absolute w-[300px] h-[300px] p-8 gap-2
                ${feature.isHighlighted ? '' : 'border border-[#979797]/40'}
                
                ${/* DESKTOP STYLES */''}
                md:relative md:w-[412px] md:h-[412px] md:px-[58px] md:py-[85px] md:gap-[26px]
                ${feature.isHighlighted ? '' : 'md:border-[#979797]'}
                ${desktopTransformClass}
              `}
              style={isMobile ? mobilePositionStyles[index] : {}}
            >
              {/* Overlay for mobile side cards */}
              {!feature.isHighlighted && <div className="md:hidden absolute inset-0 rounded-full"></div>}

              <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] relative">
                <img
                  src={feature.isHighlighted ? blackChessIcon : chessIcon}
                  alt={feature.title}
                  className={`w-full h-full object-contain ${feature.isHighlighted ? '' : 'opacity-50 md:opacity-100'}`}
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3
                  className={`text-center font-semibold sora-regular-600 capitalize text-lg md:text-[22px]
                    ${feature.isHighlighted ? 'text-[#181818]' : 'text-[#979797]/40 md:text-[#979797]'}
                  `}
                >
                  {feature.title}
                </h3>
                <p
                  className={`h-auto text-center capitalize sora-regular text-sm md:text-base
                    ${feature.isHighlighted ? 'text-[#181818]' : 'text-[#979797]/40 md:text-[#979797]'}
                  `}
                >
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TransformationSection;