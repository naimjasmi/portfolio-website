"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-colors duration-300 ${
                scrolled
                    ? "bg-[#121212]/90 backdrop-blur-sm border-b border-[#33353F]"
                    : "bg-[#121212] border-b border-transparent"
            }`}
        >
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link href={"/"} className="transition-opacity hover:opacity-80">
                    <Image
                        src="/images/Brand/logonaim.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                    />
                </Link>
                <Link
                    href="mailto:naimmohamad068@gmail.com"
                    className="px-5 py-2 rounded-full border border-[#33353F] text-[#ADB7BE] text-sm hover:text-white hover:border-white transition-colors"
                >
                    Let&apos;s talk
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;