"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  interface NavLink {
    name: string;
    href: string;
  }

  const [isOpen, setIsOpen] = useState(false);

  const links: NavLink[] = [
    { name: "About", href: "#about" },
    { name: " Hackotsav", href: "/hackathon" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Community Partners", href: "#compats" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/10 backdrop-blur-md shadow-lg ">
      <div className="flex justify-between items-center p-5 md:px-10">
        {/* Logo */}
        <div>
          <Link href="">
            <Image src="/imgs/logo.png" alt="Logo" height={50} width={200} />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-amber-200 text-white font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/80 py-5 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-semibold hover:text-amber-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
