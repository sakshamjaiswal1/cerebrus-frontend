import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import ProctoringHero from "../components/proctoring/ProctoringHero";
import MeasuresWeTake from "../components/proctoring/MeasuresWeTake";

function Proctoring() {
  return (
    <div className="bg-alt-white">
      <main className="max-w-6xl mx-auto pt-10">
        <Header />
        <ProctoringHero />
        <MeasuresWeTake />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default Proctoring;
