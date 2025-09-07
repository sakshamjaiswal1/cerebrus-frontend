import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import HowToUseHero from "../components/howto/HowToUseHero";
import HowToUseSteps from "../components/howto/HowToUseSteps";

function HowToUse() {
  return (
    <div className="bg-white">
      <main className="p-4 sm:p-6 lg:p-10">
        <Header />
        <HowToUseHero />
        <HowToUseSteps />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default HowToUse;
