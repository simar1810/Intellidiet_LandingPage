import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id='contact' className="bg-[#064e3b] text-white py-16"> {/* deep emerald green */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    {/* Left Side: Brand & Description */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-20 h-20">
                                <Image
                                    src="/images/logo.png"
                                    alt="Trinity Nourishments Logo"
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold tracking-widest text-4xl leading-none">InteliDiet</span>
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
                            <p>nutricurediet@gmail.com</p>
                            <p>96256 91566</p>
                            <div className="flex gap-4 mt-4">
                                <a
                                    href="https://www.instagram.com/dietiitiankavita?igsh=MTE1OXZsNGhjbnhjZg=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-[#84cc16] transition-colors"
                                >
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kavita-nutritionist-dietitian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-[#84cc16] transition-colors"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4">
                    <p>© 2026 InteliDiet. All rights reserved.</p>
                    <p className="flex items-center gap-1 text-lg md:text-xl">
                        Made with <span className="text-red-500">♥</span> for WellnessZ
                    </p>
                </div>
            </div>
        </footer>
    );
}
