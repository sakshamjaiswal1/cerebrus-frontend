import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          Features - Cerebrus AI Interview Platform | Advanced Hiring Technology
        </title>
        <meta
          name="description"
          content="Explore Cerebrus features: AI-powered interviews, vigilant proctoring, comprehensive reports, customization options, intuitive dashboard, and intelligent framework. Discover how our platform revolutionizes recruitment."
        />
        <meta
          name="keywords"
          content="AI interview features, proctoring technology, candidate reports, interview customization, hiring dashboard, recruitment analytics"
        />
        <meta
          property="og:title"
          content="Cerebrus Features - Advanced AI Interview Technology"
        />
        <meta
          property="og:description"
          content="Discover the powerful features of Cerebrus AI interview platform including realistic AI interactions, advanced proctoring, and comprehensive candidate insights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/features" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cerebrus Features - AI Interview Platform"
        />
        <meta
          name="twitter:description"
          content="Explore advanced AI interview features for modern recruitment."
        />
        <link rel="canonical" href="https://cerebrus.ai/features" />
      </Helmet>
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
