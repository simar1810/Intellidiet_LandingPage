"use client";
import React from "react";

const WhyWorkWithUs = () => {
    return (
        <section className="py-24 bg-[#F0FDF4] rounded-[50px] mx-4 md:mx-10 my-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Why Work with us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mock placeholders for images/videos in the design */}
                    <div className="aspect-video bg-gray-200 rounded-[2rem] shadow-inner flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full bg-gradient-to-tr from-gray-200 to-gray-300 transform transition-transform group-hover:scale-105 duration-700"></div>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-[2rem] shadow-inner flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 transform transition-transform group-hover:scale-105 duration-700"></div>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-[2rem] shadow-inner flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full bg-gradient-to-tr from-gray-200 to-gray-300 transform transition-transform group-hover:scale-105 duration-700"></div>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-[2rem] shadow-inner flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 transform transition-transform group-hover:scale-105 duration-700"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
