"use client";
import React from "react";

const WhyWorkWithUs = () => {
    return (
        <section className="py-24 bg-[#F0FDF4] rounded-[50px] mx-4 md:mx-10 my-10 overflow-visible">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                        Why Work with us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

                    {/* Card 1 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group p-6 md:p-8 flex flex-col justify-between aspect-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                🌿
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                Experience 10+ yrs
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                                    With over a decade of experience in the wellness and nutrition industry, we have helped countless individuals achieve their health goals through trusted guidance and evidence-based solutions. Our team combines years of expertise with a passion for innovation, ensuring every program and product meets the highest standards of quality, safety, and effectiveness.
                            </p>
                        </div>
                        {/* <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Learn More →
                        </div> */}
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group p-6 md:p-8 flex flex-col justify-between aspect-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                ⚡
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                We work online 7 days
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                               Our team is available online every day of the week to provide you with seamless support and guidance. Whether you have questions, need personalized advice, or want to schedule a consultation, we are just a click away—ensuring you receive timely assistance whenever you need it.
                            </p>
                        </div>
                        {/* <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Discover →
                        </div> */}
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group p-6 md:p-8 flex flex-col justify-between aspect-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                🛡️
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                5000+ happy clients
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                               Over 5000 clients have trusted us to achieve their health and wellness goals. Our commitment to personalized guidance, high-quality solutions, and consistent support has helped them transform their lifestyle and experience lasting results. Join our growing community of satisfied clients today!
                            </p>
                        </div>
                        {/* <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Our Promise →
                        </div> */}
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group p-6 md:p-8 flex flex-col justify-between aspect-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                💚
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                100% satisfied client
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                               We take pride in delivering exceptional results and personalized care, ensuring every client leaves fully satisfied. Our dedication to quality, transparency, and ongoing support has earned the trust and loyalty of clients from all walks of life.
                            </p>
                        </div>
                        {/* <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Join Us →
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
