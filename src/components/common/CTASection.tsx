import GradientBackground from "./GradientBackground"
import AnimatedButton from "./AnimatedButton"

const CTASection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <GradientBackground className="rounded-2xl py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary-light mb-4">
              Try Cerebrus today!
            </h2>
            <p className="text-lg text-white mb-8">
              Book a demo
            </p>
            <AnimatedButton text="Let's Connect" />
          </div>
        </GradientBackground>
      </div>
    </section>
  )
}

export default CTASection
