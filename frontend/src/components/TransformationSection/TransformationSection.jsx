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
      <div className="cal-sans-regular text-center mb-16 text-white text-[40px] font-bold uppercase mx-auto tracking-wider">
         <p>
           How This <span className="text-[#FFC02B]">Masterclass</span> Will </p>
       <p>Transform Your <span className="text-[#FFC02B]">Trading Journey</span></p>
       </div>

      <div className="relative flex justify-center items-center gap-8 max-md:flex-col">
        {features.map((feature, index) => {
          const transformClass =
            index === 0
              ? '-translate-x-[-15%]'
              : index === 2
              ? 'translate-x-[-15%]'
              : '';

          return (
            <article
              key={index}
              className={`flex w-[412px] h-[412px] flex-col items-center gap-[26px] aspect-[1/1] px-[58px] py-[85px] rounded-[228px]
                ${transformClass}
                ${feature.isHighlighted ? 'bg-[#FFC02B] border-none z-20' : 'border border-[#979797] z-10'}
              `}
            >
              <div className="w-[140px] h-[140px] relative">
                <img
                  src={feature.isHighlighted ? blackChessIcon : chessIcon}
                  alt={feature.title}
                  className="aspect-[1/1] absolute left-0 top-0"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3
                  className={`text-center text-[22px] font-semibold sora-regular capitalize ${
                    feature.isHighlighted ? 'text-[#181818]' : 'text-[#979797]'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`h-auto text-center text-base font-normal capitalize sora-regular ${
                    feature.isHighlighted ? 'text-[#181818]' : 'text-[#979797]'
                  }`}
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