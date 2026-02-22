"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Hero = () => {

    const router = useRouter();

    return (
        <section className="relative pt-20 pb-0 px-10 overflow-hidden bg-[#F8FAF7]" id="home">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm tracking-wider uppercase mt-10">
                            Eat Smart <span className="text-gray-400 mx-1">•</span> Live Well
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary">
                            Achieve Your Dream <br />
                            Body with Our <span className="text-secondary">Diet</span>
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Transform your health with customised nutrition, intelligent tools, and
                            trusted expert advice tailored to your unique lifestyle.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 -mt-3">
                            <button onClick={()=>router.push("/contact-us")} className="bg-secondary cursor-pointer hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-orange-200 hover:-translate-y-1 mb-5 ">
                                Join Now
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 relative -mt-20">
                        <div className="relative z-10 w-full max-w-[800px] ">
                            
                            <div className="relative rounded-2xl overflow-hidden md: -mt-50">
                                <Image
                                    src="/images/hero.png"
                                    alt="Healthy Eating"
                                    className="w-full h-auto object-cover"
                                    width={800}
                                    height={800}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    {/* <div className="lg:w-1/2 flex justify-center items-start relative">
  <div className="relative w-full max-w-[800px]">
    <Image
      src="/images/hero.png"
      alt="Healthy Eating"
      width={800}
      height={800}
      className="w-full h-auto rounded-2xl"
      style={{
        display: 'block',
        verticalAlign: 'top', // Crucial for Safari to remove extra bottom space
      }}
      priority
    />
  </div>
                    </div> */}
                </div>
            </div>

            {/* Wave divider at bottom */}
            {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-primary rounded-[100%] scale-x-110"></div> */}
        </section>
    );
};

export default Hero;
