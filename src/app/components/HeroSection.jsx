"use client"
// src/app/components/HeroSection.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ResumeModal from './ResumeModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="text-primary-400 text-sm sm:text-base tracking-widest uppercase mb-3">
            Frontend developer &middot; UI/UX
          </p>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m <br />
            </span>
            <TypeAnimation
              sequence={[
                'Naim Jasmi',
                3000,
                'a UI/UX designer',
                3000,
                'a web developer',
                3000,
                'a React & Next.js developer',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8 max-w-xl">
            I build responsive, user-friendly web apps and the interfaces behind them,
            moving between Figma and code to turn ideas into products that work smoothly
            across devices.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <button
              onClick={openModal}
              className="group px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white transition-transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2 bg-[#121212] group-hover:bg-slate-800 rounded-full px-6 py-3 transition-colors">
                Download CV
              </span>
            </button>
            <Link
              href="/#projects"
              className="px-6 py-3 w-full sm:w-fit text-center rounded-full border border-[#33353F] text-[#ADB7BE] hover:text-white hover:border-white transition-colors"
            >
              View my work
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-8"
        >
          <div className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden">
              <Image
                src="/images/naimanimate.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <ResumeModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        resumeUrl="/RESUME MOHAMAD NAIM BIN JASMI.pdf"
      />
    </section>
  );
};

export default HeroSection;