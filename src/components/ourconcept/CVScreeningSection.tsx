const CVScreeningSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl font-medium text-primary mb-6">
              CV Screening
            </h2>
            <p className="text-lg text-primary opacity-80 leading-relaxed mb-4">
              The rise of AI has disrupted traditional CV screening practices. Application Tracking Systems (ATS), widely used for CV screening, have become more prone to manipulation. Candidates can now simply optimize their resumes with specific keywords, often without possessing the genuine skills those keywords represent.
            </p>
            <p className="text-lg text-primary opacity-80 leading-relaxed">
              This practice renders the reliance on CVs alone redundant and ineffective in evaluation. Moreover, ATS technology struggles to differentiate between genuine and superficial expertise. Cerebrus tackles these challenges with an advanced AI-powered interviewing solution. By doing this, we shift the focus from resumes to holistic evaluations.
            </p>
          </div>
          {/* Right Column: Conveyor Belt Illustration */}
          <div className="bg-brand-bg rounded-2xl p-8">
            <img
              src="/our-c-2.svg"
              alt="CV Screening - AI-powered conveyor belt system"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CVScreeningSection
