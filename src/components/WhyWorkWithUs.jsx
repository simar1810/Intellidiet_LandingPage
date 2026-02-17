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
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-visible group p-6 md:p-8 flex flex-col justify-between sm:aspect-auto md:aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                🌿
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                Natural Ingredients
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                                We use carefully sourced natural ingredients to ensure premium quality and maximum health benefits. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis dolorem accusantium ratione ad sunt libero facere pariatur! Explicabo, nisi!
                            </p>
                        </div>
                        <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Learn More →
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-visible group p-6 md:p-8 flex flex-col justify-between sm:aspect-auto md:aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                ⚡
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                Fast Results
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                                Our solutions are designed to deliver noticeable improvements quickly and effectively. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae ut minus sint quaerat voluptates iure architecto, mollitia in. Mollitia.
                            </p>
                        </div>
                        <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Discover →
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-visible group p-6 md:p-8 flex flex-col justify-between sm:aspect-auto md:aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                🛡️
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                Trusted Quality
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                                Every product goes through strict quality control to maintain excellence and safety. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil labore nobis laboriosam expedita sequi fuga doloremque iure repellat exercitationem eaque.
                            </p>
                        </div>
                        <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Our Promise →
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-visible group p-6 md:p-8 flex flex-col justify-between sm:aspect-auto md:aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-50 opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                                💚
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                                Customer First
                            </h3>
                            <p className="text-gray-600 mt-3 md:mt-5 leading-relaxed text-sm md:text-base lg:text-base text-justify">
                                We prioritize customer satisfaction and long-term relationships above everything else. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur architecto reprehenderit consequatur nostrum ex ut porro, mollitia unde. Minima.
                            </p>
                        </div>
                        <div className="relative z-10 text-sm md:text-md font-bold text-secondary mt-4 md:mt-6">
                            Join Us →
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
