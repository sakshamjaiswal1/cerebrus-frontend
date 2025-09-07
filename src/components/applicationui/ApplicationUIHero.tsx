import GradientText from "../common/GradientText"

const ApplicationUIHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4 sm:mb-6">
            The Cerebrus <GradientText text="Interface" />
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-primary opacity-70 leading-relaxed max-w-4xl">
            Recruiters can quickly access candidate summaries, compare evaluations, and work through shortlists without unnecessary steps. 
            Each part of the interface leads you naturally from a broad overview to deeper insights, helping teams stay focused and move with 
            confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ApplicationUIHero