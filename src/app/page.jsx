import Image from "next/image";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import PartnerInWellness from "@/components/PartnerInWellness";
import Classes from "@/components/Classes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main id="home" className="min-h-screen relative flex flex-col">
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/9625691566"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <Header></Header>

      {/* Hero Section */}
      <div className="relative flex-grow min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.png"
            alt="Wellness Background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center text-white px-4">
          <div className="mb-6 border border-white/30 rounded-full px-6 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-light tracking-widest uppercase">
              Wellness
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            Step Into <br /> Wellness,
          </h1>
          <h2 className="text-4xl md:text-6xl font-light italic mb-8 font-serif">
            Flow Into Balance
          </h2>

          <p className="max-w-lg text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Transform your health with customised nutrition,
            intelligent tools, and trusted expert advice.
          </p>
        </div>
      </div>

      <Stats />
      <HowItWorks />
      <PartnerInWellness />
      <Classes />
      <WhyChooseUs />

      <Testimonials />
      <Footer />
    </main>
  );
}
