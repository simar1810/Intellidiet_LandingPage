import React from "react";

const steps = [
    {
        id: "01",
        title: "Sign Up & Get Personalized Assessment",
        description:
            "Tell us about your health goals, dietary preferences, and any medical history.",
    },
    {
        id: "02",
        title: "Get Instant Access to the Trinity Nourishments",
        description:
            "Get access to a personalized wellness regimen, resources, and expert guidance.",
    },
    {
        id: "03",
        title: "Follow Your Personalized Plan & Track Progress",
        description:
            "Get science-backed meal plans, expert consultations and real-time tracking.",
    },
    {
        id: "04",
        title: "Achieved a Healthier You!",
        description:
            "Stay consistent with reminders, recipe recommendations, and expert advice",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        How it Works
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Your concerns are our priority - we craft the perfect plan to fit
                        your needs.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Dotted Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-200 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex flex-col md:flex-row items-center justify-between relative ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Card */}
                                <div
                                    className={`w-full md:w-[42%] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-lg relative ${index % 2 === 0
                                            ? "border-r-4 border-[#84cc16] text-right"
                                            : "border-l-4 border-[#84cc16] text-left"
                                        }`}
                                >
                                    <h3 className="text-xl font-bold text-black mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Number & Dot */}
                                <div className="relative flex flex-col items-center justify-center my-6 md:my-0">
                                    {/* Center Dot */}
                                    <div className="w-3 h-3 bg-[#84cc16] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

                                    {/* Large Number */}
                                    <span className="text-8xl font-bold text-gray-100/80 select-none">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="w-full md:w-[42%] hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
