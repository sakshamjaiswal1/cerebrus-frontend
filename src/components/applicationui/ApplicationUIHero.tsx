import GradientText from "../common/GradientText"

const ApplicationUIHero = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-primary mb-6">
            The Cerebrus <GradientText text="Interface" />
          </h1>
          
          <p className="text-lg text-primary opacity-70 leading-relaxed max-w-4xl">
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