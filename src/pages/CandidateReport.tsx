import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import CTASection from "../components/home/CTASection"
import StructuredInterviewReports from "../components/candidateReport/StructuredInterviewReports"
import IntegratedChat from "../components/candidateReport/IntegratedChat"

function CandidateReport() {
  return (
    <div className="bg-alt-white">
      <main className="max-w-6xl mx-auto pt-10">
        <Header />
        <StructuredInterviewReports />
        <IntegratedChat />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default CandidateReport
