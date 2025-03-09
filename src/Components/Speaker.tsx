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
    "Your English Madam",
    "Your Ex",
    "Your Ex's Bestie",
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
          {speakers.map((name, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {name}
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
