import Header from "../components/common/Header"
import OurConceptHero from "../components/ourconcept/OurConceptHero"
import CVScreeningSection from "../components/ourconcept/CVScreeningSection"
import BeyondAssessmentsSection from "../components/ourconcept/BeyondAssessmentsSection"
import RedefiningInterviewsSection from "../components/ourconcept/RedefiningInterviewsSection"
import CTASection from "../components/common/CTASection"
import Footer from "../components/common/Footer"

function OurConcept() {
  return (
    <div className="bg-alt-white">
      <main className="max-w-7xl mx-auto pt-10">
        <Header />
        <OurConceptHero />
        <CVScreeningSection />
        <BeyondAssessmentsSection />
        <RedefiningInterviewsSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default OurConcept
