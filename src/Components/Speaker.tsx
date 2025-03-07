"use client";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Speakers() {
  const speakers: string[] = [
    "Your Mom",
    "Your Sister",
    "Your Sister's Bestie",
  ];

  return (
    <div className=" flex flex-col items-center justify-center">
      <Carousel
        className=""
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <br />
        <h1 className="text-5xl text-center">Speakers</h1>
        <br />
        <CarouselContent>
          {speakers.map((name, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex  items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
