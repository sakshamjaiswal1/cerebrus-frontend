import GradientText from "../common/GradientText"

const StructuredInterviewReports = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8 lg:mb-12">
          <GradientText text="Structured Interview Reports" />
          <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 max-w-4xl mb-4">
            After each interview, Cerebrus gives you a detailed breakdown of the candidate's strengths, skill gaps, and overall fit, so you can move forward with clarity.
          </p>
        </div>

        {/* Main Report Image */}
        <div className="flex justify-center">
          <img 
            src="/report-1.svg" 
            alt="Structured Interview Reports Dashboard" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default StructuredInterviewReports
