import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-gradient-to-b from-zinc-400 via-zinc-200 to-zinc-400">
      <div className="container p-12 flex justify-between">

        <Image src="/image/logo.png" width={200} height={30} alt='logo' className="md:pr-2"/>

          <div className="flex flex-col items-right place-items-end">
        <p className="text-black mb-2 font-sans">Tutti i diritti riservati.</p>
        <p className="text-black font-sans">Created By <Link href='https://www.linkedin.com/in/ciro-moscarella-05339024a/'><em>Moci.</em></Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;