"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
            {/* Decorative leaf */}
            <div className="absolute right-100 top-5 w-64 h-64 opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                <img src="images/leaf4.png" alt="leaf" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            </div>
                            IntelliDiet
                        </h2>
                        <p className="text-white/70 leading-relaxed">
                            Don't Be a Stranger, Let'd Do Something Amazing Toghether...
                        </p>
                        <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                            Join Now
                        </button>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-8 lg:ml-12">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider">Useful Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Services", "Portfolio", "Contact Us"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/70 hover:text-secondary flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider">Contact Us</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-secondary shrink-0" size={24} />
                                <p className="text-white/70">123 Street, New York, USA</p>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-secondary shrink-0" size={24} />
                                <p className="text-white/70">+012 345 6789</p>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-secondary shrink-0" size={24} />
                                <p className="text-white/70">info@example.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative image/leaf in footer column 4 */}
                    <div className="relative">
                        <div className="absolute right-0 bottom-0 w-48 h-48 opacity-20 rotate-45">
                            <img src="images/leaf3.png" alt="leaf" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                {/* Newsletter & Copyright */}
                <div className="pt-12 border-t border-white/10 space-y-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 p-6 rounded-[2rem] border border-white/10">
                        <div className="flex items-center gap-4">
                            <Mail className="text-white" size={32} />
                            <h3 className="text-xl font-bold text-white">Subscribe Our Weekly Newsletter</h3>
                        </div>
                        <div className="w-full lg:w-1/2 flex bg-white rounded-full overflow-hidden p-1">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="flex-1 px-6 py-3 text-gray-800 focus:outline-none"
                            />
                            <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:bg-orange-600">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/50 text-sm">
                            &copy; 2024 IntelliDiet. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
