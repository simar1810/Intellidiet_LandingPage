/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact-us";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "programs", "blogs"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      style={{
        background: scrolled
          ? "rgba(14, 78, 63, 0.8)"
          : "linear-gradient(135deg, #66CDAA 0%, #8FBC8F 50%, #98FB98 100%)",
      }}
      className="fixed w-full z-50 top-0 left-0 transition-all duration-300 backdrop-blur-md shadow-lg py-2 sm:py-3"
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" onClick={scrollToTop} className="flex items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="InteliDiet Logo"
              className="w-full h-full object-contain p-1"
              width={80}
              height={80}
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={scrollToTop}
            className={`text-sm uppercase tracking-widest font-medium ${isHomePage && activeSection === "home" ? "text-white" : "text-white/40 hover:text-white/70"}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-sm uppercase tracking-widest font-medium ${activeSection === "about" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("programs")}
            className={`text-sm uppercase tracking-widest font-medium ${activeSection === "programs" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection("blogs")}
            className={`text-sm uppercase tracking-widest font-medium ${activeSection === "blogs" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Latest Services
          </button>
          <button
            onClick={() => router.push("/contact-us")}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-xl hover:-translate-y-1 min-h-[40px] ${
              isContactPage
                ? "bg-white text-primary border-2 border-secondary"
                : "bg-secondary hover:bg-orange-700 text-white hover:shadow-orange-200"
            }`}
          >
            Join Now
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
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

      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/70 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div 
            style={{
              background: "linear-gradient(135deg, #66CDAA 0%, #8FBC8F 50%, #98FB98 100%)",
            }}
            className="absolute top-full left-0 w-full px-4 py-5 flex flex-col gap-2 md:hidden shadow-2xl border-t border-white/20 backdrop-blur-2xl z-50"
          >
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
            className={`text-lg font-medium py-3 ${isHomePage && activeSection === "home" ? "text-white" : "text-white/40"}`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (window.location.pathname === "/") {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/#about");
              }
            }}
            className={`text-lg font-medium py-3 ${activeSection === "about" ? "text-white" : "text-white/60"}`}
          >
            About Us
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (window.location.pathname === "/") {
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/#programs");
              }
            }}
            className={`text-lg font-medium py-3 ${activeSection === "programs" ? "text-white" : "text-white/60"}`}
          >
            Programs
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (window.location.pathname === "/") {
                document
                  .getElementById("blogs")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/#blogs");
              }
            }}
            className={`text-lg font-medium py-3 ${activeSection === "blogs" ? "text-white" : "text-white/60"}`}
          >
            Latest Services
          </button>
          <button
            onClick={() => router.push("/contact-us")}
            className={`px-6 py-3 rounded-lg font-bold text-base mt-2 ${
              isContactPage
                ? "bg-white text-primary border-2 border-secondary"
                : "bg-secondary hover:bg-orange-700 text-white"
            }`}
          >
            Join Now
          </button>
          </div>
        </>
      )}
    </nav>
  );
}
