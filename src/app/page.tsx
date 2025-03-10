"use client";

import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Speakers from "@/Components/Speaker";
import Sponsors from "@/Components/Sponsors";
import ComPats from "@/Components/ComPats";
import Faq from "@/Components/Faq";
import Navbar from "../Components/Navbar";
import { SparklesCore } from "@/Components/ui/sparkles";
import Button from "@/Components/ui/gotoBtn";

export default function Home() {
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
          <div className="flex justify-center pb-7">
            <Button title="Hackotsav" href="/hackathon" />
          </div>
          <hr />
          <br />
          <Schedule />
          <hr />
          <br />
          <Speakers />
          <hr />
          <br />
          <Sponsors />
          <hr />
          <br />
          <ComPats />
          <br />
          <hr />
          <br />
          <Faq />
          <br />
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
}
