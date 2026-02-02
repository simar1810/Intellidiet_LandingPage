import Image from "next/image";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import PartnerInWellness from "@/components/PartnerInWellness";
import Classes from "@/components/Classes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
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

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-6 py-6 md:px-12 max-w-7xl w-full mx-auto text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              {/* Placeholder Logo Icon */}
              <div className="w-8 h-8 rounded-full border-2 border-[#84cc16] flex items-center justify-center">
                <span className="text-[#84cc16] font-bold text-xs">In</span>
              </div>
            </div>
            <span className="text-lg font-bold tracking-widest uppercase">
              IntelliDeit
            </span>
          </div>
          <div className="flex gap-8 text-sm font-semibold tracking-wide">
            <a href="#" className="hover:text-[#84cc16] transition-colors">
              HOME
            </a>
            <a href="#" className="hover:text-[#84cc16] transition-colors">
              CONTACT
            </a>
          </div>
        </nav>

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
      <ContactForm />
      <Footer />
    </main>
  );
}
