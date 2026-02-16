"use client";
import React from "react";

const Newsletter = () => {
    return (
        <section className="bg-primary pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="text-white lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">
                            Get Free Ebook!
                        </h2>
                        <p className="text-white/80">
                            Unlock the secrets to a healthier lifestyle today.
                        </p>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <form className="flex flex-col md:flex-row items-center gap-4 bg-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full md:flex-1 bg-white px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full md:flex-1 bg-white px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 rounded-xl transition-all uppercase tracking-wider"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
