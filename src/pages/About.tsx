import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import AboutHero from "../components/about/AboutHero";
import VisionSection from "../components/about/VisionSection";
import EventsSection from "../components/about/EventsSection";
import TeamSection from "../components/about/TeamSection";
import RecentUpdatesSection from "../components/about/RecentUpdatesSection";
import {
  SlideBottomTopWrapper,
  SlideLeftRightWrapper,
  SlideTopBottomWrapper,
} from "../components/common/wrapper";

function About() {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto">
        <Helmet>
          <title>
            About Cerebrus - Pioneering AI Interview Technology | Our Mission &
            Team
          </title>
          <meta
            name="description"
            content="Learn about Cerebrus, the innovative AI interview platform revolutionizing recruitment. Discover our mission, vision, team, and commitment to transforming the hiring process with cutting-edge technology."
          />
          <meta
            name="keywords"
            content="about cerebrus, AI interview company, recruitment technology team, hiring innovation, AI interview mission"
          />
          <meta
            property="og:title"
            content="About Cerebrus - Pioneering AI Interview Technology"
          />
          <meta
            property="og:description"
            content="Discover the team and mission behind Cerebrus, the revolutionary AI interview platform transforming recruitment processes worldwide."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cerebrus.ai/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="About Cerebrus - AI Interview Innovation"
          />
          <meta
            name="twitter:description"
            content="Meet the team revolutionizing hiring with AI interview technology."
          />
          <link rel="canonical" href="https://cerebrus.ai/about" />
        </Helmet>
        <main className="px-4 sm:px-6 lg:px-20 pt-[20px] lg:pt-[56px]">
          <SlideTopBottomWrapper>
            <Header isHome={false} />
          </SlideTopBottomWrapper>
          <SlideBottomTopWrapper>
            <AboutHero />
          </SlideBottomTopWrapper>
          <SlideBottomTopWrapper>
            <VisionSection />
          </SlideBottomTopWrapper>
          <SlideLeftRightWrapper>
            <EventsSection />
          </SlideLeftRightWrapper>
          <SlideLeftRightWrapper>
            <TeamSection />
          </SlideLeftRightWrapper>
          <SlideLeftRightWrapper>
            <RecentUpdatesSection />
          </SlideLeftRightWrapper>
          <SlideBottomTopWrapper>
            <CTASection />
          </SlideBottomTopWrapper>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default About;
