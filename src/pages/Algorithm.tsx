import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import AlgorithmHero from "../components/algorithm/AlgorithmHero";
import HowItComesTogether from "../components/algorithm/HowItComesTogether";
import CoreArchitecture from "../components/algorithm/CoreArchitecture";

function Algorithm() {
  return (
    <div className="bg-alt-white">
      <div className="max-w-[1440px] mx-auto">
        <Helmet>
          <title>
            Algorithm - Cerebrus AI Technology | Advanced Interview Intelligence
          </title>
          <meta
            name="description"
            content="Discover the sophisticated algorithms powering Cerebrus AI interview platform. Learn about our core architecture, intelligent assessment framework, and how our technology delivers accurate candidate evaluations."
          />
          <meta
            name="keywords"
            content="AI algorithm, interview technology, assessment algorithm, AI architecture, interview intelligence, candidate evaluation"
          />
          <meta
            property="og:title"
            content="Cerebrus Algorithm - Advanced AI Interview Technology"
          />
          <meta
            property="og:description"
            content="Explore the cutting-edge algorithms and architecture that power Cerebrus AI interview platform for intelligent candidate assessment."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cerebrus.ai/algorithm" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Cerebrus Algorithm - AI Interview Intelligence"
          />
          <meta
            name="twitter:description"
            content="Discover the advanced algorithms behind intelligent AI interviews."
          />
          <link rel="canonical" href="https://cerebrus.ai/algorithm" />
        </Helmet>
        <main className="p-4 sm:p-6 lg:p-10">
          <Header />
          <AlgorithmHero />
          <HowItComesTogether />
          <CoreArchitecture />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Algorithm;
