import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#212121] text-white px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFC02B]">
        🎉 Registration Successful!
      </h1>
      <p className="text-lg md:text-xl mb-4">Thank you for securing your seat!</p>
      <p className="mb-8">Click below to join the exclusive WhatsApp group:</p>
      <a
        href="https://whatsapp.com/channel/0029VafTVwG5fM5cIXuiz536"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#FFC02B] text-[#212121] font-bold rounded-full hover:bg-yellow-400 transition-colors"
      >
        Join WhatsApp Community Now
      </a>
    </div>
  );
};

export default SuccessPage;