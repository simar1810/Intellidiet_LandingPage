"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
    const reviews = [
        {
            name: "Jean Haley",
            role: "Nutritionist",
            content:
                "Working alongside this team has been inspiring. Their evidence-based approach and personalized nutrition strategies truly help clients achieve sustainable and long-lasting health transformations.",
            avatar: "https://i.pravatar.cc/150?u=jean",
        },
        {
            name: "Richard Miles",
            role: "Healthy Enthusiast",
            content:
                "I have tried many wellness programs before, but this one genuinely focuses on balanced nutrition, consistency, and realistic lifestyle changes that actually deliver visible results.",
            avatar: "https://i.pravatar.cc/150?u=richard",
        },
        {
            name: "Helen Hill",
            role: "Customer",
            content:
                "The experience exceeded my expectations completely. The team stayed supportive throughout my journey and helped me build healthier habits that I can confidently maintain long-term.",
            avatar: "https://i.pravatar.cc/150?u=helen",
        },
        {
            name: "Robert James",
            role: "Lifestyle Coach",
            content:
                "The guidance and support I received were exceptional. The program was simple to follow, effective, and helped me feel healthier, stronger, and more confident every day.",
            avatar: "https://i.pravatar.cc/150?u=robert",
        },
        {
            name: "Sofia Mell",
            role: "Fitness Expert",
            content:
                "From personalized meal plans to constant encouragement, everything was thoughtfully designed. I achieved my goals safely and noticed significant improvements in my overall well-being.",
            avatar: "https://i.pravatar.cc/150?u=sofia",
        },
    ];

    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative leaves */}
            <div className="absolute -left-10 top-1/4 w-32 h-32 opacity-40">
                <img src="/images/leaf3.png" alt="leaf" />
            </div>
            <div className="absolute -right-10 bottom-1/4 w-32 h-32 opacity-40 rotate-180">
                <img src="/images/leaf3.png" alt="leaf" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Featured Customer{" "}
                        <span className="text-secondary">Review</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                         Real stories from clients who transformed their health successfully.
                    </p>
                </div>

                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                            >
                                <div className="p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white group h-full">
                                    <div className="mb-6 flex justify-between items-start">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    fill="#F58F29"
                                                    className="text-secondary"
                                                />
                                            ))}
                                        </div>
                                        <Quote
                                            className="text-secondary/20 group-hover:text-secondary transition-colors"
                                            size={40}
                                        />
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
                                            <h4 className="font-bold text-primary">
                                                {review.name}
                                            </h4>
                                            <p className="text-xs text-gray-400 font-medium uppercase">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional Indicators (static style) */}
                {/* <div className="flex justify-center gap-2 mt-12">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div> */}
            </div>
        </section>
    );
};

export default Reviews;
