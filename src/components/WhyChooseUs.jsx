"use client";
import React from "react";
import { Shield, Star, Zap, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Personalized Nutrition Plans", description: "Tailored diet plans based on your health goals, lifestyle, and preferences to achieve sustainable results.", icon: <Shield className="w-8 h-8" />, color: "bg-yellow-50", iconColor: "text-yellow-600" },
    { title: "Trusted by Clients", description: "Our certified nutritionists provide reliable guidance to help you improve overall wellness and health.", icon: <Star className="w-8 h-8" />, color: "bg-green-50", iconColor: "text-green-500" },
    { title: "Quick & Effective Results", description: "Achieve your fitness and health goals faster with scientifically-backed nutrition strategies.", icon: <Zap className="w-8 h-8" />, color: "bg-blue-50", iconColor: "text-blue-500" },
    { title: "Expert Support", description: "Get continuous guidance and support from our team to stay motivated and on track.", icon: <Headphones className="w-8 h-8" />, color: "bg-cyan-50", iconColor: "text-cyan-500" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Why Choose <span className="text-secondary">Us</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Our certified nutritionists provide personalized diet plans and expert guidance to help you achieve your health safely and effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 transition-shadow duration-300 hover:shadow-xl group bg-white min-w-0"
            >
              <div className={`${item.color} ${item.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-500 line-clamp-3">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
