"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const ComPats = () => {

  interface Partener {
    name:string;
    image:string
  }

  const compats: Partener[] = [
    {
      name:"Event Buzz",
      image:"/imgs/event-buzz.jpg"
    }, {
      name:"IEEE Cummins",
      image:"/imgs/ieee-cummins.jpg"
    }, {
      name:"Nexmeet",
      image:"/imgs/nexmeet-transparent.png"
    }, {
      name:"THM",
      image:"/imgs/THM.png"
    }
  ];

  return (
    <div className="px-5 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-bold">
        Our Partners
      </h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {compats.map((partener, index) => (
          <SponsorCard key={index} name={partener.name} img={partener.image} index={index} />
        ))}
      </div>
      <br />
    </div>
  );
};

const SponsorCard: React.FC<{ name: string; index: number, img:string }> = ({
  name,
  index,
  img
}) => {
  return (
    <motion.div
      id="compats"
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="hover:scale-105  ease-in-out"
    >
      <Card className=" text-white shadow-lg p-4">
        <CardHeader>
          
          <CardDescription><Image src={img} alt="something..." height={50} width={50}/></CardDescription>
        </CardHeader>
        <CardContent>
          <p>{name}</p>
        </CardContent>
        <CardFooter>
          <p>More info coming soon...</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ComPats;
