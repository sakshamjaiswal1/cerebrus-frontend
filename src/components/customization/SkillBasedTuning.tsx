const SkillBasedTuning = () => {
  return (
    <>
      <div className="max-md:block hidden">
        <h2 className="text-3xl font-medium text-primary mb-6 leading-tight">
          Skill-Based Tuning
        </h2>

        <div className="space-y-6 mb-8">
          <p className="text-base text-primary leading-relaxed">
            Once your preferences are set, our algorithm tailors the flow of questions to reflect your choices. The interview is shaped by your priorities.
          </p>

          <p className="text-base text-primary leading-relaxed">
            Skills you've prioritized show up more frequently and in greater depth, while secondary areas are assessed with the right amount of focus.
          </p>
        </div>
      </div>
      <section className="w-full py-8 px-16 max-md:p-4 rounded-2xl bg-brand-bg">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left Side - Content */}
            <div className="lg:w-1/2 w-full">
              <div className="max-md:hidden">
                <h2 className="text-3xl font-medium text-primary mb-6 leading-tight">
                  Skill-Based Tuning
                </h2>

                <div className="space-y-6 mb-8">
                  <p className="text-base text-primary leading-relaxed">
                    Once your preferences are set, our algorithm tailors the flow of questions to reflect your choices. The interview is shaped by your priorities.
                  </p>

                  <p className="text-base text-primary leading-relaxed">
                    Skills you've prioritized show up more frequently and in greater depth, while secondary areas are assessed with the right amount of focus.
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-white border border-gray-300 rounded-2xl p-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-primary">Skill 1</span>
                  <div className="bg-white border border-gray-200 rounded-md p-1 w-11/12">
                    <div className="w-4/5 h-6 bg-yellow-200 rounded"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-primary">Skill 1</span>
                  <div className="bg-white border border-gray-200 rounded-md p-1 w-11/12">
                    <div className="w-12 h-6 bg-red-300 rounded"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-primary">Skill 1</span>
                  <div className="bg-white border border-gray-200 rounded-md p-1 w-11/12">
                    <div className="w-12 h-6 bg-green-400 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-primary max-md:text-center">
                  Move the bar to prioritize specific skills
                </p>
              </div>
            </div>

            {/* Right Side - Skill Tuning Image */}
            <div className="lg:w-1/2 flex justify-end w-full">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/skill_right_cust.svg"
                  alt="Skill-Based Tuning Interface"
                  className="w-3/4 max-md:w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillBasedTuning