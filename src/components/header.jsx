/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 px-5 lg:px-25 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo with white background handled via container */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12 duration-500">
            <Image src="/images/logo.png" alt="IntelliDiet Logo" className="w-full h-full object-contain p-1" width={80} height={80} />
          </div>
          <span className="text-white text-xl md:text-2xl font-bold tracking-widest uppercase">IntelliDiet</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-white/90 hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full">
            Home
          </Link>
          <Link href="/privacy-policy" className="text-white/90 hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full">
            Privacy
          </Link>
          <Link href="/terms-and-conditions" className="text-white/90 hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full">
            Terms
          </Link>
          {/* <button className="px-7 py-2.5 border border-white text-white rounded-full hover:bg-[#84bd00] hover:border-[#84bd00] hover:text-black transition-all font-semibold uppercase text-xs tracking-wider">
            Join Now
          </button> */}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] p-6 flex flex-col gap-6 md:hidden shadow-2xl border-t border-white/10">
          <Link href="/" className="text-white text-lg font-medium hover:text-[#84bd00] text-center" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/privacy-policy" className="text-white text-lg font-medium hover:text-[#84bd00] text-center" onClick={() => setIsMenuOpen(false)}>
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-white text-lg font-medium hover:text-[#84bd00] text-center" onClick={() => setIsMenuOpen(false)}>
            Terms & Conditions
          </Link>
          {/* <button className="w-full py-3 bg-[#84bd00] text-white rounded-full font-bold uppercase tracking-wider">
            Join Now
          </button> */}
        </div>
      )}
    </nav>
  );
}