import GradientText from "../common/GradientText"

const ProctoringHero = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start text-left mb-12">
          <GradientText text="Proctoring & Fairness" />
          <p className="text-base leading-relaxed text-primary opacity-70 max-w-4xl">
            Cerebrus takes assessment integrity seriously. Its proctoring system is built to ensure that every test is conducted fairly, 
            without shortcuts or compromises. Employing a range of robust monitoring tools, Cerebrus keeps the evaluation process secure, 
            reliable, and true to its purpose.
          </p>
        </div>

        {/* Image with background */}
        <div className="flex justify-center w-full bg-brand-bg rounded-2xl">
          <div className="w-1/2 rounded-xl p-8">
            <img 
              src="/proctoring.svg" 
              alt="Proctoring & Fairness" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProctoringHero
