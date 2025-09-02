import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import CTASection from "../components/home/CTASection"
import AlgorithmHero from "../components/algorithm/AlgorithmHero"
import HowItComesTogether from "../components/algorithm/HowItComesTogether"
import CoreArchitecture from "../components/algorithm/CoreArchitecture"

function Algorithm() {
  return (
    <div className="bg-alt-white">
      <main className="max-w-6xl mx-auto pt-10">
        <Header />
        <AlgorithmHero />
        <HowItComesTogether />
        <CoreArchitecture />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default Algorithm
