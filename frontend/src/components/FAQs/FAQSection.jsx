import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import faqs from "./faqs"; // import from faqs.js

const FAQSection = () => {
  // By default, nothing open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4" id="FAQs">
      <h2 className="text-3xl cal-sans-regular text-center mb-16 text-white text-[40px] font-bold mx-auto tracking-wider">
        FREQUENTLY ASK <span className="text-[#FFC02B]">QUESTIONS</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-6 sora-regular">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#2A2A2A] rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center px-4 py-4 transition-colors 
                ${openIndex === index ? "bg-[#222]" : "hover:bg-[#222]"}`}
            >
              {/* Question Number + Text */}
              <div className="flex items-center gap-6">
                <span className="text-[#FFC02B] font-bold text-xl sora-regular">
                  {faq.number}
                </span>
                <span className="text-white font-medium md:text-xl text-lg text-left sora-regular">
                  {faq.question}
                </span>
              </div>

              {/* Icon Button */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#1A1A1A] bg-[#333] transition-colors">
                {openIndex === index ? (
                  <Minus className="text-white" size={20} />
                ) : (
                  <Plus className="text-white" size={20} />
                )}
              </div>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-400 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="max-w-4xl text-white text-base leading-relaxed ml-[4rem] py-5 sora-regular">
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
