const ResponsiveByDesign = () => {
  const points = [
    "Slight nods during answers.",
    "Adjustments in posture as the discussion evolves.",
    "Facial expressions shift subtly to add nuance or steer the candidate, but simply to reflect genuine listening.",
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto border border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8 bg-[#ffffff15]">
        <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              Responsive By Design
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8">
              Because our MetaHuman interviewer connects directly and responds
              to our AI engine, it naturally responds in subtle ways:
            </p>
            <div className="space-y-4 sm:space-y-6">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 text-left"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="white" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/features_hero.svg"
              alt="Responsive By Design"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveByDesign;
