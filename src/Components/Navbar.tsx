import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  interface Link {
    name: string;
    href: string;
  }

  const links: Link[] = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Schedule",
      href: "#schedule",
    },
    {
      name: "Speakers",
      href: "#speakers",
    },
    {
      name: "Sponsors",
      href: "#sponsors",
    },
    {
      name: "Community Partners",
      href: "#compats",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <div className="sticky top-0 flex justify-around bg-white/10 backdrop-blur-md shadow-lg">
      {/* Glassmorphism effect */}
      <div className="logo p-5">
        <Link href="/">
          <Image src="/imgs/logo.png" alt="Logo" height={50} width={200} />
        </Link>
      </div>
      <div className="links flex justify-center space-x-5 p-5 pt-8">
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
    </div>
  );
};

export default Navbar;
