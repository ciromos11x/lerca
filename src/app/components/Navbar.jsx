import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import Open from '../../../public/loghi/open.svg'
import Close from '../../../public/loghi/close.svg'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Autoletture',
    path: '/autoletture',
  },
  {
    title: 'Subentri',
    path: '/subentri',
  },
  {
    title: 'Contatti',
    path: '#contact',
  },
];

const Navbar = () => {
  const router = useRouter;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-gray-900 top-0 left-0 right-0 z-10 text-center shadow-xl">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" passHref className="text-2xl md:text-5xl text-black font-semibold">
          <Image src="/image/logob.png" alt="logo" width={150} height={150} />
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex item-center px-3 py-2  border-cyan-400 text-slate-200 hover:text-white hover:border-cyan-500"
          >
            {navbarOpen ? (
              <Image src={Close} alt='closemenu' />
            ) : (
              <Image src={Open} alt='openmenu' />
            )}
          </button>
        </div>
        <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;

