"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#F8FAF7]" id="home">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 min-w-0">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm tracking-wider uppercase"
            >
              Eat Smart <span className="text-gray-400 mx-1">•</span> Live Well
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary"
            >
              Achieve Your Dream <br className="hidden sm:block" />
              <span className="sm:inline">Body with Our </span><span className="text-secondary">Diet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your health with customised nutrition, intelligent tools, and
              trusted expert advice tailored to your unique lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="bg-secondary cursor-pointer hover:bg-orange-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-orange-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[48px] touch-manipulation"
              >
                Join Now
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 relative order-1 lg:order-2"
          >
            <div className="relative z-10 w-full max-w-[800px] mx-auto min-w-0">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="Healthy Eating - InteliDiet"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
