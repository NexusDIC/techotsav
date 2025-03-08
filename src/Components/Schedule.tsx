"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScheduleItem {
  time: string;
  event: string;
}

interface ScheduleData {
  [key: string]: ScheduleItem[];
}

const schedule: ScheduleData = {
  day1: [
    { time: "09:00 a.m. – 10:00 a.m", event: "Registration" },
    { time: "10:00 a.m. – 10:15 a.m", event: "Lamp Lighting & Welcome" },
    { time: "10:15 a.m. – 11:00 a.m", event: "Keynote Session 1" },
    { time: "11:00 a.m. – 11:45 a.m", event: "Keynote Session 2" },
    { time: "11:45 a.m. – 12:30 p.m", event: "Panel Discussion 1" },
    { time: "12:30 p.m. – 01:15 p.m", event: "Lunch & Networking Break" },
    { time: "01:15 p.m. – 04:15 p.m", event: "Workshop 1 and Workshop 2" },
    { time: "04:15 p.m. – 04:30 p.m", event: "High-Tea Break" },
    { time: "04:30 p.m. – 05:15 p.m", event: "Panel Discussion 2" },
    { time: "05:15 p.m. – 05:30 p.m", event: "Conclusion of Day 1" },
  ],
  day2: [
    { time: "09:00 a.m. – 09:30 a.m", event: "Entry" },
    { time: "09:30 a.m. – 12:30 p.m", event: "Workshop 3 & 4" },
    { time: "12:30 p.m. – 01:15 p.m", event: "Lunch Break" },
    {
      time: "01:15 p.m. – 02:00 p.m",
      event: "Employability Skills & Career Talk",
    },
    { time: "02:00 p.m. – 02:45 p.m", event: "Entrepreneurship Session" },
    { time: "02:45 p.m. – 03:30 p.m", event: "Panel Discussion 3" },
    { time: "03:30 p.m. – 04:15 p.m", event: "Memory Trainer Session" },
    { time: "04:15 p.m. – 05:30 p.m", event: "Event Wrap-Up" },
  ],
};

const colors: string[] = [
  "text-blue-500",
  "text-green-500",
  "text-purple-500",
  "text-red-500",
  "text-yellow-500",
  "text-pink-500",
];

const ScheduleItemComponent: React.FC<{
  session: ScheduleItem;
  index: number;
}> = ({ session, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Ensuring hooks are always called before returning JSX
  const animationProps = isInView
    ? { x: 0, opacity: 1, scale: 1 }
    : { x: -100, opacity: 0, scale: 0.75 };

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0, scale: 0.75 }}
      animate={animationProps}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`w-fit p-4  flex flex-col items-center border-b-2 ${
        colors[index % colors.length]
      }`}
    >
      <h2 className="text-3xl font-bold text-center">{session.event}</h2>
      <p className="text-xl text-center">{session.time}</p>
    </motion.div>
  );
};

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<keyof ScheduleData>("day1");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl text-center text-white mb-6">Event Schedule</h1>
      <br />

      {/* Day Selection Tabs */}
      <div className="flex justify-center space-x-20 mb-6">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
              selectedDay === day
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedDay(day as keyof ScheduleData)}
          >
            {day.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div className="space-y-6 flex flex-col items-center">
        {schedule[selectedDay].map((session, index) => (
          <ScheduleItemComponent key={index} session={session} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
