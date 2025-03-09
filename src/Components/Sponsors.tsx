"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const Sponsors = () => {
  const sponsors: string[] = [
    "Your Mom",
    "Your Sister",
    "Your Sister's Bestie",
    "Your English Madam",
    "Your Ex",
    "Your Ex's Bestie",
  ];

  return (
    <div className="px-5 py-10" id="sponsors">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-bold">
        Sponsors
      </h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {sponsors.map((name, index) => (
          <SponsorCard key={index} name={name} index={index} />
        ))}
      </div>
      <br />
    </div>
  );
};

const SponsorCard: React.FC<{ name: string; index: number }> = ({
  name,
  index,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="hover:scale-105  ease-in-out"
    >
      <Card className=" text-white shadow-lg p-4">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>Special Thanks</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Thank you for your support!</p>
        </CardContent>
        <CardFooter>
          <p>More info soon...</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Sponsors;
