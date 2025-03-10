"use client";

import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Schedule from "@/Components/Schedule";
import Speakers from "@/Components/Speaker";
import Sponsors from "@/Components/Sponsors";
import ComPats from "@/Components/ComPats";
import Faq from "@/Components/Faq";
import Navbar from "@/Components/Navbar";
import ThreeDCard from "@/Components/ThreeDCard";
import Modal from "@/Components/Modal"; // Corrected import path
import { SparklesCore } from "@/Components/ui/sparkles";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Hackotsav() {
  const [showParticles, setShowParticles] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<CardData>({} as CardData);
  const [keyData, setKeyData] = useState(0);

  interface CardData {
    title: string;
    description: string;
    image: string;
    linkText: string;
    linkUrl: string;
  }

  const cardData: CardData[] = [
    { title: "WebDev Mastery", description: "Innovate and explore the mysteries of development.", image: "/imgs/logo.png", linkText: "Start Now →", linkUrl: "https://hackmaster.com" },
    { title: "Innovate with AI", description: "Explore the latest advancements in AI.", image: "/imgs/logo.png", linkText: "Learn More →", linkUrl: "https://ai-innovations.com" },
    { title: "Web3 Revolution", description: "Unlock the potential of decentralized tech.", image: "/imgs/logo.png", linkText: "Discover →", linkUrl: "https://web3future.com" },
    { title: "Cybersecurity Insights", description: "Master the art of digital protection.", image: "/imgs/logo.png", linkText: "Read More →", linkUrl: "https://cybersecuritytoday.com" },
    { title: "Open Innovations", description: "Bring your very own innovations onto the plate.", image: "/imgs/logo.png", linkText: "Explore →", linkUrl: "https://cloudtech.com" },
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
        <Hero title="HACKOTSAV" />
        <div className="px-5">
          <About />
          <Schedule />
          <Speakers />
          <div className="relative z-10 flex justify-center items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 max-w-7xl w-full">
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
          </div>

          <Sponsors />
          <ComPats />
          <Faq />
        </div>
      </div>

      {/* Modal Component */}
      <AnimatePresence>
        {showModal && <Modal isOpen={showModal} onClose={handleModalClose} data={modalData} cardKey={keyData} />}
      </AnimatePresence>
    </div>
  );
}
