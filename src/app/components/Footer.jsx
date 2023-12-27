import React from "react";
import Image from "next/image";
import Link from "next/link";
import MailIcon from '../../../public/loghi/bx-mail-send.svg';

const Footer = () => {
  return (
    <footer className="footer  z-10   text-white font-sans bg-black py-4 md:py-6">
      <div className="container p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className=" mb-2 font-sans">Tutti i diritti riservati.</p>
          <p className=" font-sans">Created By <Link href='https://www.linkedin.com/in/ciro-moscarella-05339024a/'><em>Moci.</em></Link></p>
        </div>
        <div className="flex justify-center md:justify-end">
          {/* Altri elementi o link, se necessario */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
