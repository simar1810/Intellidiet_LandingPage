"use client";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F0FDF4] rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] mx-2 sm:mx-4 md:mx-6 lg:mx-10 my-6 sm:my-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
            Why Work With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">

          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group p-5 sm:p-6 md:p-8 flex flex-col justify-between min-w-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                🌿
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                Experience 10+ yrs
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                                    With over a decade of experience in the wellness and nutrition industry, we have helped countless individuals achieve their health goals through trusted guidance and evidence-based solutions. Our team combines years of expertise with a passion for innovation, ensuring every program and product meets the highest standards of quality, safety, and effectiveness.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      custom={1}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="relative bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group p-5 sm:p-6 md:p-8 flex flex-col justify-between min-w-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                ⚡
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                We work online 7 days
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                               Our team is available online every day of the week to provide you with seamless support and guidance. Whether you have questions, need personalized advice, or want to schedule a consultation, we are just a click away—ensuring you receive timely assistance whenever you need it.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      custom={2}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="relative bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group p-5 sm:p-6 md:p-8 flex flex-col justify-between min-w-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                🛡️
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                5000+ happy clients
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                               Over 5000 clients have trusted us to achieve their health and wellness goals. Our commitment to personalized guidance, high-quality solutions, and consistent support has helped them transform their lifestyle and experience lasting results. Join our growing community of satisfied clients today!
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                      custom={3}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="relative bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group p-5 sm:p-6 md:p-8 flex flex-col justify-between min-w-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                💚
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                100% satisfied client
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                               We take pride in delivering exceptional results and personalized care, ensuring every client leaves fully satisfied. Our dedication to quality, transparency, and ongoing support has earned the trust and loyalty of clients from all walks of life.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
