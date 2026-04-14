"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Leaf, Sparkles, ShieldCheck, ChevronRight } from "lucide-react";

const teas = [
    {
        name: "Contour Fat Loss Tea",
        tagline: "Burn fat naturally with every sip",
        color: "from-[#54151B] to-[#7a1f2e]",
        bgLight: "bg-[#faf6f4]",
        textColor: "text-[#54151B]",
    },
    {
        name: "Liver Support Tea",
        tagline: "Detox & strengthen your liver",
        color: "from-blue-400 to-cyan-500",
        bgLight: "bg-blue-50",
        textColor: "text-blue-600",
    },
    {
        name: "She Hormone",
        tagline: "Balance hormones, feel empowered",
        color: "from-green-400 to-emerald-500",
        bgLight: "bg-green-50",
        textColor: "text-green-600",
    },
    {
        name: "Glow Sip",
        tagline: "Radiance & beauty from within",
        color: "from-pink-400 to-rose-500",
        bgLight: "bg-pink-50",
        textColor: "text-pink-600",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TeaAdvertisement = () => {
    const router = useRouter();

    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-[#F8FAF7]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent/8 blur-3xl" />
                <div className="absolute bottom-10 -right-10 w-48 h-48 rounded-full bg-secondary/6 blur-3xl" />
            </div>

            {/* Leaf decorations */}
            <div className="absolute top-12 right-10 w-20 h-20 opacity-15 pointer-events-none hidden md:block">
                <Image src="/images/leaf1.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-16 left-8 w-24 h-24 opacity-12 pointer-events-none hidden md:block">
                <Image src="/images/leaf2.png" alt="" fill className="object-contain" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-5">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                            InteliDiet Wellness Teas
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
                        Healing in Every <span className="text-secondary">Sip</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mt-4 leading-relaxed">
                        Handcrafted herbal tea blends by Dt. Kavita — scientifically formulated
                        to support fat loss, hormonal balance, liver health and glowing skin.
                    </p>
                </motion.div>

                {/* Main Content: Image + Text */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -36 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/tea_advertisement.jpeg"
                                alt="Dt. Kavita with InteliDiet Wellness Teas"
                                width={800}
                                height={550}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </motion.div>

                    {/* Right: Tea Products + CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 36 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        {/* Highlights */}
                        <div className="flex flex-wrap gap-3 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 text-accent rounded-full text-xs font-semibold">
                                <Leaf className="w-3.5 h-3.5" /> 100% Natural
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/15 text-secondary rounded-full text-xs font-semibold">
                                <Sparkles className="w-3.5 h-3.5" /> Clinically Formulated
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                                <ShieldCheck className="w-3.5 h-3.5" /> No Preservatives
                            </span>
                        </div>

                        {/* Tea cards */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                            {teas.map((tea, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`${tea.bgLight} rounded-xl p-4 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all duration-300 group/card cursor-default`}
                                >
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tea.color} flex items-center justify-center mb-2`}>
                                        <Leaf className="w-4 h-4 text-white" />
                                    </div>
                                    <h4 className="font-bold text-primary text-sm sm:text-base mb-1 group-hover/card:text-secondary transition-colors">
                                        {tea.name}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {tea.tagline}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-2"
                        >
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                Each blend is made with premium herbs and ingredients, designed to complement
                                your InteliDiet nutrition plan for maximum results.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                <button
                                    onClick={() => router.push("/contact-us")}
                                    className="bg-[#54151B] cursor-pointer hover:bg-[#7a1f2e] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-[#d4888f]/30 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 min-h-[48px] touch-manipulation w-full sm:w-auto justify-center"
                                >
                                    Order Now
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => router.push("/products/tea")}
                                    className="border-2 border-primary/20 cursor-pointer hover:border-primary/40 hover:bg-primary/5 text-primary px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 min-h-[48px] touch-manipulation w-full sm:w-auto justify-center"
                                >
                                    More Info
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeaAdvertisement;
