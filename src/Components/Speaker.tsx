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
      image: "/imgs/Varun g.jpeg",
      post: "Manager",
      Company: "PwC Acceleration Centers, Mumbai"
    },
    {
      name: "Mr. Aniruddha Kalbande",
      image: "/imgs/aniruddha_kalbande.jpg",
      post: "Founder FireBlaze",
      Company: "AISchool"
    },
    {
      name: "Dr. Sachin Untawale",
      image: "/imgs/dr-sachin-untawale.jpg",
      post: "Director",
      Company: "GHRCE"
    },
    // {
    //   name: "Ms. Sonal Shembekar",
    //   image: "/imgs/prashant_chaudhari.jpg",
    //   post: "Offshore Delivery Head",
    //   Company: ""
    // },
    {
      name: "Anmol Ranjari",
      image: "/imgs/Anmol r.jpeg",
      post: "CCS",
      Company: ""
    },
    {
      name: "Aakash Singh",
      image: "/imgs/aakash s.jpeg",
      post: "Vice President - Product Strategy & Growth",
      Company: ""
    },
    {
      name: "Rahul Manusmare",
      image: "/imgs/Rahul M - Copy.jpg",
      post: "Consultant (Strategy and Analytics)",
      Company: "Deloitte"
    },
    // {
    //   name: "Tanmay Bhatt",
    //   image: "",
    //   post: "Assistant Lead Engineer",
    //   Company: "Konverge AI"
    // },
    {
      name: "Shivam Joshi",
      image: "/imgs/shivam j.jpeg",
      post: "Founder",
      Company: "Codons"
    },
    // {
    //   name: "Priyanka Sharma",
    //   image: "",
    //   post: "Skill Trainer",
    //   Company: ""
    // },
    // {
    //   name: "Nidhi Bawashe",
    //   image: "",
    //   post: "Project Manager",
    //   Company: "DelaPlex"
    // },
    // {
    //   name: "Sajal Saxena",
    //   image: "",
    //   post: "Head of Delivery and Client Engagement",
    //   Company: "Konverge.AI"
    // },
    // {
    //   name: "Rajendra Jodhpurkar",
    //   image: "",
    //   post: "CIO",
    //   Company: "Infocepts"
    // }
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
              <Card className="w-full max-w-md sm:max-w-lg md:max-w-sm lg:max-w-sm  border-2 border-gray-300 shadow-xl shadow-white rounded-3xl   ">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-2 text-center">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={250}
                    height={250}
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                  />

                  <span className="text-xl sm:text-3xl md:text-5xl lg:text-4xl font-semibold">
                    {speaker.name}
                  </span>
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
