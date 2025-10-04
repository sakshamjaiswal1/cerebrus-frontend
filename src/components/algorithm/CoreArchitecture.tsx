

const CoreArchitecture = () => {
  const architectureComponents = [
    {
      id: 1,
      title: "UI/UX",
      description: "Every interaction is crafted for ease. The interface guides, adapts, and responds without friction.",
      image: "/algo-arc-1.svg"
    },
    {
      id: 2,
      title: "Audio Processing",
      description: "Candidates engage with dynamic interviewers who listen, respond, and adapt naturally, all powered by advanced audio processing.",
      image: "/algo-arc-2.svg"
    },
    {
      id: 3,
      title: "Database Management",
      description: "Candidate data, evaluation records, and system events, each one is stored, structured, and instantly retrievable when you need it.",
      image: "/algo-arc-3.svg"
    },
    {
      id: 4,
      title: "Evaluation Algorithm",
      description: "At the heart of Cerebrus is an adaptive algorithm that uses AI to direct the interview by adapting to the candidate's answers in real time. It asks questions, processes responses, scores skills, and provides structured insights in real time.",
      image: "/algo-arc-4.svg",
      mobImg: '/algo-eval-mob.svg'
    },
    {
      id: 5,
      title: "Data Security",
      description: "Enterprise-grade protocols and strict access controls ensure candidate and company data stays secure at every level.",
      image: "/algo-arc-5.svg"
    }
  ]

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary text-left mb-6 sm:mb-8">Core Architecture</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* First 3 cards - normal width */}
          {architectureComponents.slice(0, 3).map((component) => (
            <div key={component.id} className="bg-dark-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <img 
                    src={component.image} 
                    alt={component.title} 
                    className="w-75 max-md:h-39 h-16 sm:h-20 lg:h-24 xl:h-50 rounded-lg object-fill"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 text-left">{component.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-primary  text-left">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 cards - different widths to fill page */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          <div className="lg:col-span-2 bg-dark-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="flex justify-center mb-3 sm:mb-4">
                <img 
                  src="/algo-arc-4.svg" 
                  alt="Evaluation Algorithm" 
                  className="max-w-full w-164 xl:h-50 h-16 sm:h-20 lg:h-24 rounded-lg object-contain max-md:hidden"
                />
                <img src="/algo-eval-mob.svg" alt="Evaluation Algorithm" className="w-9/12 rounded-lg object-contain max-md:block hidden" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 text-left">Evaluation Algorithm</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-primary  text-left">
                At the heart of Cerebrus is an adaptive algorithm that uses AI to direct the interview by adapting to the candidate's answers in real time. It asks questions, processes responses, scores skills, and provides structured insights in real time.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1 bg-dark-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="flex justify-center mb-3 sm:mb-4">
                <img 
                  src="/algo-arc-5.svg" 
                  alt="Data Security" 
                  className="w-75 max-w-full h-16 sm:h-20 lg:h-24 xl:h-50 rounded-lg object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 text-left">Data Security</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-primary  text-left">
                Enterprise-grade protocols and strict access controls ensure candidate and company data stays secure at every level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreArchitecture
