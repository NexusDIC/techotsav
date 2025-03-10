import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center bg-neutral text-neutral-content p-10 gap-6">
      <aside className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <img src="imgs/logo.png" alt="Company Logo" width="250" height="250" />
        <p>
          Tech It to the NEXT LEVEL!
          <br />
          Providing you with the best tech experience.
        </p>
      </aside>

      <nav className="text-center md:text-left">
        <h6 className="footer-title pb-2 font-bold">Social</h6>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="https://chat.whatsapp.com/GuafCx4t7jR9POiguxHII3" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              width="24"
              height="24"
              className="invert"
            />
          </a>
          <a href="https://www.instagram.com/techotsav_ghrce" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png"
              alt="Instagram"
              width="24"
              height="24"
              className="invert"
            />
          </a>
          <a href="https://discord.gg/sNsBwMTsQj" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
              alt="Discord"
              width="24"
              height="24"
              className="invert"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
