const BeyondAssessmentsSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Person with Screen */}
          <div className="bg-brand-bg rounded-2xl p-8">
            <img
              src="/our-c-2.svg"
              alt="Beyond Outdated Assessments - Modern hiring evaluation"
              className="w-full h-auto"
            />
          </div>
          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-4xl font-medium text-primary mb-6">
              Beyond Outdated Assessments
            </h2>
            <p className="text-lg text-primary opacity-80 leading-relaxed mb-4">
              Modern hiring is all about adaptability and truly understanding candidates, but traditional assessments struggle to keep up. Standardized tests stick to a rigid, one-size-fits-all approach, overlooking the unique experiences, skills, and backgrounds that make each candidate stand out. These outdated methods don't just feel disconnected; they also fail to measure real-world problem-solving abilities.
            </p>
            <p className="text-lg text-primary opacity-80 leading-relaxed">
              Cerebrus' dynamic and practical assessments are built for today's workforce, reflecting the challenges candidates face in real scenarios. We go beyond the surface, evaluating analytical thinking and hands-on expertise to give you a clear, and more accurate picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondAssessmentsSection
