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
// import Link from "next/link";
import { SparklesCore } from "@/Components/ui/sparkles";

export default function Home() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setShowParticles(true);
  }, []);

  return (
    <div>
      {showParticles && (
        <div className="w-full absolute inset-0 h-screen">
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
      <Navbar />
      <Hero title="TECHOTSAV2.0" />
      <div className="px-5">
        <br />
        <About />
        {/* <div className="text-center my-10">
        <Link href="/hackathon">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Go to Hackotsav 🚀
          </button>
        </Link>
      </div> */}
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
  );
}
