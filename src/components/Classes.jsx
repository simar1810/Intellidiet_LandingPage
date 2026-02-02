import React from "react";

const icons = {
    apple: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444" // red-500
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
    ),
    brain: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#84cc16" // lime-500
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
    ),
    leaf: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6" // blue-500
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 13-11 18Z" />
            <path d="M11 20c-3 0-6-3-6-6 0-3.5 2.5-6 6-6" />
        </svg>
    ),
    lightning: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#eab308" // yellow-500
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
};

const classesData = [
    {
        icon: "apple",
        title: "Balanced Food Diet Mastery",
        description:
            "A low-carb diet focuses on reducing carbohydrate intake while increasing protein and healthy fats. Mastering this approch can help with weight management, blood sugar regulation, and overall health.",
        variant: "dark",
    },
    {
        icon: "brain",
        title: "Mindful Eating Techniques",
        description:
            "Mindful eating is about developing a healthy relationship with food by paying attention to the eating experience. It helps you understand hunger signals, avoid overeating, and enjoy your meals fully.",
        variant: "light",
    },
    {
        icon: "leaf",
        title: "Stress Reduction Strategies",
        description:
            "Stress impacts both mental and physical health, disrupting sleep, digestion, and overall well-being. Effective stress reduction techniques can improve your health and enhance the success of your nutrition plan.",
        variant: "light",
    },
    {
        icon: "lightning",
        title: "Building Vishvoday",
        description:
            "Vishvodaya are the foundation of sustainable wellness. Developing routines that align with your health goals ensures long-term success without falling into the trap of yo-yo dieting or unsustainable practices.",
        variant: "dark",
    },
];

export default function Classes() {
    return (
        <section className="md:p-24 bg-gray-50/50">
            <div className="mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f2e] mb-4">
                        Classes for Every Level <br /> and Intention
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Our classes are thoughtfully designed for all experience levels, from
                        foundational practices to advanced techniques.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {classesData.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 md:p-10 shadow-sm flex flex-col justify-between h-full min-h-[350px] transition-transform hover:-translate-y-1 duration-300 ${item.variant === "dark"
                                    ? "bg-[#4b5563] text-white border border-transparent" // Updated to a smoother dark grey
                                    : "bg-white text-[#0a1f2e] border border-gray-100"
                                }`}
                        >
                            <div>
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.variant === "dark" ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    {icons[item.icon]}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p
                                    className={`text-sm leading-relaxed mb-8 ${item.variant === "dark" ? "text-gray-300" : "text-gray-500"
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>

                            {/* Separator Line */}
                            <div className={`border-t mb-6 w-full ${item.variant === 'dark' ? 'border-white/20' : 'border-gray-100'}`}></div>

                            {/* Link */}
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-bold tracking-widest text-[#84cc16] hover:text-[#65a30d] transition-colors uppercase group"
                            >
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
