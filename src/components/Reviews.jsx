"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    {
      name: "Anoop Goel",
      role: "Customer",
      content:
        "When I met first time with Kavita, I did not believe that I can stay on dieting but after taking her Dietitian Plan, I feel very good, energy level was so high & relaxed. Thanks Kavita for giving this",
      avatar: "https://i.pravatar.cc/150?u=jean",
    },
    {
      name: "Aisha",
      role: "Customer",
      content:
        "she is the best dietician as she gives nutritious and yummy food in her diet plan. i have reduced 16 kgs in 3 months with her healthy diet plan.She taught me which foods encourage a healthier lifestyle and healthier living.",
      avatar: "https://i.pravatar.cc/150?u=richard",
    },
    {
      name: "Sadhana Verma",
      role: "Customer",
      content:
        "I lost 4 kg in 6 weeks due to the diet. I felt various positive changes like my skin is glowing now and I was facing hairfall problem previously now its not there.Will recommend her strongly to all my friends and family.",
      avatar: "https://i.pravatar.cc/150?u=helen",
    },
    {
      name: "Divya Jindal",
      role: "Customer",
      content:
        "Just fantastic.. she is a great motivator and a coach... just doing great work... i loved to be her client..very easy, tasty and nutritious meals.. very polite and humble person #must visit",
      avatar: "https://i.pravatar.cc/150?u=robert",
    },
    {
      name: "Sakshi Sawhney",
      role: "Customer",
      content:
        "I had a pleasure of meeting Kavita Sharma when I contacted her for nutrition and weight loss counselling. With her program I learned how to understand the food I eat",
      avatar: "https://i.pravatar.cc/150?u=sofia",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute -left-6 sm:-left-10 top-1/4 w-20 h-20 sm:w-32 sm:h-32 opacity-30 sm:opacity-40 pointer-events-none">
        <img src="/images/leaf3.png" alt="" />
      </div>
      <div className="absolute -right-6 sm:-right-10 bottom-1/4 w-20 h-20 sm:w-32 sm:h-32 opacity-30 sm:opacity-40 rotate-180 pointer-events-none">
        <img src="/images/leaf3.png" alt="" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary px-2">
            Featured Customer <span className="text-secondary">Reviews</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Real stories from clients who transformed their health successfully.
          </p>
        </motion.div>

        <div className="overflow-hidden -mx-2 sm:mx-0" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 md:gap-8 mb-3 px-2 sm:px-0">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 last:mr-8"
              >
                <div className="p-5 sm:p-6 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white group h-full min-h-[280px] flex flex-col">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#F58F29"
                          className="text-secondary"
                        />
                      ))}
                    </div>
                    <Quote
                      className="text-secondary/20 group-hover:text-secondary transition-colors"
                      size={40}
                    />
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed italic">
                    "{review.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                    {/* <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-secondary/20"
                                        /> */}
                    <div>
                      <h4 className="font-bold text-primary">{review.name}</h4>
                      <p className="text-xs text-gray-400 font-medium uppercase">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Indicators (static style) */}
        {/* <div className="flex justify-center gap-2 mt-12">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div> */}
      </div>
    </section>
  );
};

export default Reviews;
