import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#064e3b] text-white py-16"> {/* deep emerald green */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    {/* Left Side: Brand & Description */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Placeholder for logo if exists, or just use text/icon */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#064e3b] font-bold">
                                TN
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold tracking-widest text-lg leading-none">TRINITY</span>
                                <span className="font-bold tracking-widest text-lg leading-none">NOURISHMENTS</span>
                            </div>
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm">
                            Your partner in holistic health, bridging ancient wisdom with
                            modern science for a balanced life.
                        </p>
                    </div>

                    {/* Right Side: Contact Info */}
                    <div className="text-left md:text-right">
                        <h3 className="text-[#84cc16] font-bold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-2 text-white/90">
                            <p>garimars1@gmail.com</p>
                            <p>9845185125</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4">
                    <p>© 2026 Trinity Nourishments. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <span className="text-red-500">♥</span> for Wellness
                    </p>
                </div>
            </div>
        </footer>
    );
}
