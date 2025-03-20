"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScheduleItem {
  time: string;
  event: string;
  speakers: speakerObj[];
}

interface speakerObj {
  name: string;
  pic: string;
}

interface ScheduleData {
  [key: string]: ScheduleItem[];
}

const schedule: ScheduleData = {
  day1: [
    {
      time: "09:00 a.m. – 10:00 a.m",
      event: "Registration",
      speakers: [
        {
          name: "Speaker 1",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "10:00 a.m. – 10:15 a.m",
      event: "Lamp Lighting & Welcome",
      speakers: [
        {
          name: "Speaker 2",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "10:15 a.m. – 10:45 a.m",
      event: "Key Digital Tenets in Product Development",
      speakers: [
        {
          name: "Speaker 3",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "10:45 a.m. – 11:15 a.m",
      event: "Pragmatism of Digital Products in Real-World",
      speakers: [
        {
          name: "Speaker 4",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "11:15 a.m. – 11:45 p.m",
      event: "Role of AI-driven products to transform business processes",
      speakers: [
        {
          name: "Speaker 5",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "11:45 a.m. – 12:30 p.m",
      event: "Panel Discussion on Cyber War-Fare: The Next Global Threat?",
      speakers: [
        {
          name: "Speaker 5",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "12:30 p.m. – 01:15 p.m",
      event: "Lunch & Networking Break",
      speakers: [
        {
          name: "Speaker 6",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "01:15 p.m. – 04:15 p.m",
      event: "ML and Cyber Security",
      speakers: [
        {
          name: "Speaker 7",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "04:15 p.m. – 04:30 p.m",
      event: "High-Tea Break",
      speakers: [
        {
          name: "Speaker 8",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "04:30 p.m. – 05:15 p.m",
      event: "Rise of LLM’s: Opportunities, Challenges and the Road Ahead",
      speakers: [
        {
          name: "Speaker 9",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "05:15 p.m. – 05:30 p.m",
      event: "Conclusion of Day 1",
      speakers: [
        {
          name: "Speaker 10",
          pic: "/imgs/logo.png",
        },
      ],
    },
  ],
  day2: [
    {
      time: "09:00 a.m. – 09:30 a.m",
      event: "Day 2 Registration & Entry",
      speakers: [
        {
          name: "Speaker 11",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "09:30 a.m. – 12:30 p.m",
      event: "Salesforce: CRM & Data Visualization with PowerBI",
      speakers: [
        {
          name: "Speaker 12",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "12:30 p.m. – 01:15 p.m",
      event: "Lunch Break",
      speakers: [
        {
          name: "Speaker 13",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "01:15 p.m. – 02:00 p.m",
      event: "Employability Skills & Career Talk",
      speakers: [
        {
          name: "Speaker 14",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "02:00 p.m. – 02:45 p.m",
      event: "Entrepreneurship Session",
      speakers: [
        {
          name: "Speaker 15",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "02:45 p.m. – 03:30 p.m",
      event:
        "Collaboration and Innovation: Key to a High-Performing Supply Chain",
      speakers: [
        {
          name: "Speaker 16",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "03:30 p.m. – 04:15 p.m",
      event: "Enabling Business Transformation: Data, Security & IT Strategy in Action",
      speakers: [
        {
          name: "Speaker 17",
          pic: "/imgs/logo.png",
        },
      ],
    },
    {
      time: "04:15 p.m. – 05:30 p.m",
      event: "Valedictory",
      speakers: [
        {
          name: "Speaker 18",
          pic: "/imgs/logo.png",
        },
      ],
    },
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
      id="schedule"
      className={`w-fit p-4  flex flex-col items-center border-b-2 ${
        colors[index % colors.length]
      }`}
    >
      <h2 className="text-3xl font-bold text-center text-shadow">
        {session.event}
      </h2>
      <p className="text-xl text-center">{session.time}</p>
      <div className="flex">
        {/* {session.speakers.map((speaker, speakerIndex) => (
          <div key={speakerIndex} className="flex items-center space-x-2">
            <Image
              width={50}
              height={50}
              src={speaker.pic}
              alt={`${speaker.name} picture`}
            />
            <p
              className={`text-xl text-center bg-opacity-50 text-white px-2 py-1 rounded-full`}
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              {speaker.name}
            </p>
          </div>
        ))} */}
      </div>
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
