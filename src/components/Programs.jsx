"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const programs = [
  {
    id: "transformation",
    title: "30-Day Transformation",
    subtitle: "Reset your metabolism and reclaim your confidence",
    duration: "30 Days",
    price: "₹3,500",
    icon: "🔥",
    color: "from-red-50 to-yellow-50",
    description: "The Inteli Diet 30-Day Transformation. Reset your metabolism and reclaim your confidence in less than a month.",
    phases: [
      { title: "Week 1: The Internal Cleanse (Detox & Flush)", desc: "Kickstart your journey: Dedicated to flushing out toxins and shedding stubborn water weight. Feel lighter instantly: Watch the puffiness disappear as we reset your body's natural balance." },
      { title: "Week 2: The Digestive Reset (Debloat & Control)", desc: "Cool the fire: Targeted nutrition to reduce internal inflammation. Silence the cravings: Regain control over your appetite. Beat the bloat: Say goodbye to discomfort." },
      { title: "Week 3: The Peak Performance (Rejuvenate & Shred)", desc: "Triple Threat: Weight loss, fat loss, and significant inch loss. Protein-Balanced Fuel: Rejuvenate cells with high-quality protein. Get free fat loss tea, Inteli diet app access, workout sessions, 2 consultations, 8 hour chat support." },
    ],
    features: ["Free Fat Loss Tea", "Inteli Diet App Access", "Workout Sessions", "2 Consultations", "8 Hour Chat Support"],
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    subtitle: "Transform your lifestyle and reclaim your health",
    duration: "3 Months",
    price: "₹10,500",
    icon: "⚖️",
    color: "from-yellow-50 to-amber-50",
    description: "The Inteli Diet 3-Month Personalized Weight Loss Program. This isn't just a diet; it's a guided evolution led by Dt. Kavita to help you look firm, feel light, and glow from within.",
    phases: [
      { title: "Weeks 1–2: The Kickstart", desc: "Experience your first win with a 1 to 2 kg loss as you adapt to healthier habits and sustainable lifestyle changes." },
      { title: "Week 4: The Visible Shift", desc: "Achieve visible changes in body shape and lose up to 4 kg as your metabolism finds its rhythm." },
      { title: "Week 6: The Deep Cleanse", desc: "Focus on internal healing. Detoxify the gut, cleanse the intestines, and reduce systemic inflammation." },
      { title: "Weeks 8–12: The Total Rejuvenation", desc: "Drastic inch loss and a total weight reduction of 8 to 10 kg. Better sleep, glowing skin." },
    ],
    features: ["12 Professional Consultations", "8-Hour Chat Support", "Weekly Check-ins", "Customized Meal Plans", "Calorie & Progress Tracking", "Curated Workout Sessions", "3 Complimentary Detox Teas", "15 Days Maintenance Plan"],
  },
  {
    id: "female-hormones",
    title: "Female Hormones & Weight",
    subtitle: "Empower your body and balance your hormones",
    duration: "3 Months",
    price: "₹12,500",
    monthlyPrice: "₹4,500",
    icon: "🌸",
    color: "from-pink-50 to-rose-50",
    hasMonthly: false,
    image: "/images/hormone-health.png",
    description: "Empower your body and balance your hormones with the Inteli Diet 3-Month Personalized Female Hormones & Weight Management Plan. Designed by Dt. Kavita, this four-phase clinical nutrition program targets hormonal imbalances to help you reclaim your rhythm and confidence.",
    phases: [
      { title: "Phase 1: The Insulin Reset (First 15 Days)", desc: "Stabilize & Shield: Combat insulin resistance with a high-fiber, low-glycemic protocol. Smart Fuel: A high-protein, low-carb approach designed to balance blood sugar from day one." },
      { title: "Phase 2: The Symptom Shield (Next 30 Days)", desc: "Cool the Inflammation: A dedicated anti-inflammatory diet to reduce internal swelling and hormonal discomfort. Take Control: Effortlessly regulate your periods, silence intense cravings, and begin your weight loss journey." },
      { title: "Phase 3: The Cycle Sync (Next 30 Days)", desc: "Phase-Specific Nutrition: Specialized Seed Cycling integrated with a Veg/Vegan Keto plan to mirror your body's natural rhythm. Precision Timing: Follicular Phase for egg development, Luteal Phase for PMS management." },
      { title: "Phase 4: The Transformation & Maintenance (Final Phase)", desc: "The Visible Result: Achieve significant improvements in body shape, weight, and fat loss. Long-Term Success: Enjoy regular cycles and a sustainable maintenance plan." },
    ],
    features: ["12 Dietitian Consultations", "Weekly Progress Check-ins", "8-Hour Chat Support", "Customized Meal Plans", "Calorie Counters", "Workout Sessions", "3 Free Hormone Balance Teas", "15 Days Free Maintenance"],
  },
  {
    id: "diabetes",
    title: "Diabetes Management",
    subtitle: "Scientifically backed approach to stabilize blood sugar",
    duration: "1-3 Months",
    price: "₹12,500",
    monthlyPrice: "₹4,500",
    icon: "💉",
    color: "from-blue-50 to-cyan-50",
    hasMonthly: true,
    description: "Take control of your health with a scientifically backed, structured approach. The Inteli Diet 3-Month Personalized Diabetes Management Plan is designed by Dt. Kavita to stabilize your blood sugar, reduce inflammation, and revitalize your energy through strategic nutritional phases.",
    phases: [
      { title: "Phase 1: The Craving Reset (Weeks 1–2)", desc: "Stabilize Early: Experience a noticeable reduction in food and sugar cravings. Early Results: See a steady decline in Fasting and PP blood sugar levels." },
      { title: "Phase 2: The Metabolic Shift (Week 4)", desc: "Precision Nutrition: Keto with Carb-Cycling meal plan to aggressively target high blood sugar. Energy Surge: Feel a significant boost in your daily energy levels." },
      { title: "Phase 3: The Anti-Inflammatory Cleanse (Week 6)", desc: "Gut & Systemic Healing: Transition into a specialized Vegetarian & Vegan mix to lower inflammation. Internal Repair: Focus on cellular health for long-term glucose management." },
      { title: "Phase 4: The Advanced Protocol (Weeks 8–12)", desc: "Comprehensive Care: Integration of the FODMAP diet to optimize blood sugar and support healthy BP. The Final Transformation: Weight loss, inch loss, or healthy maintenance." },
    ],
    features: ["12 Personal Dietitian Consultations", "Weekly Progress Check-ins", "8-Hour Daily Chat Support", "Calorie Counter & Progress Tracker", "Customized Workout Sessions", "3 Complimentary Detox Teas", "15-Day Maintenance Blueprint"],
  },
  {
    id: "skin",
    title: "Skin Nutrition",
    subtitle: "Rejuvenate your skin from the inside out",
    duration: "1-3 Months",
    price: "₹15,000",
    monthlyPrice: "₹5,500",
    icon: "✨",
    color: "from-purple-50 to-violet-50",
    hasMonthly: true,
    description: "Rejuvenate your skin from the inside out with Inteli Diet's Skin Nutrition Plans. Whether you need a quick glow-up or a deep clinical reset, Dt. Kavita uses the power of the 'Skin-Gut Axis' to transform your complexion.",
    phases: [
      { title: "Option 1: The 1-Month Radiance Reset", desc: "Perfect for a quick boost in glow, elasticity, and anti-aging. The Science of Glow, The Power Trio (proteins, fats, carbs), Gut-Friendly Nutrition, Personal Care Integration. Bonus: Free Skin Glow Tea and supplements." },
      { title: "Phase 1: Root Cause & Hydration (Days 1–20)", desc: "The Investigation: Identify triggers through medical blood test reports. Immediate Relief: Reduce internal inflammation, visible hydration, reduction in active pimples." },
      { title: "Phase 2: The Cleanse & Repair (Days 21–60)", desc: "The Elimination Protocol: Remove food groups triggering itching, redness, flare-ups. Structure & Strength: Clean vegetable proteins and good fats to repair skin barrier." },
      { title: "Phase 3: The Advanced Synergy (Days 61–90)", desc: "Supplements & Support: Integration of high-grade supplements. Total Improvement: Significant reduction in skin issues. The Skin-Gut Axis: Lifestyle that keeps gut healthy for flawless skin." },
    ],
    features: ["12 Dietitian Consultations", "Weekly Progress Tracking", "8-Hour Chat Support", "Custom Meal Plans", "Calorie Counters", "Workout Sessions", "3 Skin Glow Teas & Supplements", "15 Days Free Maintenance"],
  },
  {
    id: "liver",
    title: "Liver Health",
    subtitle: "Restore your vitality and support your liver",
    duration: "1-3 Months",
    price: "₹12,500",
    monthlyPrice: "₹4,500",
    icon: "🫀",
    color: "from-green-50 to-emerald-50",
    hasMonthly: true,
    description: "Restore your vitality and support your body's most vital filter with the Inteli Diet 3-Month Liver Health & Fibrosis Management Plan. Curated by Dt. Kavita, this structured nutritional journey focuses on cellular repair, inflammation reduction, and long-term liver resilience.",
    phases: [
      { title: "Phase 1: The Satvik Detox (Days 1–25)", desc: "The Ultimate Cleanse: Begin with a Clean Satvik Diet. Deep Detoxification: Light, easily digestible meals that flush out toxins. Systemic Reset: Calm the body and prepare for active repair." },
      { title: "Phase 2: The Anti-Inflammatory Build (Days 26–55)", desc: "Cellular Repair: Clean Vegetarian Protein with moderate carbs and high fiber. Grain Innovation: Millets and Gluten-Free Flours. Anti-Oxidant Power: Meals rich in antioxidants to combat fibrosis." },
      { title: "Phase 3: The Essential Nutrition & Integration (Days 56–85)", desc: "Healthy Fats for Healing: Omega-3 sources for cell membrane repair. Natural Vitality: Fresh, enzyme-rich fruits. Customized Protein: Lean Non-Vegetarian options (as per preference)." },
    ],
    features: ["12 Expert Consultations", "8-Hour Daily Chat Support", "Calorie Counters & Progress Trackers", "Weekly Check-ins", "3 Free Liver Health Herbal Teas", "15 Days Free Maintenance Plan"],
  },
];

