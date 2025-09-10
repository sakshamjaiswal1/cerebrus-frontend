import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import ProctoringHero from "../components/proctoring/ProctoringHero";
import MeasuresWeTake from "../components/proctoring/MeasuresWeTake";

function Proctoring() {
  return (
    <div className="bg-alt-white">
      <Helmet>
        <title>
          Proctoring - Cerebrus AI Interview Platform | Advanced Security &
          Monitoring
        </title>
        <meta
          name="description"
          content="Learn about Cerebrus advanced proctoring technology ensuring interview integrity. Discover our comprehensive security measures, monitoring systems, and anti-cheating protocols for fair candidate assessment."
        />
        <meta
          name="keywords"
          content="interview proctoring, AI proctoring, interview security, anti-cheating, interview monitoring, assessment integrity"
        />
        <meta
          property="og:title"
          content="Cerebrus Proctoring - Advanced Interview Security"
        />
        <meta
          property="og:description"
          content="Explore Cerebrus comprehensive proctoring technology that ensures interview integrity and fair candidate assessment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/proctoring" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cerebrus Proctoring - Interview Security"
        />
        <meta
          name="twitter:description"
          content="Advanced proctoring technology for secure AI interviews."
        />
        <link rel="canonical" href="https://cerebrus.ai/proctoring" />
      </Helmet>
      <main className="max-w-6xl mx-auto pt-4 sm:pt-6 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <Header />
        <ProctoringHero />
        <MeasuresWeTake />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default Proctoring;
