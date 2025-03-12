"use client";

import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Dates from "./Dates";
// import Sponsors from "@/Components/Sponsors";
import Faq from "@/Components/Faq";
import Navbar from "@/Components/Navbar";
import ThreeDCard from "@/Components/ThreeDCard";
import Modal from "@/Components/Modal";
import { SparklesCore } from "@/Components/ui/sparkles";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "@/Components/Footer";

import Prizes from "./Prizes";

// import {  } from "../../../public/imgs/CyberSecurity.png";

export default function Hackotsav() {
  const [showParticles, setShowParticles] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<CardData>({} as CardData);
  const [keyData, setKeyData] = useState(0);

  const sub =
    "Innovate, code, compete, and solve real-world challenges in Techotsav’s dynamic hackathon.";

  interface CardData {
    title: string;
    description: string;
    image: string;
    linkText: string;
    linkUrl: string;
  }

  const cardData: CardData[] = [
    {
      title: "WebDev Mastery",
      description: "Innovate and explore the mysteries of development.",
      image: "/imgs/webDevelopmentMastry.jpg",
      linkText: " ",
      linkUrl: "https://hackmaster.com",
    },
    {
      title: "Innovate with AI",
      description: "Explore the latest advancements in AI.",
      image: "/imgs/AI.jpg",
      linkText: " ",
      linkUrl: "https://ai-innovations.com",
    },
    {
      title: "Web3 Revolution",
      description: "Unlock the potential of decentralized tech.",
      image: "/imgs/Web3.jpg",
      linkText: " ",
      linkUrl: "https://web3future.com",
    },
    {
      title: "Cybersecurity Insights",
      description: "Master the art of digital protection.",
      image: "/imgs/CyberSecurity.png",
      linkText: " ",
      linkUrl: "https://cybersecuritytoday.com",
    },
    {
      title: "Open Innovations",
      description: "Bring your very own innovations onto the plate.",
      image: "/imgs/logo.png",
      linkText: " ",
      linkUrl: "https://cloudtech.com",
    },
  ];

  const hackathonData = [
    {
      question: "How many participants are allowed in a hackathon team?",
      answer:
        "Each team can have a minimum of 2 and a maximum of 4 participants.",
    },
    {
      question: "What type of hackathon is this?",
      answer:
        "Techotsav's hackathon is an industry-level challenge where participants develop innovative solutions to real-world problems.",
    },
    {
      question: "Do I need specific skills to participate in the hackathon?",
      answer:
        "No specific skills are required. However, knowledge of coding, problem-solving, and teamwork is beneficial.",
    },
    {
      question: "What are the themes for the hackathon problem statements?",
      answer:
        "The hackathon will include challenges based on AI, cybersecurity, IoT, cloud computing, and more.",
    },
    {
      question: "Can participants directly connect with speakers?",
      answer:
        "Yes, there will be networking sessions and opportunities to interact with speakers.",
    },
    {
      question: "Is there a minimum female participation requirement in teams?",
      answer:
        "No, there is no mandatory female participation requirement, but diverse teams are encouraged.",
    },
    {
      question: "Will on-the-spot registration be available?",
      answer:
        "No, all participants must register in advance to secure their spot.",
    },
  ];

  useEffect(() => setShowParticles(true), []);

  const handleModalOpen = (card: CardData, cardKey: number) => {
    setModalData(card);
    setShowModal(true);
    setKeyData(cardKey);
  };

  const handleModalClose = () => {
    setTimeout(() => setShowModal(false), 300);
  };

  return (
    <div className="relative min-h-screen">
      {showParticles && (
        <div className="fixed inset-0 w-full min-h-screen pointer-events-none z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      )}

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="relative z-10 pt-20">
        <Hero
          sub={sub}
          title="HACKOTSAV"
          date="11-22"
          timer={false}
          text="HACKOTSAV"
          btns={[{ title: "Register", href: "" }]}
        />
      </div>

      <div className="px-5">
        <About
          event="HACKOTSAV"
          descripation="Techotsav 2025 presents an adrenaline-fueled hackathon where creativity meets problem-solving. Over two days, participants will tackle real-world challenges in domains like AI, Cybersecurity, IoT, and Cloud Computing. Guided by expert mentors, teams will brainstorm, develop, and present groundbreaking solutions, competing for exciting prizes and recognition. Whether you're a seasoned coder or a tech enthusiast, this hackathon is your stage to build, innovate, and disrupt."
          imgURL="/imgs/hackathon-poster.png"
        />
        <Dates />
        <hr />
        <br />
        <Prizes />
        <br />
        < hr />
        <br />
        <h1 className="text-5xl text-center lg:pt-9 text-shadow-2">Problem Statements</h1>
        <div className="flex flex-wrap lg:gap-6 px-2 py-5 justify-center align-center">
          {cardData.map((card, index) => (
            <ThreeDCard
              key={index}
              {...card}
              cardKey={index}
              buttonText="View"
              onClick={() => handleModalOpen(card, index)}
            />
          ))}
        </div>
        <Faq qna={hackathonData} />
      </div>

      <AnimatePresence>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={handleModalClose}
            data={modalData}
            cardKey={keyData}
          />
        )}
      </AnimatePresence>

      <br />
      <hr />
      <br />
      <Footer />
      <br />
      <hr />
      <br />
    </div>
  );
}
