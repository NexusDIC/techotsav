"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";

const bungeeOutlineFont = localFont({
  src: "../fonts/BungeeOutline-Regular.ttf",
});

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculateTimeLeft() {
      const targetDate = new Date("March 22, 2025 10:00:00 GMT+0530");
      const now = new Date();
      let difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-2">
        Time Left Till Event:
      </h3>
      <p
        className={`select-none text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold ${bungeeOutlineFont.className}`}
      >
        {timeLeft.days > 0 && `${timeLeft.days}D `}
        {timeLeft.hours.toString().padStart(2, "0")}:
        {timeLeft.minutes.toString().padStart(2, "0")}:
        {timeLeft.seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
