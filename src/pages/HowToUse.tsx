import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import HowToUseHero from "../components/howto/HowToUseHero";
import HowToUseSteps from "../components/howto/HowToUseSteps";

function HowToUse() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        <Helmet>
          <title>
            How to Use - Cerebrus AI Interview Platform | Step-by-Step Guide
          </title>
          <meta
            name="description"
            content="Learn how to use Cerebrus AI interview platform with our comprehensive step-by-step guide. Set up interviews, manage candidates, and generate reports with ease."
          />
          <meta
            name="keywords"
            content="how to use cerebrus, AI interview tutorial, interview platform guide, hiring software tutorial, recruitment platform setup"
          />
          <meta
            property="og:title"
            content="How to Use Cerebrus - AI Interview Platform Guide"
          />
          <meta
            property="og:description"
            content="Master Cerebrus AI interview platform with our detailed step-by-step guide for efficient hiring workflows."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cerebrus.ai/how-to-use" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="How to Use Cerebrus - AI Interview Guide"
          />
          <meta
            name="twitter:description"
            content="Step-by-step guide to using our AI interview platform."
          />
          <link rel="canonical" href="https://cerebrus.ai/how-to-use" />
        </Helmet>
        <main className="p-4 sm:p-6 lg:p-10">
          <Header />
          <HowToUseHero />
          <HowToUseSteps />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default HowToUse;
