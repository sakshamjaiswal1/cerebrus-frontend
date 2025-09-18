import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import Experience from "../components/home/Experience";
import ExtensiveResearch from "../components/home/ExtensiveResearch";
import CompetitiveEdge from "../components/home/CompetitiveEdge";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import { SlideBottomTopWrapper, SlideTopBottomWrapper } from "../components/common/wrapper";

function Home() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Cerebrus - AI-Powered Interview Platform | Revolutionize Your Hiring
          Process
        </title>
        <meta
          name="description"
          content="Transform your hiring process with Cerebrus, the advanced AI-powered interview platform. Experience realistic AI interviews, comprehensive proctoring, and detailed candidate reports. Streamline recruitment with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI interviews, hiring platform, recruitment technology, AI proctoring, candidate assessment, interview automation, HR technology"
        />
        <meta
          property="og:title"
          content="Cerebrus - AI-Powered Interview Platform"
        />
        <meta
          property="og:description"
          content="Revolutionize your hiring process with our advanced AI interview platform featuring realistic AI interactions, comprehensive proctoring, and detailed candidate insights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cerebrus - AI-Powered Interview Platform"
        />
        <meta
          name="twitter:description"
          content="Transform your hiring process with advanced AI interview technology."
        />
        <link rel="canonical" href="https://cerebrus.ai" />
      </Helmet>
      <main className="p-4 sm:p-6 lg:p-10">
        <SlideTopBottomWrapper>
          <Header />
        </SlideTopBottomWrapper>
        <HeroSection />
        <SlideBottomTopWrapper>
          <FeaturesSection />
        </SlideBottomTopWrapper>
        <SlideBottomTopWrapper>
          <Experience />
        </SlideBottomTopWrapper>
        <SlideBottomTopWrapper>
          <ExtensiveResearch />
        </SlideBottomTopWrapper>
        <SlideBottomTopWrapper>
          <CompetitiveEdge />
        </SlideBottomTopWrapper>
        <SlideBottomTopWrapper>
          <CTASection />
        </SlideBottomTopWrapper>
        <Footer />
      </main>
    </div>
  );
}

export default Home;
