"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScheduleItem {
  date: string;
  name: string;
}

const schedule: ScheduleItem[] = [
  {
    date: "11-03-25",
    name: "Release of Problem Statements",
  },
  {
    date: "15-03-25",
    name: "PPT Submission",
  },
  {
    date: "17-03-25",
    name: "List of Selected Ideas",
  },
  {
    date: "22-03-25",
    name: "Final Evaluation of Hackathon",
  },
];

const colors: string[] = [
  "text-blue-500",
  "text-green-500",
  "text-purple-500",
  "text-red-500",
];

const ScheduleItemComponent: React.FC<{
  session: ScheduleItem;
  index: number;
}> = ({ session, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0, scale: 0.75 }}
      animate={
        isInView
          ? { x: 0, opacity: 1, scale: 1 }
          : { x: 100, opacity: 0, scale: 0.75 }
      }
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`w-full max-w-lg p-4 flex flex-col items-center border-b-2 ${
        colors[index % colors.length]
      }`}
    >
      <h2 className="text-3xl font-bold text-center">{session.name}</h2>
      <p className="text-xl text-center">{session.date}</p>
    </motion.div>
  );
};

const Schedule: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl text-center text-white mb-6">
        Hackathon Schedule
      </h1>
      <div className="space-y-6 flex flex-col items-center">
        {schedule.map((session, index) => (
          <ScheduleItemComponent key={index} session={session} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
