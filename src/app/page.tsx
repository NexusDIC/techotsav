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
import Footer from "@/Components/Footer";
import Sponsors from "@/Components/Sponsors";

export default function Home() {
  const techData = [
    {
      question: "Who can participate in Techotsav?",
      answer:
        "Techotsav is open to students, faculty, industry professionals, and tech enthusiasts from various colleges and companies.",
    },
    {
      question: "Who can attend Techotsav?",
      answer:
        "Techotsav is open to students, faculty, industry professionals, and tech enthusiasts from various colleges and companies.",
    },
    {
      question: "Will I receive a certificate for participation?",
      answer:
        "Yes, all registered participants will receive a certificate of participation.",
    },
    {
      question: "Will on-the-spot registration be available?",
      answer:
        "No, all participants must register in advance to secure their spot.",
    },
    {
      question: "What are the perks of attending Techotsav?",
      answer:
        "Perks include networking opportunities, mentorship from industry leaders, exciting competitions, prizes, swags, and learning sessions.",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "Bring your college ID, registration confirmation, a notepad/laptop for workshops, and lots of enthusiasm!",
    },
    {
      question: "Can I participate in multiple competitions?",
      answer:
        "Yes! You can register for multiple competitions, provided there are no scheduling conflicts.",
    },
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
      <div className="relative z-50">
        <Navbar />

        <Hero
          sub={sub}
          title="TECHOTSAV 2.0"
          date="21-22"
          timer={true}
          text="Hackotsav"
          btns={[
            { title: "Register", href: "https://forms.gle/GrmBmRCRvog8x67R9" },
            /* { title: "Explore Hackathon", href: "/hackathon" }, */
          ]}
        />
        <div className="px-5">
          <br />
          <About
            event="TECHOTSAV 2.0"
            descripation=" Techotsav is Nagpur's premier tech fest, bridging the gap between
          students and industry professionals through innovation, learning, and
          collaboration. Attendees dive deep into programming languages, AI,
          machine learning, and industry trends, gaining real-world knowledge
          and practical skills to thrive in the tech ecosystem. Join us for an
          unforgettable experience filled with workshops, discussions, and
          hands-on projects."
            imgURL="/imgs/photo.png"
          />

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
          <Faq qna={techData} />
          <br />
          <hr />
          <br />
          <Footer />
          <br />
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
}
