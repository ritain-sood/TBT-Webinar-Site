import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <DotLottieReact
        src="https://lottie.host/dc85f867-1f56-4b63-a595-bd46ad92096f/QYWvxiwtZE.lottie"
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default Loader;