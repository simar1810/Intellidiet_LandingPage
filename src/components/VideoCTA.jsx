"use client";
import React from "react";
import { Play } from "lucide-react";

const VideoCTA = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1543332164-6e82f3555182?auto=format&fit=crop&q=80&w=1600"
                    alt="Video Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 px-4">
                <button className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary shadow-2xl">
                        <Play fill="currentColor" size={32} className="ml-1" />
                    </div>
                </button>

                <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight italic">
                    Persatis Unde Amnis Natus Sit Tatem <br /> Eccus Dolorem
                </h2>
            </div>

            {/* Decorative leaf */}
            <div className="absolute top-10 right-10 w-40 h-40 opacity-30 transform rotate-45 pointer-events-none">
                <img src="https://cdn-icons-png.flaticon.com/512/2909/2909808.png" alt="leaf" className="w-full h-full object-contain" />
            </div>
        </section>
    );
};

export default VideoCTA;
