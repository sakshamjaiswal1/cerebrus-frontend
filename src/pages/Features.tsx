import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import FeaturesHero from "../components/features/FeaturesHero";
import MetaHumanCard from "../components/features/MetaHumanCard";
import VigilantProctoringCard from "../components/features/VigilantProctoringCard";
import ComprehensiveReportsCard from "../components/features/ComprehensiveReportsCard";
import CustomizationCard from "../components/features/CustomizationCard";
import IntuiteDashboardCard from "../components/features/IntuiteDashboardCard";
import IntelligenceFrameworkCard from "../components/features/IntelligenceFrameworkCard";

function Features() {
  return (
    <div className="bg-white">
      <main className="p-4 sm:p-6 lg:p-10">
        <Header />
        <FeaturesHero />

        {/* Feature Cards with proper spacing */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <MetaHumanCard />
          <VigilantProctoringCard />
          <ComprehensiveReportsCard />
          <CustomizationCard />
          <IntuiteDashboardCard />
          <IntelligenceFrameworkCard />
        </div>
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default Features;
