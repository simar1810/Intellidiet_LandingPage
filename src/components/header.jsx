/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ease-out ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-2 sm:py-3" : "bg-transparent py-3 sm:py-5"}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 group min-w-0"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform group-hover:scale-110 duration-500">
            <Image
              src="/images/logo.png"
              alt="InteliDiet Logo"
              className="w-full h-full object-contain p-1"
              width={80}
              height={80}
            />
          </div>
          <span className="text-base sm:text-xl md:text-2xl font-bold  truncate">
            <span
              className={`${scrolled ? "text-white/90" : "text-primary"} font-[Playfair_Display]`}
            >
              Inteli
            </span>
            <span
              style={{ color: "#f59e0b" }}
              className="font-[Playfair_Display]"
            >
              Diet
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={` ${scrolled ? "text-white/90" : "text-black/90"}  hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`${scrolled ? "text-white/90" : "text-black/90"} hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full`}
          >
            About Us
          </Link>
          <Link
            href="/#services"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                const section = document.getElementById("services");
                section?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`${scrolled ? "text-white/90" : "text-black/90"} hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full`}
          >
            Services
          </Link>
          {/* <Link href="/" className={`${scrolled ? 'text-white/90' : 'text-black/90'} hover:text-[#84bd00] transition-colors text-sm uppercase tracking-widest font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#84bd00] after:transition-all hover:after:w-full`}>
            Portfolio
          </Link> */}
          <button
            onClick={() => router.push("/contact-us")}
            className={`px-7 py-2.5 border ${scrolled ? "border-white text-white" : "border-black text-black"}  rounded-full hover:bg-[#84bd00] hover:border-[#84bd00] hover:text-black transition-all font-semibold uppercase text-xs tracking-wider cursor-pointer`}
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
          style={{
            color: scrolled ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.9)",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] px-4 py-5 flex flex-col gap-1 md:hidden shadow-2xl border-t border-white/10 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            className="text-white text-lg font-medium hover:text-[#84bd00] py-3 px-4 rounded-lg hover:bg-white/5 text-center min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-white text-lg font-medium hover:text-[#84bd00] py-3 px-4 rounded-lg hover:bg-white/5 text-center min-h-[44px] flex items-center justify-center"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
              setIsMenuOpen(false);
            }}
          >
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            className="text-white text-lg font-medium hover:text-[#84bd00] py-3 px-4 rounded-lg hover:bg-white/5 text-center min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-white text-lg font-medium hover:text-[#84bd00] py-3 px-4 rounded-lg hover:bg-white/5 text-center min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/#services"
            className="text-white text-lg font-medium hover:text-[#84bd00] py-3 px-4 rounded-lg hover:bg-white/5 text-center min-h-[44px] flex items-center justify-center"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
              setIsMenuOpen(false);
            }}
          >
            Services
          </Link>
          <button
            type="button"
            onClick={() => router.push("/contact-us")}
            className="w-full py-4 mt-2 bg-[#84bd00] text-white rounded-full font-bold uppercase tracking-wider min-h-[48px] touch-manipulation"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}
