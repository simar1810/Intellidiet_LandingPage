"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Leaf,
    Sparkles,
    ShieldCheck,
    Heart,
    Flame,
    Droplets,
    Sun,
    ChevronRight,
} from "lucide-react";
import Header from "../../../components/header";
import Footer from "../../../components/Footer";

const teaProducts = [
    {
        id: "contour-fat-loss",
        name: "Contour Fat Loss",
        subtitle: "Detox Tea",
        tagline: "A unique Ayurvedic blend to ignite your metabolism",
        image: "/images/teas/contour-fat-loss.jpeg",
        color: "from-green-50 via-lime-50 to-emerald-50",
        accentColor: "text-green-700",
        accentBg: "bg-green-100",
        ingredients: [
            "Oolong Tea", "Garcinia Cambogia", "Arjun Bark", "Licorice",
            "Cinnamon", "Lemon Balm", "Pippli", "Rose Petals",
        ],
        benefits: [
            { icon: <Flame className="w-4 h-4" />, title: "Supports Fat Metabolism" },
            { icon: <Droplets className="w-4 h-4" />, title: "Reduces Bloating" },
            { icon: <Sparkles className="w-4 h-4" />, title: "Boosts Digestion" },
            { icon: <Leaf className="w-4 h-4" />, title: "100% Natural Herbal Blend" },
        ],
        nutrition: { calories: "1.2g", protein: "0g", carbs: "0.10g", fats: "0g" },
        price: "₹550",
        weight: "100gm",
    },
    {
        id: "liver-support",
        name: "Liver Support",
        subtitle: "Detox Tea",
        tagline: "A unique Ayurvedic blend to detox & strengthen your liver",
        image: "/images/teas/liver-support.jpeg",
        color: "from-emerald-50 via-green-50 to-teal-50",
        accentColor: "text-emerald-700",
        accentBg: "bg-emerald-100",
        ingredients: [
            "Milk Thistle", "Dandelion", "Sarsaparilla", "Nettle",
        ],
        benefits: [
            { icon: <Flame className="w-4 h-4" />, title: "Supports Fat Metabolism" },
            { icon: <ShieldCheck className="w-4 h-4" />, title: "Supports Liver Health" },
            { icon: <Heart className="w-4 h-4" />, title: "Reduces Fatty Liver & Cholesterol" },
            { icon: <Leaf className="w-4 h-4" />, title: "100% Natural Herbal Blend" },
        ],
        nutrition: { calories: "1.2g", protein: "0g", carbs: "0.11g", fats: "0g" },
        price: "₹550",
        weight: "100gm",
    },
    {
        id: "she-hormone",
        name: "She Hormone",
        subtitle: "PCOS Relief Detox Tea",
        tagline: "A unique Ayurvedic blend to balance hormones & feel empowered",
        image: "/images/teas/hormone-support.jpeg",
        color: "from-pink-50 via-rose-50 to-fuchsia-50",
        accentColor: "text-pink-700",
        accentBg: "bg-pink-100",
        ingredients: [
            "Shatavari", "Manjishtha", "Ashoka", "Ajmod", "Ginger",
            "White Sandalwood", "Cinnamon", "Shankhpushpi",
            "Turmeric", "Peppermint", "Raspberry", "Fenugreek",
        ],
        benefits: [
            { icon: <Flame className="w-4 h-4" />, title: "Supports Fat Metabolism" },
            { icon: <Heart className="w-4 h-4" />, title: "Regulates Periods" },
            { icon: <ShieldCheck className="w-4 h-4" />, title: "Strengthens Uterus" },
            { icon: <Sparkles className="w-4 h-4" />, title: "Reduces Acne" },
        ],
        nutrition: { calories: "1.2g", protein: "0g", carbs: "0.11g", fats: "0g" },
        price: "₹550",
        weight: "100gm",
    },
    {
        id: "glow-sip",
        name: "Glow Sip",
        subtitle: "Skin & Hair Herbal Tea",
        tagline: "A unique Ayurvedic blend for radiance & beauty from within",
        image: "/images/teas/glow.jpeg",
        color: "from-rose-50 via-pink-50 to-fuchsia-50",
        accentColor: "text-rose-700",
        accentBg: "bg-rose-100",
        ingredients: [
            "White Tea", "Rose Petals", "Orange Peel", "Kudzu Root",
            "Hibiscus", "Lavender", "Mint", "Turmeric",
        ],
        benefits: [
            { icon: <Sparkles className="w-4 h-4" />, title: "Rich in Antioxidants" },
            { icon: <Sun className="w-4 h-4" />, title: "Anti-ageing & Collagen Boost" },
            { icon: <Heart className="w-4 h-4" />, title: "Radiant Skin & Hair Health" },
            { icon: <ShieldCheck className="w-4 h-4" />, title: "Reduces Pigmentation & Dark Spots" },
        ],
        nutrition: { calories: "1.2g", protein: "0g", carbs: "0.10g", fats: "0g" },
        price: "₹550",
        weight: "100gm",
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeaProductsPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen min-w-0 overflow-x-hidden">
            <Header />
            <div className="h-[80px] bg-primary" />

            {/* ── Hero Banner ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-primary">
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 50%, rgba(139,195,74,0.35) 0%, transparent 55%), radial-gradient(circle at 72% 28%, rgba(245,143,41,0.2) 0%, transparent 50%)",
                    }}
                />
                <div className="absolute top-6 right-10 w-28 h-28 opacity-20 pointer-events-none hidden md:block">
                    <Image src="/images/leaf1.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute bottom-6 left-8 w-24 h-24 opacity-15 pointer-events-none hidden md:block">
                    <Image src="/images/leaf3.png" alt="" fill className="object-contain" />
                </div>

                <div className="container  mx-auto px-6 md:px-8 max-w-5xl relative text-center py-16 sm:py-24" style={{ paddingTop: '150px' }}>
                    <div className="inline-flex items-center gap-1 py-2.5 px-4 bg-white/20 rounded-full mb-5 shadow-md">
                        <Leaf className="w-4 h-4 text-accent" />
                        <span className="text-white font-semibold text-xs sm:text-sm tracking-widest uppercase">
                            An Ayurveda &amp; Modern Science Formula
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-tight">
                        InteliDiet <span className="text-secondary">Wellness Teas</span>
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Handcrafted herbal tea blends curated by Dt. Kavita — 100% natural,
                        caffeine-free formulas designed to heal, detox, and rejuvenate your body from within.
                    </p>
                </div>
            </section>

            {/* ── Product Sections ────────────────────────────────────────── */}
            {teaProducts.map((tea, index) => {
                const isEven = index % 2 === 0;
                return (
                    <section
                        key={tea.id}
                        className={`relative py-16 sm:py-20 overflow-hidden ${isEven ? "bg-[#F8FAF7]" : "bg-white"}`}
                    >
                        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                            <motion.div
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                className={`flex flex-col items-stretch gap-10 md:gap-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Image column */}
                                <div className="w-full md:w-5/12 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-2/3 sm:w-1/2 md:w-full max-w-[300px] h-[400px] flex items-center justify-center"
                                    >
                                        <div className={`rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${tea.color} p-1.5 w-full h-full flex items-center justify-center`}>
                                            <Image
                                                src={tea.image}
                                                alt={`${tea.name} – ${tea.subtitle}`}
                                                width={300}
                                                height={400}
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Details column — flex-col so the CTA row sits at the bottom */}
                                <div className="w-full md:w-7/12 flex flex-col gap-5">

                                    {/* Name + subtitle + tagline */}
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
                                            {tea.name}
                                        </h2>
                                        <p className={`mt-1 text-base sm:text-lg font-semibold ${tea.accentColor}`}>
                                            {tea.subtitle}
                                        </p>
                                        <p className="mt-2 text-gray-500 text-sm sm:text-base leading-relaxed italic">
                                            {tea.tagline}
                                        </p>
                                    </div>

                                    {/* Benefits — 2×2 grid, uniform min-height so cards never look ragged */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {tea.benefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 16 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.35, delay: i * 0.08 }}
                                                className={`${tea.accentBg} rounded-xl p-3 flex items-center gap-4 shadow-sm min-h-[56px]`}
                                            >
                                                <span className={`${tea.accentColor} shrink-0`}>{benefit.icon}</span>
                                                <span className="text-primary font-medium text-xs sm:text-sm leading-snug">
                                                    {benefit.title}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Ingredients */}
                                    <div>
                                        <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                                            Key Ingredients
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tea.ingredients.map((ingredient, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm"
                                                >
                                                    {ingredient}
                                                </span>
                                            ))}
                                            <span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-400 rounded-full text-xs sm:text-sm italic shadow-sm">
                                                &amp; Other supporting Herbs
                                            </span>
                                        </div>
                                    </div>

                                    {/* Nutrition table */}
                                    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                                        <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
                                            Nutritional Information per 100 ml
                                        </h4>
                                        <div className="grid grid-cols-4 divide-x divide-gray-100 text-center">
                                            {[
                                                { label: "Calories", value: tea.nutrition.calories },
                                                { label: "Protein",  value: tea.nutrition.protein  },
                                                { label: "Carbs",    value: tea.nutrition.carbs    },
                                                { label: "Fats",     value: tea.nutrition.fats     },
                                            ].map(({ label, value }) => (
                                                <div key={label} className="px-2">
                                                    <p className="text-secondary font-bold text-base sm:text-lg">{value}</p>
                                                    <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/*
                                      Price + CTA
                                      — mt-auto pushes this to the very bottom of the flex column
                                        so every product card's button sits at the same vertical level.
                                      — flex-row with justify-between so price is left, button is right
                                        on all screen sizes (no column wrapping that breaks alignment).
                                    */}
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-row items-center justify-between gap-4">
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-widest">MRP</p>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-2xl sm:text-3xl font-bold text-secondary">
                                                    {tea.price}/-
                                                </span>
                                                <span className="text-gray-400 text-sm">/ {tea.weight}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => router.push("/contact-us")}
                                            className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-orange-400/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
                                        >
                                            Order Now
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </section>
                );
            })}

            <Footer />
        </main>
    );
}