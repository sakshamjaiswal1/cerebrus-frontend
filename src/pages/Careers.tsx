import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CareersHero from "../components/careers/CareersHero";
import HiringSection from "../components/careers/HiringSection";
import GallerySection from "../components/careers/GallerySection";
import CultureSection from "../components/careers/CultureSection";
import GradientCTA from "../components/careers/GradientCTA";

const Careers = () => {
  return (
    <div className="bg-brand-bg">
      <Header />
      <main className="px-6 md:px-12 lg:px-24 py-12">
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
