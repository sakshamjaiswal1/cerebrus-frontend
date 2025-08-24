const TheRealismLayer = () => {
  const points = [
    "Expressions aren't randomly chosen; they are dynamic and naturalistic.",
    "Lip sync is precise without the awkward lag that breaks immersion.",
    "Gestures and hair behave naturally as they physically react to movement, posture, and real-time lighting.",
    "Ray tracing and RTX technologies add shadows, lighting, and reflections to the experience."
  ];

  return (
    <section className="w-full py-16">
      <div className="mx-auto border border-gray-700 rounded-2xl p-8 bg-[#ffffff15]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-8">The Realism Layer</h2>
            <p className="text-lg text-gray-300 mb-8">
              The MetaHuman interviewer looks, moves, and sounds exactly like a real person.
            </p>
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/features_hero.svg" 
              alt="The Realism Layer"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheRealismLayer;
