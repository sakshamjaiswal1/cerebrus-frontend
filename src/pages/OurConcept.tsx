import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import OurConceptHero from "../components/ourconcept/OurConceptHero";
import CVScreeningSection from "../components/ourconcept/CVScreeningSection";
import BeyondAssessmentsSection from "../components/ourconcept/BeyondAssessmentsSection";
import RedefiningInterviewsSection from "../components/ourconcept/RedefiningInterviewsSection";
import CTASection from "../components/common/CTASection";
import Footer from "../components/common/Footer";

function OurConcept() {
  return (
    <div className="bg-alt-white">
      <Helmet>
        <title>
          Our Concept - Cerebrus AI Interview Platform | Revolutionary Hiring
          Approach
        </title>
        <meta
          name="description"
          content="Discover Cerebrus revolutionary approach to hiring. Beyond traditional assessments, we redefine interviews with AI technology, comprehensive CV screening, and intelligent candidate evaluation."
        />
        <meta
          name="keywords"
          content="interview concept, AI hiring approach, recruitment innovation, interview redefinition, CV screening technology, assessment evolution"
        />
        <meta
          property="og:title"
          content="Cerebrus Our Concept - Revolutionary AI Interview Approach"
        />
        <meta
          property="og:description"
          content="Explore how Cerebrus is redefining the hiring process with innovative AI interview technology and comprehensive candidate assessment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/our-concept" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cerebrus Our Concept - AI Interview Innovation"
        />
        <meta
          name="twitter:description"
          content="Discover our revolutionary approach to AI-powered interviews."
        />
        <link rel="canonical" href="https://cerebrus.ai/our-concept" />
      </Helmet>
      <main className="max-w-7xl mx-auto pt-10">
        <Header />
        <OurConceptHero />
        <CVScreeningSection />
        <BeyondAssessmentsSection />
        <RedefiningInterviewsSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default OurConcept;
