import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaCodepen, FaFigma, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] bg-[#121212] text-white z-10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Logo + Text */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Brand/logonaim.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <span className="text-sm text-gray-400">
            Designed & Built by Naim Jasmi
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-xl">
          <Link href="https://www.linkedin.com/in/mohamad-naim-1781832a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-500 transition duration-200" />
          </Link>
          <Link href="https://www.figma.com/@naimjasmi" target="_blank" rel="noopener noreferrer" aria-label="Figma">
            <FaFigma className="hover:text-pink-400 transition duration-200" />
          </Link>
          <Link href="https://codepen.io/naimjasmi" target="_blank" rel="noopener noreferrer" aria-label="CodePen">
            <FaCodepen className="hover:text-gray-400 transition duration-200" />
          </Link>
          <Link href="https://github.com/naimjasmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-300 transition duration-200" />
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;