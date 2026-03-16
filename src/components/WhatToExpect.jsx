"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Pill,
    UtensilsCrossed,
    ClipboardList,
    Dumbbell,
} from "lucide-react";

const items = [
    {
        icon: <Pill className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
        title: "No Supplements",
        description: "Achieve your health goals naturally",
    },
    {
        icon: <UtensilsCrossed className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
        title: "No Starvation",
        description: "Enjoy balanced meals without feeling deprived.",
    },
    {
        icon: <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
        title: "Home Based Diet",
        description: "Convenient and effective plans tailored for your home.",
    },
    {
        icon: <Dumbbell className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
        title: "No Gymnasium",
        description: "Get fit without stepping into a gym.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const WhatToExpect = () => {
    return (
        <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-primary">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 50% 50%, rgba(139,195,74,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(245,143,41,0.08) 0%, transparent 50%)",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">
                        What to Expect from Our{" "}
                        <span className="text-secondary">Program?</span>
                    </h2>
                </motion.div>

                {/* 2×2 Grid with cross dividers */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="relative max-w-3xl mx-auto"
                >
                    {/* Vertical divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden sm:block" />
                    {/* Horizontal divider */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 -translate-y-1/2 hidden sm:block" />
                    {/* Center dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg shadow-white/30 z-10 hidden sm:block" />

                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col items-center text-center px-4 sm:px-6 py-4 sm:py-6 group ${index < 2 ? "" : "border-t border-white/10 sm:border-t-0"
                                    }`}
                            >
                                <div className="mb-5 text-white/80 group-hover:text-secondary transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-[220px]">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatToExpect;
