import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import NutritionBible from "@/components/NutritionBible";
import VideoCTA from "@/components/VideoCTA";
import Reviews from "@/components/Reviews";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <Newsletter /> */}
      <AboutSection/>
      <WhyChooseUs />
      <WhyWorkWithUs />
      <NutritionBible />
      <VideoCTA />
      <Reviews />
      <Blogs />
      <Footer />
    </main>
  );
}
