"use client";

import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Speaker {
  name: string;
  image: string;
  post: string;
  Company: string;
  linkedin: string;
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      name: "Mr. Archit Chandak",
      image: "/imgs/Mr. Archit Chandak...png",
      post: "Deputy Commissioner of Police",
      Company: "Nagpur City Police",
      linkedin: "https://www.linkedin.com/in/archit-chandak-8099b9262/",
    },
    {
      name: "Mr. Nitin Sachdeva",
      image: "/imgs/Nitin s.png",
      post: "President and MD",
      Company: "DelaPlex, Nagpur",
      linkedin: "https://www.linkedin.com/in/nitin-sachdeva/",
    },
    {
      name: "Mr. Varun Gandhi",
      image: "/imgs/Varun g.jpeg",
      post: "Manager",
      Company: "PwC Acceleration Centers, Mumbai",
      linkedin:
        "https://www.linkedin.com/in/varungandhi23/?originalSubdomain=in",
    },
    {
      name: "Mr. Aniruddha Kalbande",
      image: "/imgs/Aniruddha Kalbande.jpg",
      post: "Founder FireBlaze",
      Company: "AISchool",
      linkedin:
        "https://www.linkedin.com/in/aniruddhakalbande/?originalSubdomain=in",
    },
    {
      name: "Dr. Sachin Untawale",
      image: "/imgs/dr-sachin-untawale.jpg",
      post: "Director",
      Company: "G H Raisoni College of Engineering",
      linkedin:
        "https://www.linkedin.com/in/sachin-untawale-17504274/?originalSubdomain=in",
    },
    {
      name: "Amol Rangari",
      image: "/imgs/Anmol r.jpeg",
      post: "CYBER SECURITY EXPERT",
      Company: "ETHICAL HACKER ",
      linkedin:
        "https://www.linkedin.com/in/amol-rangari/?originalSubdomain=in",
    },
    {
      name: "Aakash Singh",
      image: "/imgs/aakash s.jpeg",
      post: "Vice President - Product Strategy & Growth",
      Company: "Pragmatyc",
      linkedin:
        "https://www.linkedin.com/in/aakash-singh-58479b96/?originalSubdomain=in",
    },
    {
      name: "Rahul Manusmare",
      image: "/imgs/Rahul M - Copy.jpg",
      post: "Consultant",
      Company: "Deloitte",
      linkedin:
        "https://www.linkedin.com/in/rahulmanusmare/?originalSubdomain=in",
    },
    {
      name: "Tanmay Bhat",
      image: "/imgs/Tanmay B.png",
      post: "Assistant Lead Engineer",
      Company: "Konverge AI",
      linkedin: "https://www.linkedin.com/in/tanmay-bhat-666473146/",
    },
    {
      name: "Shivam Joshi",
      image: "/imgs/shivam j.jpeg",
      post: "Founder and Executive Director",
      Company: "Codons",
      linkedin:
        "https://www.linkedin.com/in/the-shivamjoshi/?originalSubdomain=in",
    },
    {
      name: "Priyanka Sharma",
      image: "/imgs/Priyanka s.jpeg",
      post: "Skill Trainer",
      Company: " G H Raisoni College of Engineering",
      linkedin: "https://in.linkedin.com/in/priyanka-sharma-755265279",
    },
    {
      name: "Nidhi Bawashe",
      image: "/imgs/Nidhi B.png",
      post: "Project Manager",
      Company: "DelaPlex Ltd",
      linkedin: "https://www.linkedin.com/in/nidhi-bawashe-7736aa10a/",
    },
    {
      name: "Rajendra Jodhpurkar",
      image: "/imgs/Rajendra J.jpeg",
      post: "CIO",
      Company: "Infocepts",
      linkedin: "https://www.linkedin.com/in/raj-jodhpurkar/",
    },
    // {
    //   name: "Sajal Saxena",
    //   image: "",
    //   post: "Head of Delivery and Client Engagement",
    //   Company: "Konverge.AI",
    //   linkedin:"https://www.linkedin.com/in/sajal-saxena-0b1b3b1b/"
    // },
    // {
    //   name: "Ms. Sonal Shembekar",
    //   image: "/imgs/prashant_chaudhari.jpg",
    //   post: "Offshore Delivery Head",
    //   Company: "",
    //   linkedin: "https://www.linkedin.com/in/sonal-shembekar-0b1b3b1b/"
    // },
    {
      name: "Roshan Chauhan",
      image: "/imgs/roshan.png",
      post: "Technical Architect",
      Company: "HCL",
      linkedin: "https://www.linkedin.com/in/roshan-chauhan-a8639020b/",
    },
    {
      name: "Ajay Chaudhary",
      image: "/imgs/Ajay.jpg",
      post: "Associate Vice President",
      Company: "GlobalLogic",
      linkedin: "https://www.linkedin.com/in/ajay-chaudhary-in/?originalSubdomain=in",
    },
    {
      name: "Rahul Bajait",
      image: "/imgs/Rahul_B.jpg",
      post: "Co-Founder",
      Company: "Pragmatyc",
      linkedin: "https://www.linkedin.com/in/rahul-bajait/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {speakers.map((speaker, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="w-full max-w-md sm:max-w-lg md:max-w-sm lg:max-w-sm border-2 border-gray-300 shadow-xl shadow-white rounded-3xl">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-2 text-center">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={250}
                    height={250}
                    className="w-[220px] h-[220px] object-cover rounded-lg"
                  />
                  <div className="flex items-center space-x-2">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[24px] font-semibold text-white hover:underline whitespace-nowrap flex items-center"
                    >
                      {speaker.name}
                      <Image
                        src="/imgs/linkedin.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="w-8 h-8 ml-2"
                      />
                    </a>
                  </div>
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">
                    {speaker.post}
                  </span>
                  <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium">
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
