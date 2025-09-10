import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          Customization - Cerebrus AI Interview Platform | Tailored Interview
          Solutions
        </title>
        <meta
          name="description"
          content="Customize your AI interview experience with Cerebrus. Shape interviews to match your company culture, adjust skill-based assessments, and create personalized interview experiences for optimal candidate evaluation."
        />
        <meta
          name="keywords"
          content="interview customization, AI interview personalization, skill-based assessment, interview configuration, hiring customization"
        />
        <meta
          property="og:title"
          content="Cerebrus Customization - Tailored AI Interview Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Cerebrus allows you to customize AI interviews to match your specific hiring needs and company culture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/customization" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cerebrus Customization - Personalized AI Interviews"
        />
        <meta
          name="twitter:description"
          content="Customize AI interviews to fit your hiring needs perfectly."
        />
        <link rel="canonical" href="https://cerebrus.ai/customization" />
      </Helmet>
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
