"use client";

import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkUrl: string;
  buttonText: string;
  cardKey: number;
  onClick?: () => void;
}

const ThreeDCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  linkText,
  linkUrl,
  buttonText,
  cardKey,
  onClick, // Added onClick prop
}) => {
  return (
    <CardContainer className="inter-var w-auto">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4">
          <Image
            src={image}
            height={500}
            width={500}
            className="max-w-full w-auto h-auto rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={linkUrl}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {linkText}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={onClick}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {buttonText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCard;
