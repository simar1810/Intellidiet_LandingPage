"use client";
import React from "react";
import { Shield, Star, Zap, Headphones } from "lucide-react";

const WhyChooseUs = () => {
    const reasons = [
    {
        title: "Personalized Nutrition Plans",
        description: "Tailored diet plans based on your health goals, lifestyle, and preferences to achieve sustainable results.",
        icon: <Shield className="w-8 h-8" />,
        color: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        title: "Trusted by Clients",
        description: "Our certified nutritionists provide reliable guidance to help you improve overall wellness and health.",
        icon: <Star className="w-8 h-8" />,
        color: "bg-green-50",
        iconColor: "text-green-500",
    },
    {
        title: "Quick & Effective Results",
        description: "Achieve your fitness and health goals faster with scientifically-backed nutrition strategies.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        title: "Expert Support",
        description: "Get continuous guidance and support from our team to stay motivated and on track.",
        icon: <Headphones className="w-8 h-8" />,
        color: "bg-cyan-50",
        iconColor: "text-cyan-500",
    },
 ];


    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Why Choice <span className="text-secondary">Us</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                         Our certified nutritionists provide personalized diet plans and expert guidance to help you achieve your health safely and effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}
                        >
                            <div className={`${item.color} ${item.iconColor} w-16 h-16 rounded-4xl flex items-center justify-center mb-6 mx-auto transition-transform group-hover:rotate-12`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                            <p className="text-gray-500 line-clamp-3 mb-6">
                                {item.description}
                            </p>
                            {/* <button className="text-secondary font-bold hover:underline">
                                Learn More
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
