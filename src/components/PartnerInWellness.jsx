import React from "react";
import Image from "next/image";

export default function PartnerInWellness() {
    return (
        <section className="py-20 bg-[#F0F5EC]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Circular Collage */}
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <div className="grid grid-cols-2 h-full">
                            <div className="relative h-full w-full">
                                <Image src="/images/collage-kiwi.png" alt="Healthy Food" fill className="object-cover" />
                            </div>
                            <div className="relative h-full w-full">
                                <Image src="/images/collage-stethoscope.png" alt="Medical Care" fill className="object-cover" />
                            </div>
                            <div className="relative h-full w-full">
                                <Image src="/images/collage-hands-heart.png" alt="Care" fill className="object-cover" />
                            </div>
                            <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                                <Image src="/images/hero-bg.png" alt="Nature" fill className="object-cover opacity-80" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Labels */}
                    <div className="absolute top-10 left-0 md:-left-4 bg-white px-4 py-2 rounded-lg shadow-lg border-l-4 border-[#84cc16]">
                        <span className="block text-[#84cc16] font-bold text-xs tracking-wider uppercase">Traditional</span>
                        <span className="text-gray-500 text-xs">Ancient Wisdom</span>
                    </div>

                    <div className="absolute bottom-10 right-0 md:-right-4 bg-white px-4 py-2 rounded-lg shadow-lg border-r-4 border-[#84cc16] text-right">
                        <span className="block text-[#84cc16] font-bold text-xs tracking-wider uppercase">Personalized</span>
                        <span className="text-gray-500 text-xs">Tailored for You</span>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-8">
                        <span className="bg-[#f0fdd4] text-[#84cc16] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                            Our Promise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f2e] mb-2">
                            Your Reliable Partner
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#84cc16] mb-6">
                            In Wellness
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            We bridge the gap between ancient healing traditions and modern science to guide you on a transformative journey toward lasting health.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                            <div className="relative h-24 w-full rounded-lg overflow-hidden mb-4">
                                <Image src="/images/collage-stethoscope.png" alt="Education" fill className="object-cover" />
                            </div>
                            <h3 className="font-bold text-[#0a1f2e] mb-1">Nutritional Education</h3>
                            <p className="text-gray-400 text-xs">Prevention is better than cure.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                            <div className="relative h-24 w-full rounded-lg overflow-hidden mb-4">
                                <Image src="/images/collage-kiwi.png" alt="Preventative" fill className="object-cover" />
                            </div>
                            <h3 className="font-bold text-[#0a1f2e] mb-1">Preventative Care</h3>
                            <p className="text-gray-400 text-xs">Learn to make better dietary choices.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                            <div className="relative h-24 w-full rounded-lg overflow-hidden mb-4">
                                <Image src="/images/hero-bg.png" alt="Balance" fill className="object-cover" />
                            </div>
                            <h3 className="font-bold text-[#0a1f2e] mb-1">Mind-Body Balance</h3>
                            <p className="text-gray-400 text-xs">Focus on Stress and emotional wellness.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
