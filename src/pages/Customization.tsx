import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import CustomizationHero from "../components/customization/CustomizationHero";
import CustomizationFeatures from "../components/customization/CustomizationFeatures";
import ShapeInterviewsSection from "../components/customization/ShapeInterviewsSection";
import CustomizationQuote from "../components/customization/CustomizationQuote";
import SkillBasedTuning from "../components/customization/SkillBasedTuning";

function Customization() {
  return (
    <div className="bg-white">
      <main className="p-10">
        <Header />
        <CustomizationHero />
        <CustomizationFeatures />
        <ShapeInterviewsSection />
        <CustomizationQuote />
        <SkillBasedTuning />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default Customization;
