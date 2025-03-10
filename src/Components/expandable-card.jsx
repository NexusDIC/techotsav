/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";


export default function ExpandableCard({ cardKey }) {
  const [active, setActive] = useState(null)
  const ref = useRef(null);


  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active[cardKey] === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
         {active && typeof active === "object" ? (
                  <div className="fixed inset-0  grid place-items-center z-[100]">
                    <motion.button
                      key={`button-${active.title}-${id}`}
                      layout
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.05,
                        },
                      }}
                      className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                      onClick={() => setActive(null)}
                    >
                      <CloseIcon />
                    </motion.button>
                    <motion.div
                      layoutId={`card-${active.title}-${id}`}
                      ref={ref}
                      className="max-w-[500px] px-5 py-3 md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                    >
                     
        
                      <div>
                        <div className="flex lg:gap-3 justify-between items-start p-4">
                          <div className="flex flex-col lg:gap-3">
                            <motion.h2
                              layoutId={`title-${active.title}-${id}`}
                              className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl"
                            >
                              {active.title}
                            </motion.h2>
                            <motion.p
                              layoutId={`description-${active.description}-${id}`}
                              className="text-neutral-600 dark:text-neutral-400"
                            >
                              {active.description}
                            </motion.p>
                          </div>
        
                          {/* <motion.a
                            layoutId={`button-${active.title}-${id}`}
                            href={active.ctaLink}
                            target="_blank"
                            className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                          >
                            View
                          </motion.a> */}
                        </div>
                        <div className="pt-4 relative px-4">
                          <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                          >
                            {typeof active.content === "function"
                              ? active.content()
                              : active.content}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : null}
      </AnimatePresence>

       <ul className="max-w-2xl mx-auto w-full gap-4">
              {cards[cardKey].map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={`card-${card.title}-${id}`}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                >
                  <div className="flex gap-4 flex-col md:flex-row ">
                   
                    <div className="">
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                  >
                    View
                  </motion.button>
                </motion.div>
              ))}
            </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};





