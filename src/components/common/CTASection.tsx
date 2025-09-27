import GradientBackground from "./GradientBackground"
import AnimatedButton from "./AnimatedButton"

const CTASection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradientBackground className="rounded-2xl py-8 sm:py-16 h-48 sm:h-auto flex items-center justify-center">
          <div className="text-center px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-light mb-2 sm:mb-4">
              Try Cerebrus today!
            </h2>
            <p className="text-base sm:text-lg text-white mb-4 sm:mb-8">
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
