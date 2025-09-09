import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ModalProvider } from "./context/ModalProvider.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    const handleLoad = () => {
      // Keep loader for at least 2s after page load
      timer = setTimeout(() => setLoading(false), 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black">
        <DotLottieReact
          src="https://lottie.host/dc85f867-1f56-4b63-a595-bd46ad92096f/QYWvxiwtZE.lottie"
          loop
          autoplay
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default Root;
