import Star from "../../assets/icons/Star.svg";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#1C1C1C] rounded-[20px] flex flex-col h-full shadow-lg">
      {/* Top content */}
      <div className="p-6 flex flex-col flex-1 gap-2">
        <div className="flex gap-0.5 mb-2 text-[#FFC02B]">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <img key={i} src={Star} alt="star" className="w-[1rem] h-[1rem]" />
          ))}
        </div>
        <p className="text-white text-xs md:text-sm flex-1 leading-relaxed">{testimonial.text}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-[#FFC02B] rounded-b-[20px] px-4 py-3">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-black font-semibold text-xs md:text-sm pr-4">
            {testimonial.name}
          </p>
        </div>

        <p className="text-black font-semibold text-xs md:text-sm">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;