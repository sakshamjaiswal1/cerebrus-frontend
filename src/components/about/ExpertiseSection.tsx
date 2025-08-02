const ExpertiseSection = () => {
  return (
    <section className="w-full py-16">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">Diverse Expertise</h2>
            <p className="text-base leading-relaxed text-primary opacity-70 mb-6">
              Our team brings together top talent across engineering, AI and NLP, human 
              behaviour understanding, design thinking, and talent acquisition to deliver a 
              comprehensive platform at all levels expertise for building a best that actually delivers results.
            </p>
            <p className="text-base leading-relaxed text-primary opacity-70">
              Every line of code, every algorithm, needs every animation upon our MetaHuman, 
              interviewing candidate builds we yet unified effort our mission to critical of every step.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src="/exp_img_3.svg" 
              alt="Diverse Expertise" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection