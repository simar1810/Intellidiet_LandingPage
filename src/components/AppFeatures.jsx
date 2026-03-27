"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Smartphone,
    Salad,
    Dumbbell,
    BotMessageSquare,
    ChevronRight,
    Download,
} from "lucide-react";

const features = [
    {
        title: "Login & Get FREE Detox Plan",
        subtitle: "Select Programs",
        description:
            "Download the app, sign up in seconds and unlock your personalised detox plan — absolutely free. Browse through our curated programs designed for weight loss, skin health, hormonal balance and more.",
        image: "/images/app-features/app_ad.png",
        icon: <Smartphone className="w-6 h-6" />,
        accent: "from-green-400/20 to-emerald-500/10",
        iconBg: "bg-accent/20 text-accent",
    },
    {
        title: "Check Your Diet, Macros & Recipes",
        subtitle: "Nutrition Tracking",
        description:
            "Get a detailed breakdown of your daily diet — calories, protein, carbs, fats and micronutrients. Discover healthy recipes tailored to your goals, preferences and dietary restrictions.",
        image: "/images/app-features/diet_ad.jpeg",
        icon: <Salad className="w-6 h-6" />,
        accent: "from-orange-400/20 to-amber-400/10",
        iconBg: "bg-secondary/20 text-secondary",
    },
    {
        title: "Explore Workouts & Track Progress",
        subtitle: "Steps · Weight Log · BMI · Fat % · Muscle Mass",
        description:
            "Set fitness goals, explore guided workouts, and track every metric that matters — steps walked, weight changes, inches lost, BMI, body fat percentage, and muscle mass — all in one place.",
        image: "/images/app-features/workout-tracking.png",
        icon: <Dumbbell className="w-6 h-6" />,
        accent: "from-blue-400/20 to-cyan-400/10",
        iconBg: "bg-blue-100 text-blue-600",
    },
    {
        title: "Ask My AI Health Coach Avatar",
        subtitle: "Food · Drinks · Cravings",
        description:
            "Got a question about what to eat, drink, or how to handle cravings? Our AI-powered health coach avatar is available 24/7 to give you instant, science-backed answers personalised to your profile.",
        image: "/images/app-features/ai-coach.png",
        icon: <BotMessageSquare className="w-6 h-6" />,
        accent: "from-purple-400/20 to-pink-400/10",
        iconBg: "bg-purple-100 text-purple-600",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const AppFeatures = () => {
    const router = useRouter();

    return (
        <section
            id="app"
            className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #f8faf7 0%, #eef5e8 40%, #f8faf7 100%)",
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-secondary/8 blur-3xl" />
                <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Leaf decorations */}
            <div className="absolute top-16 right-8 w-20 h-20 opacity-15 pointer-events-none hidden md:block">
                <Image src="/images/leaf1.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-24 left-6 w-24 h-24 opacity-12 pointer-events-none hidden md:block">
                <Image src="/images/leaf3.png" alt="" fill className="object-contain" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-5">
                        <Smartphone className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                            InteliDiet App
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
                        Your Health, One{" "}
                        <span className="text-secondary">App</span> Away
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mt-4 leading-relaxed">
                        Everything you need to transform your health — personalised diet
                        plans, fitness tracking, AI coaching and more — right in your
                        pocket.
                    </p>
                </motion.div>

                {/* Features Grid — Zig-Zag Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-12 md:space-y-20"
                >
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                    } items-center gap-8 md:gap-12 lg:gap-16`}
                            >
                                {/* Illustration */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                        className={`relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-3xl bg-gradient-to-br ${feature.accent} shadow-lg overflow-hidden`}
                                    >
                                        {/* Subtle glow ring */}
                                        <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 z-10" />
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} mb-4`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 leading-snug">
                                        {feature.title}
                                    </h3>
                                    <p className="text-secondary font-semibold text-sm sm:text-base mb-3 tracking-wide">
                                        {feature.subtitle}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Download CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 sm:mt-24"
                >
                    <div className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 20% 50%, rgba(139,195,74,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245,143,41,0.2) 0%, transparent 50%)",
                                }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-10 md:p-14">
                            {/* Left: Text + Buttons */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                                    Scan to{" "}
                                    <span className="text-secondary">Download</span> the App
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                                    Get started on your health journey today. Download the
                                    InteliDiet app and receive a free personalised detox plan
                                    instantly.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                                    <button
                                        onClick={() => router.push("/app")}
                                        className="bg-secondary cursor-pointer hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 w-full sm:w-auto justify-center min-h-[48px] touch-manipulation"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download Now
                                    </button>
                                    <button
                                        onClick={() => router.push("/contact-us")}
                                        className="bg-white/10 cursor-pointer hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border border-white/20 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 w-full sm:w-auto justify-center min-h-[48px] touch-manipulation"
                                    >
                                        Get Started
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Appointment info */}
                                <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-secondary/50 flex-shrink-0">
                                        <Image
                                            src="/images/kavita-mam.png"
                                            alt="Dt. Kavita"
                                            fill
                                            className="object-cover object-top"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white/90 text-sm font-semibold">
                                            Dt. Kavita{" "}
                                            <span className="text-white/50 font-normal">
                                                (Weight Loss / Skin Nutrition Expert)
                                            </span>
                                        </p>
                                        <p className="text-secondary text-sm font-medium">
                                            Book Appointment: 96256 91566
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Store badges + visual */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="bg-white rounded-2xl p-4 shadow-lg">
                                    <div className="w-40 h-40 sm:w-48 sm:h-48 relative">
                                        {/* QR code placeholder — replaced with app mockup */}
                                        <Image
                                            src="/images/app_download_qr.png"
                                            alt="InteliDiet App"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => router.push("/app")}
                                        className="relative w-[120px] h-[40px] sm:w-[135px] sm:h-[44px] hover:opacity-80 transition-opacity cursor-pointer"
                                    >
                                        <Image
                                            src="/playstore.png"
                                            alt="Google Play"
                                            fill
                                            className="object-contain"
                                        />
                                    </button>
                                    <button
                                        onClick={() => router.push("/app")}
                                        className="relative w-[120px] h-[40px] sm:w-[135px] sm:h-[44px] hover:opacity-80 transition-opacity cursor-pointer"
                                    >
                                        <Image
                                            src="/appStore.png"
                                            alt="App Store"
                                            fill
                                            className="object-contain"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppFeatures;
