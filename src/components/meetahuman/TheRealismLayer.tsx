const TheRealismLayer = () => {
  const points = [
    "Expressions aren't randomly chosen; they are dynamic and naturalistic.",
    "Lip sync is precise without the awkward lag that breaks immersion.",
    "Gestures and hair behave naturally as they physically react to movement, posture, and real-time lighting.",
    "Ray tracing and RTX technologies add shadows, lighting, and reflections to the experience.",
  ];

  const headings = [
    "Facial expressions",
    "Lip sync",
    "Clothing and hair physics",
    "Lightning and shadows",
  ]

  const mobilePoints = [
    "Developed in Unreal Engine 5",
    "Dynamic expressions",
    "Lip sync without delay or drift",
    "Natural clothing and hair movement",
    "Ray-traced shadows and reflections"
  ]

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto border border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8 bg-[#ffffff15]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 lg:mb-8">
              The Realism Layer
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8">
              The MetaHuman interviewer looks, moves, and sounds exactly like a
              real person.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 text-left"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-[10px]">&rarr;</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-md:hidden">
                    <strong className="text-white font-medium">{headings[index]}:&nbsp;</strong>
                    {point}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-md:block hidden">
                    {mobilePoints[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/meta-1.png"
              alt="The Realism Layer"
              className="w-full h-auto object-cover rounded-2xl max-md:hidden"
            />
             <img
              src="/meta-1-mob.png"
              alt="The Realism Layer"
              className="w-full h-auto object-cover rounded-2xl max-md:block hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheRealismLayer;
