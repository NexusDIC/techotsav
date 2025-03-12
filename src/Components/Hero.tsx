"use client";

import { motion } from "framer-motion";
import { MarqueeText } from "./Marquee";
import localFont from "next/font/local";
import Timer from "./Timer";
import Button from "@/Components/ui/gotoBtn";

const hubotFont = localFont({
  src: "../fonts/HubotSans_Condensed-SemiBold.ttf",
});

const monotonFont = localFont({
  src: "../fonts/Monoton-Regular.ttf",
});

interface HeroProps {
  title: string;
  sub: string;
  date: string;
  timer: boolean;
  text: string;
  btns?: {
    title: string;
    href: string;
  }[];
}

const Hero: React.FC<HeroProps> = ({ title, sub, date, timer, text, btns }) => {
  return (
    <div>
      <div className="h-[95dvh] px-5 flex flex-col justify-center items-center text-center">
        <div className="main max-w-6xl">
          <motion.h1
            className={`text-[2.6rem] md:text-8xl lg:text-9xl ${monotonFont.className} text-green-600 cursor-default select-none`}
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <br />
          <motion.p
            className={`text-[1.1rem] md:text-2xl ${hubotFont.className} text-emerald-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {sub}
          </motion.p>
          <br />
          <motion.div
            className="date text-2xl md:text-5xl font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {date} March 2025
          </motion.div>
          {btns &&
            btns.map((btn, index) => (
              <Button key={index} title={btn.title} href={btn.href} />
            ))}
          <br />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            {timer && <Timer />}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="relative z-10 backdrop-blur-sm py-2 border-t border-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <MarqueeText text={text} />
      </motion.div>
    </div>
  );
};

export default Hero;
