"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardDescription, CardContent } from "./ui/card";

const Sponsors = () => {
  interface Partener {
    name: string;
    image: string;
  }

  const compats: Partener[] = [
    {
      name: "Microsoft",
      image: "/imgs/microsoft-logo.png",
    },
    {
      name: "Github",
      image: "/imgs/github-logo.png",
    },
    {
      name: "Fireblaze",
      image: "/imgs/fireblaze-logo.png",
    },
  ];

  return (
    <div className="px-5 py-10" id="sponsors">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-bold">
        Sponsors
      </h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {compats.map((partener, index) => (
          <SponsorCard
            key={index}
            name={partener.name}
            img={partener.image}
            index={index}
          />
        ))}
      </div>
      <br />
    </div>
  );
};

const SponsorCard: React.FC<{ name: string; index: number; img: string }> = ({
  name,
  index,
  img,
}) => {
  return (
    <motion.div
      id="compats"
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="hover:scale-105 ease-in-out"
    >
      <Card className="text-white shadow-lg p-4 flex flex-col items-center">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardDescription className="flex justify-center items-center">
            <Image
              src={img}
              alt={name}
              height={100}
              width={100}
              className="w-24 h-24 object-contain rounded-lg"
            />
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-medium lg:text-2xl">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Sponsors;
