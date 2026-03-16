"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const AboutSection = () => {
  const { scrollY } = useScroll();

  // Background leaves - increased range for stronger effect
  const y1 = useTransform(scrollY, [0, 400, 800], [0, -100, 0]);
  const y2 = useTransform(scrollY, [0, 400, 800], [0, 80, 0]);
  const y3 = useTransform(scrollY, [0, 400, 800], [0, -90, 0]);
  const rotate1 = useTransform(scrollY, [0, 400, 800], [0, 90, 0]);
  const rotate2 = useTransform(scrollY, [0, 400, 800], [0, -60, 0]);
  const x1 = useTransform(scrollY, [0, 400, 800], [0, 60, 0]);
  const x2 = useTransform(scrollY, [0, 400, 800], [0, -45, 0]);

  // Text side leaves
  const y4 = useTransform(scrollY, [0, 400, 800], [0, -70, 0]);
  const y5 = useTransform(scrollY, [0, 400, 800], [0, 55, 0]);
  const y6 = useTransform(scrollY, [0, 400, 800], [0, -45, 0]);
  const rotate3 = useTransform(scrollY, [0, 400, 800], [0, -45, 0]);
  const rotate4 = useTransform(scrollY, [0, 400, 800], [0, 55, 0]);
  const rotate5 = useTransform(scrollY, [0, 400, 800], [0, -30, 0]);
  const x3 = useTransform(scrollY, [0, 400, 800], [0, 40, 0]);
  const x4 = useTransform(scrollY, [0, 400, 800], [0, -30, 0]);

  // Image side leaves
  const y7 = useTransform(scrollY, [0, 400, 800], [0, -80, 0]);
  const y8 = useTransform(scrollY, [0, 400, 800], [0, 65, 0]);
  const y9 = useTransform(scrollY, [0, 400, 800], [0, -55, 0]);
  const y10 = useTransform(scrollY, [0, 400, 800], [0, 45, 0]);
  const rotate6 = useTransform(scrollY, [0, 400, 800], [0, 55, 0]);
  const rotate7 = useTransform(scrollY, [0, 400, 800], [0, -40, 0]);
  const rotate8 = useTransform(scrollY, [0, 400, 800], [0, 30, 0]);
  const rotate9 = useTransform(scrollY, [0, 400, 800], [0, -45, 0]);
  const x5 = useTransform(scrollY, [0, 400, 800], [0, 45, 0]);
  const x6 = useTransform(scrollY, [0, 400, 800], [0, -35, 0]);

  const smoothY1 = useSpring(y1, { stiffness: 40, damping: 15 });
  const smoothY2 = useSpring(y2, { stiffness: 40, damping: 15 });
  const smoothY3 = useSpring(y3, { stiffness: 40, damping: 15 });
  const smoothRotate1 = useSpring(rotate1, { stiffness: 40, damping: 15 });
  const smoothRotate2 = useSpring(rotate2, { stiffness: 40, damping: 15 });
  const smoothX1 = useSpring(x1, { stiffness: 40, damping: 15 });
  const smoothX2 = useSpring(x2, { stiffness: 40, damping: 15 });

  const smoothY4 = useSpring(y4, { stiffness: 40, damping: 15 });
  const smoothY5 = useSpring(y5, { stiffness: 40, damping: 15 });
  const smoothY6 = useSpring(y6, { stiffness: 40, damping: 15 });
  const smoothRotate3 = useSpring(rotate3, { stiffness: 40, damping: 15 });
  const smoothRotate4 = useSpring(rotate4, { stiffness: 40, damping: 15 });
  const smoothRotate5 = useSpring(rotate5, { stiffness: 40, damping: 15 });
  const smoothX3 = useSpring(x3, { stiffness: 40, damping: 15 });
  const smoothX4 = useSpring(x4, { stiffness: 40, damping: 15 });

  const smoothY7 = useSpring(y7, { stiffness: 40, damping: 15 });
  const smoothY8 = useSpring(y8, { stiffness: 40, damping: 15 });
  const smoothY9 = useSpring(y9, { stiffness: 40, damping: 15 });
  const smoothY10 = useSpring(y10, { stiffness: 40, damping: 15 });
  const smoothRotate6 = useSpring(rotate6, { stiffness: 40, damping: 15 });
  const smoothRotate7 = useSpring(rotate7, { stiffness: 40, damping: 15 });
  const smoothRotate8 = useSpring(rotate8, { stiffness: 40, damping: 15 });
  const smoothRotate9 = useSpring(rotate9, { stiffness: 40, damping: 15 });
  const smoothX5 = useSpring(x5, { stiffness: 40, damping: 15 });
  const smoothX6 = useSpring(x6, { stiffness: 40, damping: 15 });

  return (
    <section
      className="py-20 sm:py-28 md:py-36 overflow-hidden bg-[#F8FAF7] relative"
      id="about"
    >
      {/* Background decorative elements */}
      <motion.div
        style={{ y: smoothY1, rotate: smoothRotate1, x: smoothX1 }}
        className="absolute top-20 left-0 w-32 h-32 opacity-20 pointer-events-none"
      >
        <Image src="/images/leaf2.png" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div
        style={{ y: smoothY2, rotate: smoothRotate2, x: smoothX2 }}
        className="absolute bottom-20 right-0 w-40 h-40 opacity-15 pointer-events-none"
      >
        <Image src="/images/leaf1.png" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div
        style={{ y: smoothY3 }}
        className="absolute top-1/3 right-1/4 w-24 h-24 opacity-10 pointer-events-none"
      >
        <Image src="/images/leaf3.png" alt="" fill className="object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Diet. <span className="text-secondary">Nutrition.</span> Wellness.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Diet, nutrition, and wellness are deeply interconnected pillars of a
            healthy lifestyle. Together, they form the foundation for physical
            vitality, mental clarity, and emotional balance.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-14 lg:gap-20 min-w-0">
          {/* Text Side - with decorative leaves */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-7/12 w-full flex flex-col relative"
          >
            {/* Leaves on text side */}
            <motion.div
              style={{ y: smoothY4, rotate: smoothRotate3, x: smoothX3 }}
              className="absolute -right-4 top-0 w-16 h-16 opacity-40 pointer-events-none"
            >
              <Image
                src="/images/leaf4.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{ y: smoothY5, rotate: smoothRotate4 }}
              className="absolute left-0 top-1/3 w-12 h-12 opacity-30 pointer-events-none"
            >
              <Image
                src="/images/leaf2.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{ y: smoothY6, rotate: smoothRotate5, x: smoothX4 }}
              className="absolute -left-6 bottom-1/4 w-20 h-20 opacity-35 pointer-events-none"
            >
              <Image
                src="/images/leaf1.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            {/* What Is Dieting */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                🥗 What Is Dieting?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Dieting typically refers to the practice of eating in a
                regulated and supervised way to achieve a specific goal—most
                commonly weight loss, but it can also be for health improvement,
                muscle gain, or managing medical conditions like diabetes or
                hypertension. There are many types of diets, but dieting isn't
                just about cutting food—it's about making intentional choices
                about what, when, and how much you eat.
              </p>
            </div>

            {/* About Dt Kavita */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                Dt Kavita
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                An Award winning and highly reputed professional nutritionist,
                working in Indian and globally. From last 10 years we are
                offering online health coaching and consultant nutritionist
                services.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Dt Kavita is a certified nutritionist. She owes Post graduation
                in Dietetics and Nutrition. Also a certified Ayurveda nutrition
                expert, Certified Dermatologist nutrition expert, certified
                Fitness PT. She is the Owner and Founder of Inteli diet (where
                nutrition meets intelligence).
              </p>
            </div>

            {/* Why Work With Us */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                Why Work with Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                  <span className="text-secondary">✓</span>
                  Over a decade helping clients Pan India & Abroad achieve their
                  health and fitness goals
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                  <span className="text-secondary">✓</span>
                  95% satisfied clients with quality services
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                  <span className="text-secondary">✓</span>
                  App-based platform for daily engagement and updates
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                  <span className="text-secondary">✓</span>
                  Online services available 7 days a week
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                  <span className="text-secondary">✓</span>
                  5000+ happy clients served globally
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Image Side with stats cards underneath */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-5/12 w-full flex flex-col relative"
          >
            {/* Decorative leaves */}
            <motion.div
              style={{ y: smoothY7, rotate: smoothRotate6, x: smoothX5 }}
              className="absolute -top-4 -left-4 w-24 h-24 opacity-60 pointer-events-none z-0"
            >
              <Image
                src="/images/leaf1.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{ y: smoothY8, rotate: smoothRotate7 }}
              className="absolute top-10 -right-8 w-20 h-20 opacity-50 pointer-events-none z-0"
            >
              <Image
                src="/images/leaf2.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{ y: smoothY9, rotate: smoothRotate8, x: smoothX6 }}
              className="absolute -bottom-2 -left-6 w-28 h-28 opacity-60 pointer-events-none z-0"
            >
              <Image
                src="/images/leaf3.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{ y: smoothY10, rotate: smoothRotate9 }}
              className="absolute bottom-16 -right-4 w-16 h-16 opacity-40 pointer-events-none z-0"
            >
              <Image
                src="/images/leaf4.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="relative w-full max-w-xs mx-auto z-10">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/women_meditating.png"
                  alt="Women Meditating - Wellness"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                  <p className="text-white font-bold text-lg">Dt. Kavita</p>
                  <p className="text-white/80 text-sm">
                    Founder of <b className="text-accent">Intelidiet</b> and{" "}
                    <b className="text-accent">Nutricure diet</b> & Nutrition
                    Expert
                  </p>
                </div>
              </div>
            </div>

            {/* Stats - Clickable to go to Why Work With Us */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white rounded-xl p-4 shadow-lg text-center cursor-pointer transition-shadow hover:shadow-xl"
              >
                <p className="text-3xl font-bold text-secondary">10+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white rounded-xl p-4 shadow-lg text-center cursor-pointer transition-shadow hover:shadow-xl"
              >
                <p className="text-3xl font-bold text-secondary">5000+</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white rounded-xl p-4 shadow-lg text-center cursor-pointer transition-shadow hover:shadow-xl"
              >
                <p className="text-3xl font-bold text-secondary">95%</p>
                <p className="text-gray-600 text-sm">Satisfaction</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white rounded-xl p-4 shadow-lg text-center cursor-pointer transition-shadow hover:shadow-xl"
              >
                <p className="text-3xl font-bold text-secondary">7/7</p>
                <p className="text-gray-600 text-sm">Days Service</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
