"use client";

import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Speakers from "@/Components/Speaker";
import ComPats from "@/Components/ComPats";
import Faq from "@/Components/Faq";
import Navbar from "../Components/Navbar";
import { SparklesCore } from "@/Components/ui/sparkles";
import Button from "@/Components/ui/gotoBtn";
import Footer from "@/Components/Footer";

export default function Home() {

  const tech_data = [
    {
      question: "Who can attend Techotsav?",
      answer: "Techotsav is open to students, faculty, industry professionals, and tech enthusiasts from various colleges and companies."
    },
    {
      question: "Will I receive a certificate for participation?",
      answer: "Yes, all registered participants will receive a certificate of participation."
    },
    {
      question: "Will on-the-spot registration be available?",
      answer: "No, all participants must register in advance to secure their spot."
    },
    {
      question: "What are the perks of attending Techotsav?",
      answer: "Perks include networking opportunities, mentorship from industry leaders, exciting competitions, prizes, swags, and learning sessions."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your college ID, registration confirmation, a notepad/laptop for workshops, and lots of enthusiasm!"
    },
    {
      question: "Can I participate in multiple competitions?",
      answer: "Yes! You can register for multiple competitions, provided there are no scheduling conflicts."
    }
  ];

  

  const [showParticles, setShowParticles] = useState(false);
  const sub = `Techotsav is back with its second rendition. Get ready to experience
            technology like never before. Multiple workshops, panel discussions,
            and a hackathon to satisfy your technical needs—we've got
            everything to quench your brainly thirst.`;

  useEffect(() => {
    setShowParticles(true);
  }, []);

  return (
    <div className="">
      {showParticles && (
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-dvh"
            particleColor="#FFFFFF"
          />
        </div>
      )}
      <div className="relative z-10">
        <Navbar />
        <Hero
          title="TECHOTSAV2.0"
          sub={sub}
          date="21-22"
          timer={true}
          text="Techotsav 2.0"
        />
        <div className="px-5">
          <br />
          <About event="TECHOTSAV 2.0" />
          <hr />
          <br />
          <div className="flex justify-center pb-5">
            <Button title="🚀Head to Hackotsav" href="/hackathon" />
          </div>
          <hr />
          <br />
          <Schedule />
          <hr />
          <br />
          <Speakers />
          <hr />
          <br />
          {/* <Sponsors /> */}
          {/* <hr />
          <br /> */}
          <ComPats />
          <br />
          <hr />
          <br />
          <Faq qna={tech_data}/>
          <br />
          <hr />
          <br />
          <Footer/>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
}
