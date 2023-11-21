import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white font-sans sm:text-xl  rounded md:p-0 hover:text-cyan-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;
