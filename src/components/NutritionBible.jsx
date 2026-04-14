"use client";
import React from "react";
import { motion } from "framer-motion";

const NutritionBible = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden relative" id="nutrition">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16 min-w-0">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative mt-6 lg:mt-10 w-full min-w-0"
          >
            <div className="relative z-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/images/kavita.png"
                alt="Nutrition"
                className="w-full h-auto object-cover"
              />
            </div>

                        {/* Small floating image with play button */}
                        {/* <div className="absolute bottom-0 left-10 w-64 h-48 rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-20 group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
                                alt="Recipe"
                                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                                    <Play fill="white" size={20} className="ml-1" />
                                </div>
                            </div>
                        </div> */}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6 sm:space-y-8 relative min-w-0"
          >
            <div className="space-y-4">
              <p className="text-[#54151B] font-bold tracking-widest uppercase text-sm">Intelligent</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Special Female Programs
              </h2>
                            <p className="text-gray-500 leading-relaxed">
                                Tailored programs designed specifically for women, focusing on health, fitness, and overall wellness to help achieve personal goals safely and effectively.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#f5ebe5] rounded-full flex items-center justify-center text-secondary">
                                    <img src="/images/pregnancy-icon.webp" alt="Meat Icon" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 text-lg">Post Pregnancy weight loss programs</h4>
                                    <p className="text-gray-500">Designed to help new mothers to safely lose weight and regain strength and proper weight after pregnancy.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#f5ebe5] rounded-full flex items-center justify-center text-secondary">
                                    <img src="/images/hormone-health.png" alt="Milk Icon" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 text-lg">Hormone health programs</h4>
                                    <p className="text-gray-500">Personalized programs designed to balance hormones naturally and improve overall health and well-being.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#f5ebe5] rounded-full flex items-center justify-center text-secondary">
                                    <img src="/images/women-nutri.png" alt="Milk Icon" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 text-lg">Women's Overall Nutrition Plan</h4>
                                    <p className="text-gray-500">Comprehensive nutrition plans designed to support women’s health, boost energy levels, and promote long-term wellness.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#f5ebe5] rounded-full flex items-center justify-center text-secondary">
                                    <img src="/images/weight-loss.png" alt="Milk Icon" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 text-lg">Weight Loss programs</h4>
                                    <p className="text-gray-500"> Customized weight loss programs designed to burn fat safely, boost metabolism, and support sustainable healthy results.</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="pt-4 flex items-center gap-6">
                            <button className="bg-[#54151B] hover:bg-[#7a1f2e] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg">
                                View Courses
                            </button>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary">Liam Oliver</span>
                                <span className="text-xs text-gray-400">Founder & CEO of Qetus</span>
                            </div>
                        </div> */}

                        {/* Decorative leaf on the right */}
                        <div className="absolute -top-10 right-0 w-32 h-32">
                            <img src="/images/leaf1.png" alt="Leaf" className="w-full h-full object-contain" />
                        </div>

                        {/* Decorative leaf on the right bottom */}
            <div className="absolute bottom-[-65px] right-0 w-40 h-40">
              <img src="/images/leaf2.png" alt="Leaf" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutritionBible;
