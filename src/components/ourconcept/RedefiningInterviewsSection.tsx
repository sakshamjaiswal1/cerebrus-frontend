const RedefiningInterviewsSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Person with Screen */}
          <div className="bg-brand-bg rounded-2xl p-8">
            <img
              src="/our-c-4.svg"
              alt="Beyond Outdated Assessments - Modern hiring evaluation"
              className="w-full h-auto"
            />
          </div>
          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Redefining Interviews
            </h2>
            <p className="text-lg text-primary opacity-80 leading-relaxed mb-4">
              With Cerebrus, we’re rethinking the way hiring works, moving beyond outdated recruitment methods to create AI-powered interviews that feel real and deliver real results. Our platform is all about building diverse, inclusive talent communities while giving you practical benefits that matter. We help you hire faster with streamlined processes that cut down on time-to-hire.
            </p>
            <p className="text-lg text-primary opacity-80 leading-relaxed">
              Our advanced analytics offer smarter insights, revealing the actual potential in every candidate. And because we focus on people, our approach ensures meaningful and fair interactions at every step. With Cerebrus, hiring isn’t just modernized, it’s transformed into an impactful experience that meets the needs of today’s workforce.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default RedefiningInterviewsSection