const ProgramModal = ({ program, isOpen, onClose }) => {
  const [billingCycle, setBillingCycle] = useState("3month");

  if (!isOpen || !program) return null;

  const currentPrice = billingCycle === "monthly" && program.monthlyPrice ? program.monthlyPrice : program.price;
  const currentDuration = billingCycle === "monthly" && program.monthlyPrice ? "1 Month" : program.duration;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl overflow-hidden"
        >
          <div className={`p-6 sm:p-8 bg-gradient-to-br ${program.color} rounded-t-3xl`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{program.title}</h3>
                  <p className="text-gray-600 text-sm">{program.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar" style={{ maxHeight: "calc(90vh - 200px)" }}>
            <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

            <div className="mb-6">
              <h4 className="text-primary font-bold text-sm uppercase tracking-wide mb-4">Your Roadmap</h4>
              <div className="space-y-4">
                {program.phases.map((phase, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-sm">{phase.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-primary font-bold text-sm uppercase tracking-wide mb-4">The Inteli Diet Digital Support</h4>
              <div className="flex flex-wrap gap-2">
                {program.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1.5 bg-green-50 text-green-700 text-xs rounded-full font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              {program.hasMonthly && (
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === "monthly"
                        ? "bg-secondary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("3month")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === "3month"
                        ? "bg-secondary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    3 Months
                  </button>
                </div>
              )}
              
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Program Price</p>
                  <p className="text-3xl font-bold text-secondary">{currentPrice}</p>
                  <p className="text-gray-400 text-xs">{currentDuration}</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = "/contact-us";
                  }}
                  className="bg-secondary hover:bg-yellow-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <>
      <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden" id="programs">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Our <span className="text-secondary">Programs</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              Choose the right program for your health journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProgram(program)}
                className="group cursor-pointer"
              >
                <div className={`relative bg-gradient-to-br ${program.color} rounded-2xl p-6 sm:p-8 h-full border border-transparent hover:border-secondary/20 hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  {program.image && (
                    <div className="mb-4 -mt-4 -mx-6 sm:-mx-8">
                      <img src={program.image} alt={program.title} className="w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] h-48 object-cover" />
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    {!program.image && (
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      {program.icon}
                    </div>
                    )}
                    <span className="text-xs font-medium text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{program.subtitle}</p>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-gray-200/50">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">
                        {program.hasMonthly ? "Starting from" : "Price"}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-secondary">{program.hasMonthly ? program.monthlyPrice : program.price}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
};

export default Programs;
