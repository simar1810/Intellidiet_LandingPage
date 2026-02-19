import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-primary py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Image Side */}
          <div className="lg:w-1/2 w-full relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="http://clipart-library.com/new_gallery/40-400863_women-performing-yoga-with-sun-background-yoga-logo.png"
                alt="About Us"
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 w-full text-white flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About <span className="text-secondary">Dr. Kavita</span>
            </h2>

            <p className="text-white/80 mb-6 text-lg leading-relaxed text-justify">
              Dr. Kavita is a passionate and certified dietitian dedicated to
              transforming lives through personalized nutrition guidance.
              With years of experience, she helps clients achieve sustainable
              health goals and build long-term healthy habits.
            </p>

            <p className="text-white/80 mb-10 text-lg leading-relaxed text-justify">
              Her approach focuses on balanced eating, practical lifestyle
              changes, and empowering individuals with knowledge to take
              control of their well-being.
            </p>

            {/* <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg self-start lg:w-4">
              Learn More
            </button> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
