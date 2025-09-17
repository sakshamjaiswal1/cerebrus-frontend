import { useNavigate } from "react-router";
import AnimatedButton from "../common/AnimatedButton";

const MetaHumanCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
      {/* Left Section - Image with Text Overlay */}
      <div className="relative rounded-2xl overflow-hidden flex-1">
        <img
          src="/features_hero.svg"
          alt="MetaHuman Interviewer"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute bottom-0 h-full lg:pb-24 bg-[#00000070] bg-opacity-40 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
          {/* Content that hides on hover on desktop, always visible on mobile */}
          <div className="w-1/2 max-md:w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-3 sm:mb-4 lg:mb-6">
              MetaHuman Interviewer
            </h2>
            {/* Show shorter text on mobile, full text on desktop */}
            <p className="text-sm sm:text-base leading-relaxed text-white opacity-90 mb-4 sm:mb-6 lg:block hidden font-[300]">
              Cerebrus' MetaHuman Interviewer bridges the gap between AI
              efficiency and human nuance. It responds in real time, adjusting
              its follow-ups and flow based on how the candidate answers.
            </p>
            <p className="text-sm leading-relaxed text-white opacity-90 mb-3 lg:hidden font-[300]">
              The Cerebrus MetaHuman Interviewer blends structured evaluation
              with realism and human-like interaction.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white opacity-90 mb-6 sm:mb-8 lg:block hidden font-[300]">
              Visually, you get cinematic realism from natural eye movement to
              subtle shifts in posture that adds to the immersion.
            </p>
            <div className="flex">
              <div className="group/button">
                <AnimatedButton
                  text="Click for more"
                  onClick={() => navigate("/meet-a-human")}
                  className="!border !border-white !bg-transparent !text-white"
                  whiteButton={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Interactive Proctoring Info */}
      <div className="relative bg-brand-bg rounded-2xl p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:shadow-lg flex-[0.4] !py-20">
        {/* Default State - Always visible on mobile, hides on desktop hover */}
        <div>
          <div className="max-md:hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-primary mb-3 sm:mb-4 text-center">
              Vigilant Proctoring
            </h3>
          </div>
          <div className="flex justify-center">
            <img
              src="/proct-1.svg"
              alt="Vigilant Proctoring"
              className="w-full h-auto rounded-lg max-w-xs lg:max-w-none"
            />
          </div>
          <div className="max-md:block hidden my-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-primary  text-left">
              Vigilant Proctoring
            </h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6 text-left">
              Our proctoring measures check for tab switching, unauthorized tools,
              lip sync, eye movement and background activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaHumanCard;
