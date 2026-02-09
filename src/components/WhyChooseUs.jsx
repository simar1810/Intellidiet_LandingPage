import Image from "next/image";
import React from "react";


const features = [
    "Scientifically Designed Balanced Nutrition",
    "Expert Coaching",
    "AI-Powered Meal Plans",
    "Easy-to-use App",
    "Supportive Community",
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 relative overflow-hidden bg-white">
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f7fee7] -skew-x-12 transform translate-x-1/4 -z-0" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                {/* Left Side: Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <span className="text-[#84cc16] font-bold text-sm md:text-lg tracking-widest uppercase pb-4 block">
                        Why Choose Us
                    </span>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/logo.png"
                            alt="IntelliDiet Logo"
                            width={80}
                            height={80}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
                        />

                        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f2e]">
                             <span className="text-[#84cc16]">IntelliDiet</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        Choose us for a step-by-step path to success, backed by professionals
                        and a supportive network.
                    </p>
                </div>

                {/* Right Side: Feature List */}
                <div className="w-full md:w-1/2 space-y-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-4 md:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center gap-4 border border-gray-50 transition-transform hover:translate-x-2 duration-300"
                        >
                            {/* Check Icon */}
                            <div className="flex-shrink-0 w-10 h-10 bg-[#84cc16] rounded-lg flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>

                            {/* Text */}
                            <span className="text-[#0a1f2e] font-bold text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