const cards = [
  //Web and App Dev
  [ 
  {
    description: "Serverless P2P Chat Application with End-to-End Encryption",
    title: "WebRTC Secure Chat",
    ctaLink: "https://github.com",
    content: () => {
      return (
        <p>
          Build a peer-to-peer (P2P) chat application using WebRTC that works without a centralized server. 
          It should support real-time messaging and file sharing with end-to-end encryption to ensure user privacy. 
          This solution eliminates reliance on intermediaries, enhancing security and speed.
        </p>
      );
    },
  },
  {
    description: "Make your own Front-End Web Dev Framework",
    title: "Custom Frontend Framework",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Develop your own front-end web development framework tailored for performance, modularity, and ease of use. 
          Focus on custom component rendering, state management, and efficient DOM manipulation to create a 
          lightweight yet powerful framework that simplifies modern web development.
        </p>
      );
    },
  },
  {
    description: "Offline-First Web Application for Remote Work Collaboration",
    title: "Collaborative Document Editor",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Create a document collaboration tool (like Google Docs) that works offline-first and syncs when back online. 
          Implement conflict resolution mechanisms, real-time editing, and intuitive UI/UX for seamless team collaboration.
        </p>
      );
    },
  },
  {
    description: "Smart Expense Tracker with AI Categorization",
    title: "AI-Powered Expense Tracker",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Build an app that analyzes user spending patterns by automatically categorizing expenses from transaction texts 
          (e.g., bank SMS, receipts). Use AI to predict spending behavior, provide insights, and suggest budget plans.
        </p>
      );
    },
  },
  {
    description: "Mess Management System",
    title: "Comprehensive Mess Management",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Develop a mess management system that includes payment reminders, attendance tracking, and meal scheduling. 
          Enhance efficiency with automated reports, user-friendly dashboards, and integration with payment gateways.
        </p>
      );
    },
  },
],
//AIML
[ 
  {
    description: "Handwritten Notes Digitizer",
    title: "AI-Powered Note Converter",
    ctaLink: "https://github.com",
    content: () => {
      return (
        <p>
          Create a tool that converts handwritten notes into structured digital text using OCR and NLP. 
          Additionally, implement a feature that allows digital text to be converted into a handwritten-like format.
        </p>
      );
    },
  },
  {
    description: "AI-Powered Code Auto-Fixer",
    title: "Smart Debugging Assistant",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Develop an AI system that detects bugs in code and suggests instant fixes. 
          It should analyze syntax, logic, and performance issues while providing real-time debugging assistance.
        </p>
      );
    },
  },
  {
    description: "RAG-Based Legal Chatbot",
    title: "AI Legal Expert",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Build a RAG-based chatbot that has knowledge of all major legal cases and regulations. 
          It should provide fact-based legal assistance and answer user queries with verified information.
        </p>
      );
    },
  },
  {
    description: "Real-World Pokedex: AI-Powered Object Detection & Info Scanner",
    title: "AI Object Identifier",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Create an AI-powered app that can identify real-world objects such as plants, animals, products, and landmarks. 
          Provide users with detailed descriptions, fun facts, and additional insights instantly.
        </p>
      );
    },
  },
  {
    description: "Snake Game with AI: Build & Train an RL Agent",
    title: "AI-Powered Snake Game",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Develop a classic Snake game and train a reinforcement learning (RL) AI agent to play it efficiently. 
          Experiment with different RL algorithms and compare their performance.
        </p>
      );
    },
  }],
  //WEB3 and Blockchain
  [
    {
      description: "Design a blockchain system to securely store and verify academic records.",
      title: "Blockchain Academic Records",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Use smart contracts to automate record verification processes, ensuring transparency and authenticity.
        </p>
      ),
    },
    {
      description: "Decentralized platform for online learning with NFT-based courses.",
      title: "NFT Learning Marketplace",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Students can buy, sell, and trade educational content using blockchain technology for secure ownership.
        </p>
      ),
    },
    {
      description: "NLP chatbot for decentralized platforms, enhancing user interaction.",
      title: "Blockchain NLP Chatbot",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Uses NLP for chatbot development and blockchain for secure data storage, improving decentralized support.
        </p>
      ),
    },
    {
      description: "Blockchain-based identity verification to protect against phishing attacks.",
      title: "Decentralized Identity Verification",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Implements smart contracts and authentication methods to enhance security in Web3 environments.
        </p>
      ),
    },
    {
      description: "Decentralized education platform with AI-assisted personalized learning.",
      title: "AI-Driven Learning in Web3",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Implements AI for adaptive learning paths and blockchain for secure data storage, enhancing education.
        </p>
      ),
    },
  ],
  //Cyber
  [
    {
      description: "Decoding IP and VoIP intelligence for tracking virtual numbers.",
      title: "Decoding Virtual Numbers",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Develop a powerful tool to trace the origin of virtual numbers used in cyber crimes, especially in cases of cyberbullying and fraud. 
          The system should be capable of analyzing SIP trunking packets, identifying SIP layer services on open ports, and tracking VoIP calls. 
          It should also extract key details such as the country of origin, associated websites, and user information linked to the number. 
          Additionally, the solution must include a user-friendly interface for law enforcement and cybersecurity professionals to conduct real-time lookups.
        </p>
      ),
    },
    {
      description: "OSINT platform for gathering intelligence across multiple sources.",
      title: "OSINT Analysis Platform",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Build an advanced Open Source Intelligence (OSINT) platform that can gather intelligence from various sources, including the surface web, deep web, and dark web. 
          The system should allow searches based on a unique identifier such as an email ID, phone number, or username. 
          It should extract information from public records, social media platforms, leaked databases, and online forums, then correlate this data to generate a comprehensive intelligence report. 
          Integration of facial recognition, social media matching, and predictive analytics will enhance its capabilities. 
          The platform should also support alerting and ticketing systems to notify law enforcement about potential threats in real-time.
        </p>
      ),
    },
    {
      description: "Static analysis framework for detecting Android vulnerabilities.",
      title: "Android App Security Analysis",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Design a static analysis framework to detect vulnerabilities in Android applications before they reach production. 
          This framework should scan application code for security flaws such as insecure permissions, hardcoded credentials, weak cryptographic implementations, and potential data leaks. 
          The system must offer recommendations for secure coding practices and provide detailed reports highlighting security issues. 
          Additionally, it should integrate seamlessly with existing CI/CD pipelines to help developers identify and mitigate risks early in the development cycle, thereby improving overall application security.
        </p>
      ),
    },
    {
      description: "AI-driven phishing detection system for real-time cybersecurity.",
      title: "AI-Powered Phishing Detection",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          Create an AI-powered phishing detection system capable of identifying malicious emails, messages, and websites in real-time. 
          This solution should leverage natural language processing (NLP) to analyze text patterns, machine learning models to detect obfuscated links, and metadata analysis to verify sender authenticity using SPF/DKIM checks. 
          The system should be adaptive, continuously learning from user reports to improve accuracy and reduce false positives. 
          The final solution must be scalable, lightweight, and capable of integrating with email clients or browsers via an API or extension, effectively safeguarding users from identity theft and financial fraud.
        </p>
      ),
    },
  ],
  //Open
  [
    {
      description: "Unleash your creativity and build anything innovative!",
      title: "Open Innovation Challenge",
      ctaLink: "https://github.com",
      content: () => (
        <p>
          This is your chance to think outside the box and create something groundbreaking! Whether it's an AI-driven application, a revolutionary web platform, a game-changing hardware prototype, or a new approach to sustainability—there are no limits. 
          Choose a problem you're passionate about, experiment with new technologies, and bring your vision to life. The only rule? Push the boundaries of what's possible!
        </p>
      ),
    }

  ]
];