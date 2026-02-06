"use client";
import React, { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        title: "Lost 30 lbs in 3 months",
        quote: "The wellness program changed my life completely!",
    },
    {
        title: "Gained muscle & flexibility",
        quote: "I feel stronger and more energized than ever!",
    },
    {
        title: "Improved overall health",
        quote: "My energy levels have skyrocketed!",
    },
    {
        title: "Transformed in 6 months",
        quote: "Best decision I ever made for my health!",
    },
    {
        title: "Found mental clarity",
        quote: "The mindfulness techniques are a game changer.",
    },
];

export default function Testimonials() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            // Determine index based on card width approx (responsive logic may vary, 
            // but centering visually is usually enough). 
            // A better way for multiple cards per view is to calculate based on scroll percentage.
            // Let's stick to scroll snap points for simplicity and robustness.
            const cardWidth = scrollRef.current.children[0].clientWidth; // Approximate
            const newIndex = Math.round(scrollLeft / (cardWidth + 24)); // 24 is gap
            setActiveIndex(newIndex);
        }
    };

    const scrollTo = (index) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.children[0].clientWidth;
            scrollRef.current.scrollTo({
                left: index * (cardWidth + 24),
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f2e] mb-4">
                        Wellness from Our Thriving Community
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Experience the transformation stories from our community members. Real
                        people, real results.
                    </p>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[200px] sm:min-w-[300px] md:min-w-[400px] flex-shrink-0 bg-[#f7fee7] rounded-2xl p-6 sm:p-8 md:p-12 snap-center flex flex-col items-center text-center justify-center border border-transparent hover:border-[#84cc16] transition-colors duration-300"
                        >
                            <h3 className="text-[#65a30d] font-bold text-base sm:text-lg md:text-xl mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 italic text-sm sm:text-base md:text-lg">
                                "{item.quote}"
                            </p>
                        </div>
                    ))}
                    {/* Spacer to allow last item to be centered if needed, or just let standard scroll behavior work */}
                    <div className="w-1 md:w-12 flex-shrink-0"></div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "w-10 bg-[#84cc16]"
                                    : "w-3 bg-gray-200 hover:bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
