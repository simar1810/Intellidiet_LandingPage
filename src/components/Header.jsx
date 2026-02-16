"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Service", href: "/service" },
        { name: "Pages", href: "/pages" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">I</span>
                    </div>
                    <span className="text-2xl font-bold text-primary tracking-tight">
                        IntelliDiet
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="text-gray-700 hover:text-primary transition-colors">
                        <Search size={22} />
                    </button>
                    <button className="text-gray-700 hover:text-primary transition-colors">
                        <User size={22} />
                    </button>
                    <Link
                        href="/get-started"
                        className="bg-secondary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-700 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                        <button className="text-gray-700">
                            <Search size={24} />
                        </button>
                        <button className="text-gray-700">
                            <User size={24} />
                        </button>
                    </div>
                    <Link
                        href="/get-started"
                        className="bg-secondary text-white text-center py-3 rounded-xl font-bold mt-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
