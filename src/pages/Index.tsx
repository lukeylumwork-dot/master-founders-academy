import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import EducationPricing from "@/components/sections/EducationPricing";
import AcademyPricing from "@/components/sections/AcademyPricing";
import FAQ from "@/components/sections/FAQ";
import FeaturedReflection from "@/components/sections/FeaturedReflection";
import About from "@/components/sections/About";
import ClosingCTA from "@/components/sections/ClosingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <EducationPricing />
        <AcademyPricing />
        <FAQ />
        <FeaturedReflection />
        <About />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
