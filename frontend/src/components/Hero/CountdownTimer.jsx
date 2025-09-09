import React, { useEffect, useState } from "react";


const CountdownTimer = ({ webinarDate }) => {

  const calculateTimeLeft = React.useCallback(() => {
    const targetTime = new Date(webinarDate).getTime();
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [webinarDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  // Helper function to add a leading zero
  const formatTime = (time) => String(time).padStart(2, '0');
  
  // Convert timeLeft object to an array to map over
  const timeUnits = Object.entries(timeLeft);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 text-center z-10">
      {timeUnits.map(([label, value], index) => (
        <React.Fragment key={label}>
          {/* Box for the number */}
          <div className="bg-[#222222] p-4 w-4 h-4 flex items-center justify-center">
            <span className="text-lg sora-regular-600 text-[#FFC02B]">
              {formatTime(value)}
            </span>
          </div>

          {/* Colon Separator (not shown after the last item) */}
          {index < timeUnits.length - 1 && (
            <span className="text-lg font-bold text-[#AFE900]">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;