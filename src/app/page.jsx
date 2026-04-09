'use client'
import Header from "../components/header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import Programs from "../components/Programs";
import NutritionBible from "../components/NutritionBible";
import Reviews from "../components/Reviews";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutUs";
import AppFeatures from "../components/AppFeatures";
import WhatToExpect from "../components/WhatToExpect";
import TeaAdvertisement from "../components/TeaAdvertisement";
import HowWeWork from "../components/HowWeWork";

export default function Home() {
  return (
    <main className="min-h-screen min-w-0 overflow-x-hidden">
      <Header />
      <Hero />
      {/* <Newsletter /> */}
      {/* <AppFeatures /> */}
      <AboutSection />
      <WhyWorkWithUs />
      <Programs />
      <HowWeWork />
      <WhatToExpect />
      <NutritionBible />
      <TeaAdvertisement />
      <Reviews />
      <Blogs />
      <Footer />
    </main>
  );
}
