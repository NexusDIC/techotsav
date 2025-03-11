"use client";

import { Card, CardContent } from "./ui/card";
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Speaker {
  name: string,
  image: string
  post: string,
  Company: string
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      name: "Mr. Archit Chandak",
      image: "/imgs/Mr. Archit Chandak...png",
      post: "Deputy Commissioner of Police",
      Company: "Nagpur City Police"
    },
    {
      name: "Mr. Nitin Sachdeva",
      image: "/imgs/nitin_sachideva.jpg",
      post: "President and MD",
      Company: "delaPlex, Nagpur"
    },
    {
      name: "Mr. Varun Gandhi",
      image: "/imgs/varun_gandhi.jpg",
      post: "Manager",
      Company: "PwC Acceleration Centers, Mumbai"
    },
    // "Mr. Shivam Joshi",
    // "Mr. Anmol Ranjari",
    // "Mr. Aakash Singh",
    // "Mr. Vishnu Pillai",
    // "Mr. Rahul Manusmare",
    // "Ms. Sonal Shembhekar",
    {
      name: "Mr. Aniruddha Kalbande",
      image: "/imgs/aniruddha_kalbande.jpg",
      post: "Founder FireBlaze",
      Company: "AISchool"
    },
    // "Ms. Priyanka Sharma",
    // "Mrs.Nidhi Bawashe",
    // "Dr. Shekhar Patankar Sir",
    {
      name: "Dr. Sachin Untawale",
      image: "/imgs/dr-sachin-untawale.jpg",
      post: "Director",
      Company: "GHRCE"
    }
  ];

  return (
    <div
      className="flex flex-col items-center justify-center gap-y-8 w-full"
      id="speakers"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center">Speakers</h1>

      <Carousel
        className="w-4/5 max-w-[90dvw] sm:max-w-[80dvw] md:max-w-[70dvw] lg:max-w-[50dvw]"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {speakers.map((speaker, index) => (
            <CarouselItem key={index} className="flex justify-center">
             <Card className="w-full max-w-md sm:max-w-lg md:max-w-sm lg:max-w-sm  border-2 border-gray-300 shadow-lg shadow-white rounded-lg   ">
  <CardContent className="flex flex-col items-center justify-center p-6 space-y-2 text-center">
    <Image
      src={speaker.image}
      alt={speaker.name}
      width={250}
      height={250}
      className="rounded-lg"
    />

    <span className="text-xl sm:text-3xl md:text-5xl lg:text-4xl font-semibold">
      {speaker.name}
    </span>

    {/* Post - Smallest */}
    <span className="text-xl sm:text-base md:text-lg lg:text-2xl font-medium">
      {speaker.post}
    </span>

    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
      {speaker.Company}
    </span>
  </CardContent>
</Card>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <br />
    </div>
  );
}
