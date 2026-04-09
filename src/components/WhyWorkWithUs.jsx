"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const WhyWorkWithUs = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-24 bg-[#F8FAF7] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 -left-8 w-28 h-28 opacity-20 pointer-events-none">
        <Image src="/images/leaf2.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-16 -right-4 w-32 h-32 opacity-15 pointer-events-none">
        <Image src="/images/leaf1.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 opacity-10 pointer-events-none">
        <Image src="/images/leaf3.png" alt="" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
            Why Work With <span className="text-secondary">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Discover what makes us the right choice for your health journey
          </p>
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
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                🌿
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Experience 10+ yrs
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                With over a decade of experience in the wellness and nutrition industry, 
                we have helped countless individuals achieve their health goals through 
                trusted guidance and evidence-based solutions.
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
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                We work online 7 days
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our team is available online every day of the week to provide you with 
                seamless support and guidance. We are just a click away—ensuring you 
                receive timely assistance whenever you need it.
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
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                5000+ happy clients
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Over 5000 clients have trusted us to achieve their health and wellness 
                goals. Our commitment to personalized guidance and consistent support 
                has helped them transform their lifestyle.
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
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-pink-100 flex items-center justify-center text-2xl mb-4">
                💚
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                95% satisfied client
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We take pride in delivering exceptional results and personalized care, 
                ensuring every client leaves fully satisfied. Our dedication to quality 
                has earned the trust of clients from all walks of life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
