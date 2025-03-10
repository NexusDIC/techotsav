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
  name:string,
  image:string
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      name:"Mr. Archit Chandak",
      image:"/imgs/archit_chandak.jpg"
    },
    {
      name : "Mr. Nitin Sachdeva",
      image:"/imgs/nitin_sachideva.jpg"
    },
    {
      name : "Mr. Varun Gandhi",
      image:"/imgs/varun_gandhi.jpg"
    },
    // "Mr. Shivam Joshi",
    // "Mr. Anmol Ranjari",
    // "Mr. Aakash Singh",
    // "Mr. Vishnu Pillai",
    // "Mr. Rahul Manusmare",
    // "Ms. Sonal Shembhekar",
    {
      name : "Mr. Aniruddha Kalbande",
      image:"/imgs/aniruddha_kalbande.jpg"
    },
    // "Ms. Priyanka Sharma",
    // "Mrs.Nidhi Bawashe",
    // "Dr. Shekhar Patankar Sir",
    {
      name: "Dr. Sachin Untawale",
      image:"/imgs/sachin_untawale.jpg"
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
              <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {speaker.name}
                  </span>
                  <Image src={speaker.image} alt="speaker.name" width={250} height={250}/>
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
