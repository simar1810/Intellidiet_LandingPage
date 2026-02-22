"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";

const navLinks = [
  { title: "Home", href: "/#home" },
  { title: "About Us", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/dietiitiankavita?igsh=MTE1OXZsNGhjbnhjZg==", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/kavita-nutritionist-dietitian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
];

const Footer = () => {
  const router = useRouter();

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" aria-hidden>
        <img src="/images/leaf4.png" alt="" className="absolute -top-12 -right-12 w-48 h-48 object-contain" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl pt-12 sm:pt-16 pb-6 sm:pb-8 md:pt-20 md:pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-10 lg:gap-16 mb-10 sm:mb-14">
          <div className="space-y-4 sm:space-y-5 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                <Image src="/images/logo.png" alt="" width={48} height={48} className="object-contain p-1" />
              </span>
              <span className="text-2xl font-bold text-white tracking-tight">InteliDiet</span>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed">
              Your partner in personalized nutrition and lasting wellness.
            </p>
            <button
              type="button"
              onClick={() => router.push("/contact-us")}
              className="inline-flex items-center bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/90 active:scale-[0.98] transition-all duration-200"
            >
              Join Now
            </button>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 opacity-90">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/75 hover:text-secondary text-sm transition-colors duration-200 focus:outline-none focus:text-secondary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 opacity-90">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:9625691566"
                className="flex items-center gap-3 text-white/75 hover:text-secondary text-sm transition-colors duration-200 focus:outline-none focus:text-secondary"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={16} className="text-secondary" />
                </span>
                96256 91566
              </a>
              <a
                href="mailto:nutricurediet@gmail.com"
                className="flex items-center gap-3 text-white/75 hover:text-secondary text-sm transition-colors duration-200 break-all focus:outline-none focus:text-secondary"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={16} className="text-secondary" />
                </span>
                nutricurediet@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs order-2 sm:order-1">
            &copy; 2026 InteliDiet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Credits */}
        <p className="mt-6 text-center text-white/40 text-xs flex flex-wrap items-center justify-center gap-1.5">
          Made with <span className="text-red-400">❤️</span> by{" "}
          <a href="https://wellnessz.in" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
            <img src="https://wellnessz.in/images/WellnessZ.svg" alt="WellnessZ" className="h-3.5 inline-block mx-0.5 align-middle" />
          </a>{" "}
          in India{" "}
          <img src="https://flagcdn.com/w40/in.png" alt="" className="h-3.5 inline-block align-middle ml-0.5" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
