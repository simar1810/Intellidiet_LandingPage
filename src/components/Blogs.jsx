"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
    const blogs = [
        {
            title: "Eating for a Healthy Heart and Clean Arteries",
            category: "Health",
            date: "12 March 2024",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        },
        {
            title: "Delicious Morning Habits for a Lasting Energy",
            category: "Health",
            date: "10 March 2024",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
        },
        {
            title: "Proper Nutrition: How 1500 Cal is Explained",
            category: "Food",
            date: "08 March 2024",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400",
        },
        {
            title: "Fitness & Nutrition: A Guide to Your Health Journey",
            category: "Health",
            date: "05 March 2024",
            image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400",
        },
    ];

    return (
        <section className="py-24 bg-[#F0FDF4]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Our Latest <span className="text-secondary">Blogs</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    {blog.category}
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <p className="text-xs text-secondary font-bold">{blog.date}</p>
                                <h3 className="text-lg font-bold text-primary leading-tight hover:text-secondary transition-colors cursor-pointer">
                                    {blog.title}
                                </h3>
                                <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors group/btn">
                                    Read More <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
