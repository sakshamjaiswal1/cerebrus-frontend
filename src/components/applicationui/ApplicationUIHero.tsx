import GradientText from "../common/GradientText"

const ApplicationUIHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:pt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div>
          <GradientText text="The Cerebrus Interface" className="!font-medium" />
          <p className="text-sm sm:text-base lg:text-lg text-primary opacity-70 leading-relaxed w-full">
            Recruiters can quickly access candidate summaries, compare evaluations, and work through shortlists without unnecessary steps. Each part of the interface leads you naturally from a broad overview to deeper insight, helping teams stay focused and move with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ApplicationUIHero