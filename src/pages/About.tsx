import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import AboutHero from "../components/about/AboutHero";
import VisionSection from "../components/about/VisionSection";
import EventsSection from "../components/about/EventsSection";
import TeamSection from "../components/about/TeamSection";
import RecentUpdatesSection from "../components/about/RecentUpdatesSection";

function About() {
  return (
    <div className="bg-white">
      <main className="px-20">
        <Header isHome={false} />
        <AboutHero />
        <VisionSection />
        <EventsSection />
        <TeamSection />
        <RecentUpdatesSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default About;
