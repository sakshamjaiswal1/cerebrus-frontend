import { Helmet } from "react-helmet-async";
import CTASection from "../components/common/CTASection";
import Footer from "../components/common/Footer";
import Header2 from "../components/common/Header2";
import FamiliarCustomizable from "../components/meetahuman/FamiliarCustomizable";
import MeetAHumanHero from "../components/meetahuman/MeetAHumanHero";
import ObjectivityBuiltIn from "../components/meetahuman/ObjectivityBuiltIn";
import ResponsiveByDesign from "../components/meetahuman/ResponsiveByDesign";
import TheRealismLayer from "../components/meetahuman/TheRealismLayer";

const MeetAHuman = () => {
  return (
    <div className="bg-primary">
      <Helmet>
        <title>
          Meet a Human - Cerebrus AI Interview Technology | Realistic AI
          Interactions
        </title>
        <meta
          name="description"
          content="Experience the future of interviews with Cerebrus AI. Our realistic AI interviewers provide natural, engaging conversations while maintaining objectivity and fairness in the hiring process."
        />
        <meta
          name="keywords"
          content="AI interviewer, realistic AI, human-like AI, interview technology, AI conversation, hiring AI"
        />
        <meta
          property="og:title"
          content="Meet a Human - Cerebrus AI Interview Technology"
        />
        <meta
          property="og:description"
          content="Discover how Cerebrus creates realistic AI interviewers that provide natural, engaging candidate experiences while ensuring fair and objective assessments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/meet-a-human" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meet a Human - Realistic AI Interviewers"
        />
        <meta
          name="twitter:description"
          content="Experience natural AI interview interactions with Cerebrus."
        />
        <link rel="canonical" href="https://cerebrus.ai/meet-a-human" />
      </Helmet>
      <main className="p-4 sm:p-6 lg:p-10">
        <Header2 />
        <MeetAHumanHero />
        <TheRealismLayer />
        <ResponsiveByDesign />
        <ObjectivityBuiltIn />
        <FamiliarCustomizable />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MeetAHuman;
