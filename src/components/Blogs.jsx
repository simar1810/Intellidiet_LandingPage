"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919625691566";

const Blogs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const blogs = [
    {
      title: "Weight Loss",
      description: "Sustainable and science-backed diet plans tailored to help you shed pounds while keeping your energy levels high.",
      image: "/images/weight_loss.png",
      price: "₹10,500",
    },
    {
      title: "Diabetes Management",
      description: "Personalized nutrition strategies to naturally stabilize your blood sugar and improve your metabolic health.",
      image: "/images/diabetes_management.png",
      price: "₹12,500",
    },
    {
      title: "PCOS/PCOD Management",
      description: "Holistic dietary approaches designed to restore hormonal balance, boost fertility, and manage symptoms.",
      image: "/images/pcos.png",
      price: "₹12,000",
    },
    {
      title: "Skin Nutrition",
      description: "Unlock your natural glow from within with nutrient-dense meals that promote radiant, clear, and youthful skin.",
      image: "/images/skin_nutrition.png",
      price: "₹10,000",
    },
    {
      title: "Liver Health",
      description: "Detoxify and rejuvenate your body with targeted nutrition to support optimal liver function and overall vitality.",
      image: "/images/liver_health.png",
      price: "₹11,000",
    },
    {
      title: "30 Day Transformation",
      description: "A comprehensive, results-driven nutrition bootcamp to kickstart your metabolism and transform your habits.",
      image: "/images/transformation.png",
      price: "₹4500",
    },
  ];

  const openModal = (blog) => {
    setSelectedService(blog);
    setFormData({ name: "", phone: "", message: "" });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) return;
    const lines = [
      "*Service enquiry – InteliDiet*",
      "",
      "*Service:* " + selectedService.title,
      "*Name:* " + (formData.name || "—"),
      "*Phone:* " + (formData.phone || "—"),
    ];
    if (formData.message.trim())
      lines.push("*Message:* " + formData.message.trim());
    const text = lines.join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    closeModal();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm";

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-[#F0FDF4] overflow-hidden"
      id="blogs"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary px-2">
            Our Latest <span className="text-secondary">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Expert nutrition solutions designed for better health and lifestyle
            balance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <motion.button
              type="button"
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => openModal(blog)}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-left w-full cursor-pointer border-0 min-w-0"
            >
              <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-secondary transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm">{blog.description}</p>
                <p className="text-secondary font-bold text-lg">{blog.price}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Service enquiry modal */}
      <AnimatePresence>
        {modalOpen && selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto mx-4 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2
                    id="service-modal-title"
                    className="text-xl font-bold text-primary"
                  >
                    Enquire about this service
                  </h2>
                  <p className="text-secondary font-semibold text-sm mt-1">
                    {selectedService.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={handleFormChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number *"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message (optional)"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={3}
                    className={inputClass + " resize-none"}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blogs;
