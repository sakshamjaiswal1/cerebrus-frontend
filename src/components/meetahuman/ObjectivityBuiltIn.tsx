const ObjectivityBuiltIn = () => {
  const points = [
    "Our speaking role interviewer is developed differently to offer every candidate the same consistent, impartial interaction.",
    "Assessments are based purely on relevant skills, actual responses, and clear data points.",
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto border border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8 bg-[#ffffff15]">
        <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 lg:mb-8">
              Objectivity, Built In
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8">
              Human interviewers naturally have biases, even if they don't
              realize it.
            </p>
            <div className="space-y-1 sm:space-y-3">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-left justify-start"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8984 11C16.8984 15.4176 13.316 19 8.89844 19C4.48086 19 0.898438 15.4176 0.898438 11C0.898438 6.58243 4.48086 3 8.89844 3C13.316 3 16.8984 6.58243 16.8984 11ZM8.83116 8.3508L10.6688 10.1884H4.68678C4.45422 10.1884 4.26014 10.3825 4.26014 10.6151V11.3849C4.26014 11.6175 4.45182 11.8116 4.68678 11.8116H10.6688L8.83116 13.6491C8.66505 13.8153 8.66505 14.0864 8.83116 14.2525L9.37554 14.7969C9.54171 14.963 9.81478 14.9611 9.97894 14.7969L13.4136 11.3623C13.5108 11.2651 13.5504 11.1289 13.5325 11C13.5504 10.8711 13.5108 10.7349 13.4136 10.6377L9.97894 7.20302C9.81478 7.03887 9.54171 7.03691 9.37554 7.20302L8.83116 7.7474C8.66505 7.91357 8.66505 8.18463 8.83116 8.3508Z" fill="white" />
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
              src="/meta-3.png"
              alt="Objectivity, Built In"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivityBuiltIn;
