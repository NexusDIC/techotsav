import Image from "next/image";

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
    <div className="flex justify-around  bg-white/10 backdrop-blur-md  shadow-lg">
      {/* Glassmorphism effect */}
      <div className="logo p-5">
        <Image src="/logo.png" alt="Logo" height={50} width={200} />
      </div>
      <div className="links flex justify-center space-x-5 p-5 pt-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-amber-200 text-white font-semibold"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
