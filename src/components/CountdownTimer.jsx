import { useState, useEffect } from "react";

const CountdownTimer = (targetTime) => {
  const calculateTimeRemaining = () => {
    const formatDateToISO = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    };
    const time = new Date();
    const currentTime = formatDateToISO(time);
    const endOfCountdown = formatDateToISO(targetTime.targetTime);

    const timeDifference = new Date(endOfCountdown) - new Date(currentTime);

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-3 justify-center">
      <div>
        <h1 className="text-3xl">{timeRemaining.days}</h1>
        <p className="text-xs text-[#EBEBF599]">Day(s)</p>
      </div>
      {":"}
      <div>
        <h1 className="text-3xl">{timeRemaining.hours}</h1>
        <p className="text-xs text-[#EBEBF599]">Hour(s)</p>
      </div>
      {":"}
      <div>
        <h1 className="text-3xl">{timeRemaining.minutes}</h1>
        <p className="text-xs text-[#EBEBF599]">Minute(s)</p>
      </div>
      {":"}
      <div>
        <h1 className="text-3xl">{timeRemaining.seconds}</h1>
        <p className="text-xs text-[#EBEBF599]">Second(s)</p>
      </div>
    </div>
  );
};

export default CountdownTimer;