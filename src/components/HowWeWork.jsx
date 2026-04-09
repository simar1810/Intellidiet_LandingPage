"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "🥗", title: "Personalized Meal Plans", desc: "Get meal plans designed specifically for your body, lifestyle, and goals — no generic diets. Easy to follow, flexible, and built for long-term results." },
  { icon: "🏋️‍♂️", title: "Structured Workout Plans", desc: "Follow step-by-step workout routines tailored to your fitness level — whether you're a beginner or advanced. No confusion, just clear direction." },
  { icon: "🔔", title: "Daily Nudges & Reminders", desc: "Stay on track with smart reminders and guidance throughout your day — so you never lose consistency." },
  { icon: "📅", title: "Easy Appointment Booking", desc: "Book your 1:1 sessions smoothly and stay connected for regular check-ins, guidance, and support." },
  { icon: "📊", title: "Progress Tracking & Reports", desc: "Track your transformation with detailed progress reports — including weight, measurements, and overall improvement. See your growth clearly, not just feel it." },
  { icon: "✅", title: "Habit Tracking System", desc: "Build powerful daily habits that actually stick — from water intake to workouts and lifestyle routines." },
  { icon: "💬", title: "Continuous Support & Guidance", desc: "You're not doing this alone. Get regular support, feedback, and motivation whenever you need it." },
];

const testimonialImages = [
  "/images/testimonials/testimonial-1.jpg",
  "/images/testimonials/testimonial-2.jpeg",
  "/images/testimonials/testimonial-3.jpeg",
  "/images/testimonials/testimonial-4.jpg",
  "/images/testimonials/testimonial-5.jpg",
  "/images/testimonials/testimonial-6.png",
  "/images/testimonials/testimonial-7.jpg",
];

const TestimonialSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl flex items-center justify-center p-4">
      {testimonialImages.map((src, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 flex items-center justify-center p-4 ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          <img
            src={src}
            alt={`Testimonial ${index + 1}`}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
          />
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonialImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-secondary w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-amber-50 to-white" id="how-we-work">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            How We <span className="text-secondary">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <img 
                src="/images/poster02.jpeg" 
                alt="Dt. Kavita - Your Nutrition Coach" 
                className="w-full max-w-xs sm:max-w-sm rounded-2xl shadow-2xl object-cover bg-white"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <p className="text-primary font-bold text-sm">Dt. Kavita</p>
                <p className="text-secondary text-xs">Founder & Nutrition Expert</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              What You'll Get With Our Coaching
            </h3>
            <p className="text-gray-600 mb-6">
              We don't just give you advice, we give you a complete system to help you stay consistent, accountable, and get real results.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-3 items-start"
                >
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <p className="text-primary font-semibold text-sm">{feature.title}</p>
                    <p className="text-gray-500 text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center bg-secondary hover:bg-yellow-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Start Your Transformation Today
              </h3>
              <p className="text-gray-600 mb-6">
                Choose how you want to begin your journey with us. Get a free trial or download our app to get started.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <p className="text-2xl font-bold text-secondary">5000+</p>
                  <p className="text-xs text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <p className="text-2xl font-bold text-secondary">10+</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <p className="text-2xl font-bold text-secondary">5 ★</p>
                  <p className="text-xs text-gray-600">Google Reviews</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <p className="text-2xl font-bold text-secondary">100%</p>
                  <p className="text-xs text-gray-600">Personalized Plans</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919625691566?text=Hi%2C%20I%27m%20interested%20in%20the%20free%20trial%20plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get Free Trial Plan
                </a>
                <a
                  href="https://wa.me/919625691566?text=Hi%2C%20I%27m%20interested%20in%20downloading%20the%20app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  Download App
                </a>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <TestimonialSlideshow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;