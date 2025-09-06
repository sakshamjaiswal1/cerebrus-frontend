import AnimatedButton from "../common/AnimatedButton";

const MetaHumanCard = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch group">
      {/* Left Section - Image with Text Overlay */}
      <div className="relative rounded-xl overflow-hidden flex-1 lg:group-hover:flex-[2] transition-all duration-500 h-64 sm:h-80 lg:max-h-[70vh]">
        <img
          src="/features_hero.svg"
          alt="MetaHuman Interviewer"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-[#00000070] bg-opacity-40 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
          {/* Content that hides on hover */}
          <div className="lg:group-hover:opacity-0 lg:group-hover:scale-95 transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
              MetaHuman Interviewer
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white opacity-90 mb-4 sm:mb-6">
              Cerebrus' MetaHuman Interviewer bridges the gap between AI
              efficiency and human nuance. It responds in real time, adjusting
              its follow-ups and flow based on how the candidate answers.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white opacity-90 mb-6 sm:mb-8">
              Visually, you get cinematic realism from natural eye movement to
              subtle shifts in posture that adds to the immersion.
            </p>
            <div className="flex">
              <div className="group/button">
                <AnimatedButton text="Click for more" />
              </div>
            </div>
          </div>

          {/* Title that shows on hover - positioned at very bottom */}
          <div className="opacity-0 lg:group-hover:opacity-100 transition-all duration-500 absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              MetaHuman Interviewer
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section - Interactive Proctoring Info */}
      <div className="relative bg-brand-bg rounded-xl p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:shadow-lg flex-[0.3] lg:group-hover:flex-[1.5] h-auto lg:max-h-[70vh]">
        {/* Default State */}
        <div className="lg:group-hover:opacity-0 lg:group-hover:scale-95 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
            Vigilant Proctoring
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
            Cerebrus makes sure each interview is real, focused, and free of
            distractions.
          </p>
          <img
            src="/card_img_1.svg"
            alt="Vigilant Proctoring"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Hover State */}
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
            Vigilant Proctoring
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
            Cerebrus makes sure each interview is real, focused, and free of
            distractions. Our proctoring measures check for
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-primary">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <span>Tap switching</span>
            </li>
            <li className="flex items-center text-primary">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <span>Unauthorized tools</span>
            </li>
            <li className="flex items-center text-primary">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <span>Lip sync</span>
            </li>
            <li className="flex items-center text-primary">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <span>Eye movement</span>
            </li>
            <li className="flex items-center text-primary">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                5
              </div>
              <span>Background activity</span>
            </li>
          </ul>

          <p className="text-sm text-primary opacity-60 mb-6">
            If someone is not fully present or not alone, you'll know.
          </p>

          <div className="group/button">
            <AnimatedButton text="Click for more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaHumanCard;
