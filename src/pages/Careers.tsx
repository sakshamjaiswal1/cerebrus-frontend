import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CareersHero from "../components/careers/CareersHero";
import HiringSection from "../components/careers/HiringSection";
import GallerySection from "../components/careers/GallerySection";
import CultureSection from "../components/careers/CultureSection";
import GradientCTA from "../components/careers/GradientCTA";

const Careers = () => {
  return (
    <div className="bg-brand-bg">
      <Helmet>
        <title>Careers - Join Cerebrus | AI Interview Technology Jobs</title>
        <meta
          name="description"
          content="Join the Cerebrus team and help revolutionize hiring with AI interview technology. Explore career opportunities in AI, engineering, and recruitment technology. Be part of the future of hiring."
        />
        <meta
          name="keywords"
          content="cerebrus careers, AI jobs, interview technology careers, recruitment tech jobs, AI engineering positions"
        />
        <meta
          property="og:title"
          content="Careers at Cerebrus - AI Interview Technology Jobs"
        />
        <meta
          property="og:description"
          content="Join Cerebrus and be part of the team revolutionizing hiring with cutting-edge AI interview technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers at Cerebrus - AI Technology Jobs"
        />
        <meta
          name="twitter:description"
          content="Join our team and revolutionize hiring with AI technology."
        />
        <link rel="canonical" href="https://cerebrus.ai/careers" />
      </Helmet>
      <Header />
      <main className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
        <CareersHero />
        <HiringSection />
        <GallerySection />
        <CultureSection />
      </main>
      <GradientCTA />
      <Footer />
    </div>
  );
};

export default Careers;
