// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "./ui/card";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Mr. Archit Chandak",
//     role: "Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#", // LinkedIn URL for the main team lead
//     teamLink: null, // Main team lead does not have a "View My Team" option
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     role: "Technical Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#", // LinkedIn URL for John Doe
//     teamLink: "/technical-team",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     role: "Design Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#", // LinkedIn URL for Jane Smith
//     teamLink: "/design-team",
//   },
//   {
//     id: 4,
//     name: "Alice Brown",
//     role: "Marketing Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#", // LinkedIn URL for Alice Brown
//     teamLink: "/marketing-team",
//   },
//   {
//     id: 5,
//     name: "Bob Johnson",
//     role: "Operations Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#", // LinkedIn URL for Bob Johnson
//     teamLink: "/operations-team",
//   },
// ];

// function Team() {

//   const mainLead = teamMembers[0];

//   const otherLeads = teamMembers.slice(1);

//   return (
//     <div className="min-h-screen py-12 px-4">
//       <h1 className="text-5xl text-center mb-8 font-bold text-shadow-2">Our Team</h1>
//       <div className="container mx-auto flex flex-col items-center space-y-12">
//         {/* Main Team Lead Card */}
//         <motion.div
//           id="compats"
//           initial={{ y: 50, opacity: 0, scale: 0.8 }}
//           whileInView={{ y: 0, opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="hover:scale-105 ease-in-out"
//         >
//           <Card className="w-full max-w-md border-2 border-gray-300 shadow-xl rounded-3xl ">
//             <CardContent className="flex flex-col items-center justify-center p-6 space-y-2 text-center">
//               <Image
//                 src={mainLead.imgSrc}
//                 alt={mainLead.role}
//                 width={250}
//                 height={250}
//                 className="w-[220px] h-[220px] object-cover rounded-lg"
//               />
//               {/* Name with LinkedIn icon */}
//               <div className="flex items-center space-x-2">
//                 <a
//                   href={mainLead.profileLink}
//                   className="text-white text-[18px] font-bold hover:underline"
//                 >
//                   {mainLead.name}
//                 </a>
//                 <a href={mainLead.profileLink}>
//                   <Image
//                     src={mainLead.linkedIn}
//                     alt="LinkedIn"
//                     width={24}
//                     height={24}
//                     className="w-6 h-6"
//                   />
//                 </a>
//               </div>
//               <span className="text-gray-300 text-[16px]">
//                 {mainLead.role}
//               </span>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Other Team Leads Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
//           {otherLeads.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.1 * index }}
//               className="hover:scale-105 ease-in-out"
//             >
//               <Card className="w-full max-w-xs border-2 border-gray-300 shadow-lg rounded-3xl ">
//                 <CardContent className="flex flex-col items-center p-6 space-y-2 text-center">
//                   <Image
//                     src={member.imgSrc}
//                     alt={member.role}
//                     width={200}
//                     height={200}
//                     className="w-[180px] h-[180px] object-cover rounded-lg"
//                   />
//                   {/* Name with LinkedIn icon */}
//                   <div className="flex items-center space-x-2">
//                     <a
//                       href={member.profileLink}
//                       className="text-white text-[16px] font-bold hover:underline"
//                     >
//                       {member.name}
//                     </a>
//                     <a href={member.profileLink}>
//                       <Image
//                         src={member.linkedIn}
//                         alt="LinkedIn"
//                         width={24}
//                         height={24}
//                         className="w-6 h-6"
//                       />
//                     </a>
//                   </div>
//                   <span className="text-gray-300 text-[14px]">
//                     {member.role}
//                   </span>
//                   {/* Conditionally show "View My Team" if available */}
//                   {member.teamLink && (
//                     <a
//                       href={member.teamLink}
//                       className="mt-2 text-green-400 hover:underline"
//                     >
//                       View My Team
//                     </a>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;
