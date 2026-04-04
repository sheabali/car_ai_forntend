import FeaturesSection from "@/components/module/Home/FeaturesPage";
import HeroSection from "@/components/module/Home/HeroSection";

const page = () => {
  return (
    <div className="flex flex-col gap-4 mt-13 mx-4">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default page;
