import GradientBackground from "../common/GradientBackground"
import AnimatedButton from "../common/AnimatedButton"

const CTASection = () => {
  return (
    <section className="w-full py-16">
      <GradientBackground className="rounded-3xl lg:min-h-[200px] py-8 sm:py-16">
        {/* Content will go here later */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="xl:text-5xl text-2xl lg:text-4xl md:text-3xl font-medium text-primary-light my-4">Try Cerebrus today!</h2>
            <p className="text-lg text-white/90 mb-6">Book a demo!</p>
            <AnimatedButton text="Let's Connect" />
          </div>
        </div>
      </GradientBackground>
    </section>
  )
}

export default CTASection