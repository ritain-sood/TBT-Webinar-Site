import GrowthIcon from "../../assets/images/Growth.png";

const features = [
  {
    title: "Learn from a SEBI-Reg RA",
    description:
      "7+ years in the market, guiding traders with institutional-level insights and proven experience.",
  },
  {
    title: "Actionable Market Insights",
    description:
      "Understand liquidity, structure, and traps — the way institutions trade, not retail guesswork.",
  },
  {
    title: "Join an Elite Trader Circle",
    description:
      "Connect with serious traders, share strategies, and grow together with ongoing support.",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#3D3D3D] px-6 py-4 rounded-3xl flex flex-row gap-3 items-center z-10"
        >
          <img src={GrowthIcon} alt="Growth Icon" className="w-12 h-12 " />
          <div className="items-center">
            <h3 className="sora-regular-600 text-base text-white pb-1">
              {feature.title}
            </h3>

            <p className="text-white text-[12px]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
