"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'



const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Servizi",
    path: "#servizi",
  },
  {
    title: "Subentri/Autoletture",
    path: "#autoletture",
  },
  {
    title: "Contatti",
    path: "#contact",
  },

];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-black  top-0 left-0 right-0 z-10 
      text-center shadow-xl'">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
        href={"#home"}
        className="text-2xl md:text-5xl text-black font-semibold">
            <Image src={"/image/logob.png"} alt="logo" width={150} height={150} ></Image>
            </Link>
            <div className=" mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex item-center px-3 py-2    rounded-md border border-cyan-400 text-slate-200 hover:text-white hover:border-cyan-500"
                    >
                        O
                    </button>
                    ) : (
                        <button
                          onClick={() => setNavbarOpen(false)}
                          className="flex items-center px-3 py-2 border border-cyan-400  rounded-md  text-slate-200 hover:text-white hover:border-cyan-500"
                        >
                          X
                        </button>
                        
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
</nav>
  );
};

export default Navbar;

