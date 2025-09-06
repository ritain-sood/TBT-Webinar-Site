import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import faqs from "./faqs";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4" id="FAQs">
      <h2 className="cal-sans-regular text-center mb-16 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4">
        FREQUENTLY ASK <span className="text-[#FFC02B]">QUESTIONS</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-6 sora-regular">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#2A2A2A] rounded-md overflow-hidden faq-accordion safari-gpu-accel"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center px-4 py-4 faq-button
                ${openIndex === index ? "bg-[#222]" : "hover:bg-[#222]"}`}
            >
              {/* Question Number + Text */}
              <div className="flex items-center gap-6 w-full">
                <span className="text-[#FFC02B] font-bold text-base md:text-xl sora-regular">
                  {faq.number}
                </span>
                <span className="text-white font-medium text-base md:text-xl  text-left sora-regular">
                  {faq.question}
                </span>
              </div>

              {/* Icon Button */}
              <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-md hover:bg-[#1A1A1A] bg-[#333] faq-icon">
                {openIndex === index ? (
                  <Minus className="text-white" size={16} />
                ) : (
                  <Plus className="text-white" size={16} />
                )}
              </div>
            </button>

            {/* Answer */}
            <div
              className={`faq-accordion-content ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="max-w-4xl text-white text-sm md:text-base leading-relaxed ml-[4rem] py-5 pr-8 sora-regular">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
