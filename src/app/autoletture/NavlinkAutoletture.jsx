// components/NavLink.jsx
import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title, active }) => {
  return (
    <Link href={href} passHref>
      <div className="block py-2 pl-3 pr-4 text-white font-sans sm:text-xl rounded md:p-0 hover:bg-white hover:text-black hover:font-bold transition-all " >
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
