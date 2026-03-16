"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const router = useRouter();
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section
      className="min-h-screen relative pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#1a1a2e]"
      id="home"
      style={{
        backgroundImage: "url('/bg-frame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 min-w-0">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1 px-4 py-2 bg-white/10 text-white rounded-full font-bold text-sm tracking-wider uppercase"
            >
              Eat Smart <span className="text-white/60 mx-1">•</span> Live Well
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              Achieve Your Dream <br className="hidden sm:block" />
              <span className="sm:inline">Body with Our </span>
              <span className="text-secondary">Diet</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your health with customised nutrition, intelligent
              tools, and trusted expert advice tailored to your unique
              lifestyle.
              <div className="flex flex-col mt-4">
                <span className="text-gray-300">
                  An initiative by
                  <span className="ml-1 text-secondary font-semibold">
                    Dt. Kavita
                  </span>
                </span>

                <span className="text-gray-300">
                  Founder of Intelidiet{" "}
                  <span className="ml-1 text-gray-400 italic">
                    (Earlier Nutricure diet)
                  </span>
                </span>
              </div>



            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="bg-secondary cursor-pointer hover:bg-orange-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-orange-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[48px] touch-manipulation"
              >
                Join Now
              </button>
              <button
                onClick={() => router.push("/app")}
                className="bg-white cursor-pointer hover:bg-gray-50 text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[48px] touch-manipulation flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Download App
              </button>
            </motion.div>

            <div className="mt-6 flex flex-col items-center lg:items-start gap-1">
              <span className="ml-1 text-gray-400 italic">
                (Plans starting at{" "}
                <span className="text-secondary font-bold">₹1000</span>.)
              </span>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-2 self-end">
            {/* Added self-end to push the whole block to the bottom of the flex container */}

            <div className="relative z-10 w-full max-w-[650px] mx-auto">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex items-end">
                  {/* items-end ensures all slides align to the bottom */}

                  {/* Slide 1: App Mockup */}
                  <div className="embla__slide flex-[0_0_100%] min-w-0 flex justify-center items-end">
                    <div className="relative w-full mb-20 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                      <Image
                        src="/HWD_Mockup.png"
                        alt="Diet App Mockup"
                        fill
                        className="object-contain object-bottom"
                        priority
                      />
                    </div>
                  </div>
                  {/* Slide 2: Tea Advertisement */}
                  <div className="embla__slide flex-[0_0_100%] min-w-0 flex justify-center items-end">
                    <div className="relative w-full mb-20 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                      <Image
                        src="/images/tea_advertisement.jpeg"
                        alt="Tea Advertisement"
                        fill
                        className="object-contain object-bottom"
                        priority
                      />
                    </div>
                  </div>

                  {/* Slide 3: Dt. Kavita - Flush to bottom */}
                  <div className="embla__slide flex-[0_0_100%] min-w-0 flex justify-center items-end">
                    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
                      <Image
                        src="/images/kavita-mam.png"
                        alt="Dt. Kavita"
                        fill
                        className="object-contain object-bottom"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
