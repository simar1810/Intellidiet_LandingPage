"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      className="bg-primary py-16 sm:py-20 md:py-24 overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 min-w-0">
          {/* Image Side - full client photo, no cropping */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 w-full relative flex justify-center"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md  flex items-center justify-center bg-primary/20 min-w-0">
              <img
                src="/images/kavita-mam.jpeg"
                alt="Dr. Kavita - InteliDiet Dietitian"
                className="w-full h-full object-contain  object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30 pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 w-full text-white flex flex-col"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              About <span className="text-secondary">Dr. Kavita</span>
            </h2>

            <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-justify">
              Dr. Kavita is a passionate and certified dietitian dedicated to
              transforming lives through personalized nutrition guidance. With
              years of experience, she helps clients achieve sustainable health
              goals and build long-term healthy habits.
            </p>

            <p className="text-white/80 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed text-justify">
              Her approach focuses on balanced eating, practical lifestyle
              changes, and empowering individuals with knowledge to take control
              of their well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
