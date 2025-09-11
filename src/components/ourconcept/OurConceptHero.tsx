import GradientText from "../common/GradientText"

const OurConceptHero = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-left mb-16">
          <GradientText text="Why We Built Cerebrus" />
          <p className="text-xl text-primary opacity-80 leading-relaxed max-md:hidden">
            Our platform bridges the gap between candidates and employers, offering an immersive and interactive experience that mimics real-world interviews while saving time and resources. Powered by cutting-edge tools such as Unreal Engine, advanced mathematical models, and AI-driven algorithms, Cerebrus simplifies complex hiring processes into intuitive workflows.
          </p>
          <div className="hidden max-md:block font-[300]">
            <div className="flex w-full items-center gap-2 p-2">
              <img src="/tickIcon.svg" alt="" className="w-5 h-5" />
              <p>
                Bridging candidates and employers, with an immersive and holistic interview experience
              </p>
            </div>
            <div className="flex w-full items-center gap-2 p-2">
              <img src="/tickIcon.svg" alt="" className="w-5 h-5" />
              <p>
                Powered by Unreal Engine, advanced mathematical models, and AI-driven algorithms
              </p>
            </div>
          </div>
        </div>

        {/* Main Graphic: From Resumes To Real Insight */}
        <div className="bg-brand-bg rounded-2xl p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-primary mb-4">
              From Resumes To Real Insight
            </h2>
          </div>

          <div className="flex justify-center">
            <img
              src="/our-c-1.svg"
              alt="From Resumes To Real Insight - AI-powered hiring process"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Supporting Text */}
        <div className="text-left">
          <p className="text-lg text-primary opacity-80 leading-relaxed">
            We believe hiring should be easy and stress-free. That's why we've simplified it into three easy steps. Just share the CVs, upload your list of candidates, and we'll handle the rest. Our advanced AI and lifelike MetaHuman interviewers take over, conducting realistic and engaging interviews that feel almost human, sometimes even better. Once the interviews are done, you'll receive a clear, detailed report with everything you need to make confident decisions. With Cerebrus, you can focus on choosing the right talent.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurConceptHero
