"use client";
import React from "react";
import { motion } from "framer-motion";

const VideoCTA = () => {
  return (
    <section className="relative min-h-[380px] sm:min-h-[450px] md:min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video src="/videos/section.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-4 md:px-6"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight italic">
          Transform Your Health With <br className="hidden sm:block" />
          <span className="inline-block mt-2 sm:mt-4" />
          <span className="flex flex-col sm:flex-row items-center justify-center text-[#92BC34] gap-2 sm:gap-3 md:gap-5 mt-2 sm:mt-4">
            <img src="/images/women-health.webp" className="w-20 h-auto sm:w-28 md:w-36 object-contain" alt="" />
            <span className="text-center">Dietitian</span>
            <img src="https://logos.textgiraffe.com/logos/logo-name/Kavita-designstyle-smoothie-m.png" className="w-28 h-auto sm:w-40 md:w-56 lg:w-72 object-contain" alt="Kavita" />
          </span>
        </h2>
      </motion.div>

      <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-20 sm:opacity-30 transform rotate-45 pointer-events-none">
        <img src="https://cdn-icons-png.flaticon.com/512/2909/2909808.png" alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default VideoCTA;
