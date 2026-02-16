"use client";
import React from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
    const reviews = [
        {
            name: "Jean Haley",
            role: "Nutritionist",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: "https://i.pravatar.cc/150?u=jean",
        },
        {
            name: "Richard Miles",
            role: "Healthy Enthusiast",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: "https://i.pravatar.cc/150?u=richard",
        },
        {
            name: "Helen Hill",
            role: "Customer",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: "https://i.pravatar.cc/150?u=helen",
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative leaves */}
            <div className="absolute -left-10 top-1/4 w-32 h-32 opacity-40">
                <img src="images/leaf3.png" alt="leaf" />
            </div>
            <div className="absolute -right-10 bottom-1/4 w-32 h-32 opacity-40 rotate-180">
                <img src="images/leaf3.png" alt="leaf" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Featured Customer <span className="text-secondary">Review</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white group"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="#F58F29" className="text-secondary" />
                                    ))}
                                </div>
                                <Quote className="text-secondary/20 group-hover:text-secondary transition-colors" size={40} />
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed italic">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-secondary/20"
                                />
                                <div>
                                    <h4 className="font-bold text-primary">{review.name}</h4>
                                    <p className="text-xs text-gray-400 font-medium uppercase">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
