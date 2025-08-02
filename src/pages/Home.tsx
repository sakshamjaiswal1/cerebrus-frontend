
import Header from "../components/common/Header"
import HeroSection from "../components/home/HeroSection"
import FeaturesSection from "../components/home/FeaturesSection"
import Experience from "../components/home/Experience"
import ExtensiveResearch from "../components/home/ExtensiveResearch"
import CompetitiveEdge from "../components/home/CompetitiveEdge"
import Footer from "../components/common/Footer"
import CTASection from "../components/home/CTASection"

function Home() {
  return (
    <div className="bg-white">
      <main className="p-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ExtensiveResearch />
        <Experience />
        <CompetitiveEdge />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default Home