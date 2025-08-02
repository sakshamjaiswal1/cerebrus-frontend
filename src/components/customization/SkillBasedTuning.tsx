const SkillBasedTuning = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-primary mb-6 leading-tight">
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
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-3 bg-yellow-200 rounded"></div>
                <span className="text-sm text-primary">Skill 1</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-3 bg-red-300 rounded"></div>
                <span className="text-sm text-primary">Skill 2</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-6 h-3 bg-green-400 rounded"></div>
                <span className="text-sm text-primary">Skill 3</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-primary opacity-70">
                Move the bar to prioritize specific skills
              </p>
            </div>
          </div>

          {/* Right Side - Skill Tuning Image */}
          <div className="lg:w-1/2 flex justify-end">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/skill_right_cust.svg" 
                alt="Skill-Based Tuning Interface"
                className="w-3/4 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillBasedTuning