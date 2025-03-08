"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const ComPats = () => {
  const compats: string[] = [
    "Your Mom",
    "Your Sister",
    "Your Sister's Bestie",
    "Your English Madam",
    "Your Ex",
    "Your Ex's Bestie",
  ];

  return (
    <div>
      <h1 className="text-5xl text-center">Community Parteners</h1>
      <br />
      <div className="flex gap-[2rem] flex-wrap justify-center">
        {compats.map((name, index) => (
          <SponsorCard key={index} name={name} index={index} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

const SponsorCard: React.FC<{ name: string; index: number }> = ({
  name,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animationProps = isInView
    ? { y: 0, opacity: 1, scale: 1 }
    : { y: 50, opacity: 0, scale: 0.8 };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      animate={animationProps}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-1/4 hover:transition-transform hover:duration-400 hover:ease-in-out hover:scale-115"
    >
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ComPats;
