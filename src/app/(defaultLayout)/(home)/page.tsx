import FAQ from "@/components/module/Home/FAQ/FAQ";
import FeaturesSection from "@/components/module/Home/FeaturesPage";
import HeroSection from "@/components/module/Home/HeroSection";
import HowWorks from "@/components/module/Home/HowWorks";
import PricingPage from "@/components/module/Home/Pricing";

const page = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-works">
        <HowWorks />
      </section>
      <section id="pricing">
        <PricingPage />
      </section>
      <FAQ />
    </div>
  );
};

export default page;
