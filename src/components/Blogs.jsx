"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
    const blogs = [
        {
            title: "Simple Tips for Effective Weight Loss Every Day",
            category: "Weight Loss",
            date: "Weight Loss Plan",
            image: "https://www.allinclusive.care/wp-content/uploads/2022/05/nutritionist-in-his-office-measures-the-volume-of-his-patient-s-waist-Weight-Loss-Miami.jpg",
        },
        {
            title: "Morning Routines to Support Healthy Thyroid Function",
            category: "Thyroid",
            date: "Thyroid Management Plan",
            image: "https://www.vista-health.co.uk/media/rfllcvqg/thyroid-ultrasound.jpg?width=1440&height=720&format=webp&v=1dab8efc77af6b0",
        },
        {
            title: "Understanding Proper Nutrition for Diabetes Management",
            category: "Diabetes ",
            date: "Diabetes Management Plan",
            image: "https://tse4.mm.bing.net/th/id/OIP.R95S9mQMPd1pxVCC-K3e8gHaE8?pid=Api&P=0&h=180",
        },
        {
            title: "Fitness and Diet Tips for PCOS/PCOD Health",
            category: "PCOS / PCOD",
            date: "PCOS/PCOD Management Plan",
            image: "http://www.krupahospital.com/images/services/Pcod-pcos.jpg",
        },
    ];

    return (
        <section className="py-24 bg-[#F0FDF4]" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Our Latest <span className="text-secondary">Services</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Expert nutrition solutions designed for better health and lifestyle balance.
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
