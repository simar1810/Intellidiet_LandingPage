"use client";

import Header from "../../components/header";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    location: "",
    occupation: "",
    primaryGoal: "",
    otherGoal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const finalGoal =
      formData.primaryGoal === "Other" && formData.otherGoal.trim() !== ""
        ? formData.otherGoal
        : formData.primaryGoal;
    // Structured as a single WhatsApp message (no backend)
    const message = [
      "*New enquiry – InteliDiet*",
      "",
      "*Name:* " + formData.fullName,
      "*Email:* " + formData.email,
      "*Age:* " + formData.age,
      "*Gender:* " + formData.gender,
      "*Height:* " + formData.height + " cm",
      "*Weight:* " + formData.weight + " kg",
      "*Location:* " + formData.location,
      "*Occupation:* " + formData.occupation,
      "*Primary goal:* " + finalGoal,
    ].join("\n");
    const whatsappUrl = `https://wa.me/919625691566?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm";
  const selectClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm appearance-none";

  const hours = [
    { day: "Sunday", time: "Closed", closed: true },
    { day: "Mon – Thu", time: "9 A.M – 7 P.M", closed: false },
    { day: "Friday", time: "9 A.M – 5 P.M", closed: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF7]">
      <Header />

      <section className="bg-primary pt-32 sm:pt-36 md:pt-40 pb-10 sm:pb-14 md:pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center px-2">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Let&apos;s Meet &{" "}
            <span className="text-secondary">Talk Nutrition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 sm:mt-4 text-white/85 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Send us a message and we&apos;ll get back to you. Your health goals are our priority!
          </motion.p>
        </div>
      </section>

      <section className="flex-1 py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
            {/* Left: Contact info & hours */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8"
              >
                <h2 className="text-lg font-bold text-primary uppercase tracking-wider mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  <a
                    href="mailto:nutricurediet@gmail.com"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-secondary" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                      <p className="text-primary font-medium break-all mt-0.5">nutricurediet@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:9625691566"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-secondary" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</p>
                      <p className="text-primary font-medium mt-0.5">96256 91566</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
              >
                <h2 className="text-lg font-bold text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  Hours
                </h2>
                <ul className="space-y-3">
                  {hours.map((item) => (
                    <li
                      key={item.day}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium text-primary">{item.day}</span>
                      <span className={item.closed ? "text-red-500 font-medium" : "text-gray-600"}>
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-10 min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
                  Share your details and goals. We&apos;ll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="number"
                        name="age"
                        placeholder="Age *"
                        value={formData.age}
                        onChange={handleChange}
                        className={inputClass}
                        min={1}
                        max={120}
                        required
                      />
                    </div>
                    <div>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={selectClass}
                        required
                      >
                        <option value="">Select Gender *</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="number"
                        name="height"
                        placeholder="Height (cm) *"
                        value={formData.height}
                        onChange={handleChange}
                        className={inputClass}
                        min={1}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="weight"
                        placeholder="Weight (kg) *"
                        value={formData.weight}
                        onChange={handleChange}
                        className={inputClass}
                        min={1}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location (City) *"
                      value={formData.location}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="">Select Occupation *</option>
                      <option value="Sedentary">Sedentary</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Active">Active</option>
                    </select>
                  </div>

                  <div>
                    <select
                      name="primaryGoal"
                      value={formData.primaryGoal}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="">Select Primary Goal *</option>
                      <option value="Fat loss">Fat loss</option>
                      <option value="Muscle gain">Muscle gain</option>
                      <option value="Improve stamina">Improve stamina</option>
                      <option value="Manage diabetes">Manage diabetes</option>
                      <option value="Improve gut health">Improve gut health</option>
                      <option value="PCOS management">PCOS management</option>
                      <option value="Blood pressure control">Blood pressure control</option>
                      <option value="General wellness">General wellness</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {formData.primaryGoal === "Other" && (
                    <div>
                      <input
                        type="text"
                        name="otherGoal"
                        placeholder="Specify your goal"
                        value={formData.otherGoal}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/30"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p className="text-center text-gray-500 text-xs mt-2">
                    You&apos;ll be taken to WhatsApp to send this message to us.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
