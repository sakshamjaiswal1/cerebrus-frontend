import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import WhatsNewHero from "../components/whatsnew/WhatsNewHero";
import WhatsNextSection from "../components/whatsnew/WhatsNextSection";
import RecentUpdatesSection from "../components/about/RecentUpdatesSection";

function WhatsNew() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          What's New - Cerebrus AI Interview Platform | Latest Updates &
          Features
        </title>
        <meta
          name="description"
          content="Stay updated with the latest Cerebrus AI interview platform features, updates, and innovations. Discover new capabilities, improvements, and upcoming developments in AI-powered hiring technology."
        />
        <meta
          name="keywords"
          content="cerebrus updates, AI interview news, platform features, hiring technology updates, interview platform news"
        />
        <meta
          property="og:title"
          content="What's New - Cerebrus AI Interview Platform Updates"
        />
        <meta
          property="og:description"
          content="Discover the latest features and updates in Cerebrus AI interview platform for enhanced hiring experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/whats-new" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What's New - Cerebrus Platform Updates"
        />
        <meta
          name="twitter:description"
          content="Latest updates and features in our AI interview platform."
        />
        <link rel="canonical" href="https://cerebrus.ai/whats-new" />
      </Helmet>
      <main className="p-10">
        <Header />
        <WhatsNewHero />
        <WhatsNextSection />
        <RecentUpdatesSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default WhatsNew;
