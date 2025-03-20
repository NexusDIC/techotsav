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
//     profileLink: "#",
//     teamLink: null, // Main team lead does not have a "View My Team" option
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     role: "Technical Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#",
//     teamLink: "/technical-team",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     role: "Design Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#",
//     teamLink: "/design-team",
//   },
//   {
//     id: 4,
//     name: "Alice Brown",
//     role: "Marketing Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#",
//     teamLink: "/marketing-team",
//   },
//   {
//     id: 5,
//     name: "Bob Johnson",
//     role: "Operations Team Lead",
//     imgSrc: "/imgs/logo.png",
//     linkedIn: "/imgs/linkedin.png",
//     profileLink: "#",
//     teamLink: "/operations-team",
//   },
// ];

// function Team() {
//   // The first member is the main Team Lead
//   const mainLead = teamMembers[0];
//   // The rest of the team leads for the row below
//   const otherLeads = teamMembers.slice(1);

//   return (
//     <div className="flex flex-col items-center space-y-12">
//       {/* Main Team Lead Card */}
//       <motion.div
//         id="compats"
//         initial={{ y: 50, opacity: 0, scale: 0.8 }}
//         whileInView={{ y: 0, opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//         className="hover:scale-105 ease-in-out"
//       >
//         <Card className="w-full max-w-md border-2 border-gray-300 shadow-xl rounded-3xl">
//           <CardContent className="flex flex-col items-center justify-center p-6 space-y-2 text-center">
//             <Image
//               src={mainLead.imgSrc}
//               alt={mainLead.role}
//               width={250}
//               height={250}
//               className="w-[220px] h-[220px] object-cover rounded-lg"
//             />
//             <div className="flex items-center space-x-2">
//               {mainLead.role}
//               <Image
//                 src={mainLead.linkedIn}
//                 alt="LinkedIn"
//                 width={24}
//                 height={24}
//                 className="w-8 h-8 ml-2"
//               />
//             </div>
//             <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">
//               {mainLead.name}
//             </span>
//             <a href={mainLead.profileLink} className="text-blue-500 hover:underline">
//               View Profile
//             </a>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Other Team Leads Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {otherLeads.map((member, index) => (
//           <motion.div
//             key={member.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: 0.1 * index }}
//             className="hover:scale-105 ease-in-out"
//           >
//             <Card className="w-full max-w-xs border-2 border-gray-300 shadow-lg rounded-3xl">
//               <CardContent className="flex flex-col items-center p-6 space-y-2 text-center">
//                 <Image
//                   src={member.imgSrc}
//                   alt={member.role}
//                   width={200}
//                   height={200}
//                   className="w-[180px] h-[180px] object-cover rounded-lg"
//                 />
//                 <div className="flex items-center space-x-2">
//                   {member.role}
//                   <Image
//                     src={member.linkedIn}
//                     alt="LinkedIn"
//                     width={24}
//                     height={24}
//                     className="w-8 h-8 ml-2"
//                   />
//                 </div>
//                 <span className="text-[16px] font-medium">{member.name}</span>
//                 <a href={member.profileLink} className="text-blue-500 hover:underline">
//                   View Profile
//                 </a>
//                 {member.teamLink && (
//                   <a href={member.teamLink} className="text-green-500 hover:underline">
//                     View My Team
//                   </a>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Team;
