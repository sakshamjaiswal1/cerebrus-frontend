import GradientBackground from "../common/GradientBackground"
import AnimatedButton from "../common/AnimatedButton"

const CTASection = () => {
  return (
    <section className="w-full py-16">
      <GradientBackground className="rounded-3xl min-h-[300px] p-12">
        {/* Content will go here later */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-5xl font-medium text-primary-light my-4">Try Cerebrus today!</h2>
            <p className="text-lg text-white/90 mb-6">Book a demo!</p>
            <AnimatedButton text="Let's Connect" />
          </div>
        </div>
      </GradientBackground>
    </section>
  )
}

export default CTASection