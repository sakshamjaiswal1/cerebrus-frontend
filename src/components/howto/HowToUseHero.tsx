import GradientText from "../common/GradientText"

const HowToUseHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto">
        <div className="mb-6 sm:mb-8">
          <GradientText text="How to Use Cerebrus" />
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-primary max-w-4xl">
          Let's walk you through each stage from creating a job and inviting candidates to running interviews and reviewing results.
        </p>
      </div>
    </section>
  )
}

export default HowToUseHero