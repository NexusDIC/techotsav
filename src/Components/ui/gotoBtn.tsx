import { div } from 'framer-motion/client';
import React from 'react';

interface ButtonProps {
    title: string;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ title, href }) => {
  return (
    <div><a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="relative inline-block px-4 py-2 border-2 border-[#ffffff] text-[#ffffff] text-lg uppercase tracking-wide font-medium overflow-hidden transition-all duration-700 ease-out hover:text-black group"
  >
    <span className="absolute w-0 h-[500%] bg-[#ffffff] top-1/2 left-1/2 origin-center rotate-[45deg] translate-x-[-50%] translate-y-[-50%] transition-all duration-700 ease-out group-hover:w-[105%]" />
    <span className="relative z-10">{title}</span>
  </a></div>
  );
};
export default Button;