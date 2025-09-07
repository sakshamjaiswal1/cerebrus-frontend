import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import WhatsNewHero from "../components/whatsnew/WhatsNewHero";
import WhatsNextSection from "../components/whatsnew/WhatsNextSection";
import RecentUpdatesSection from "../components/about/RecentUpdatesSection";

function WhatsNew() {
  return (
    <div className="bg-white">
      <main className="p-4 sm:p-6 lg:p-10">
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
