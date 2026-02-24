"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Smartphone } from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, 80]);
  const scale = useTransform(scrollY, [0, 100], [1, 1.08]);
  const smoothY = useSpring(y, { stiffness: 50, damping: 15, mass: 0.5 });
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 15, mass: 0.5 });

  return (
    <section
      className="relative pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#F8FAF7]"
      id="home"
      style={{
        backgroundImage: "url('/bg-frame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 min-w-0">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1 px-4 py-2 bg-white/10 text-white rounded-full font-bold text-sm tracking-wider uppercase"
            >
              Eat Smart <span className="text-white/60 mx-1">•</span> Live Well
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              Achieve Your Dream <br className="hidden sm:block" />
              <span className="sm:inline">Body with Our </span>
              <span className="text-secondary">Diet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your health with customised nutrition, intelligent
              tools, and trusted expert advice tailored to your unique
              lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="bg-secondary cursor-pointer hover:bg-orange-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-orange-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[48px] touch-manipulation"
              >
                Join Now
              </button>
              <button
                onClick={() => router.push("/app")}
                className="bg-white cursor-pointer hover:bg-gray-50 text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[48px] touch-manipulation flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Download App
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ y: smoothY }}
            className="lg:w-1/2 relative order-2 lg:order-2"
          >
            <div className="relative z-10 w-full max-w-[800px] mx-auto min-w-0">
              <div className="relative rounded-2xl overflow-hidden">
                <motion.div
                  style={{ scale: smoothScale }}
                  className="absolute inset-0 -z-10 blur-xl rounded-2xl"
                />
                <Image
                  src="/images/kavita-mam.png"
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
