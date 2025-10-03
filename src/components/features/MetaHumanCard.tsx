import { useNavigate } from "react-router";
import { useState } from "react";
import AnimatedButton from "../common/AnimatedButton";

const MetaHumanCard = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto">
      {/* Left Section - Image with Text Overlay */}
      <div className={`relative rounded-2xl overflow-hidden w-full lg:w-7/12 transition-all duration-500 lg:min-h-[60vh] ${isHovered ? 'lg:w-1/12' : ''}`}>
        <img
          src="/features_hero.svg"
          alt="MetaHuman Interviewer"
          className="w-full h-full object-cover aspect-[5/4]"
        />

        {/* Text Overlay - Default State */}
        <img src="/grad-overlay.svg" alt="" className={`hidden lg:block absolute inset-0 w-full h-full object-cover ${isHovered ? 'lg:opacity-0' : ''}`} />
        <div
        className={`absolute bottom-0 h-full px-4 sm:px-6 lg:py-12 bg-opacity-40 flex flex-col justify-end transition-all duration-500 ${isHovered ? 'lg:opacity-0 lg:scale-95' : ''}`}>
          {/* Content that hides on hover on desktop, always visible on mobile */}
          <div className="w-1/2 max-md:w-full z-30 max-md:pb-5">
            <h2 
              className="font-medium text-white mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-2xl"
              style={{ 
                fontFamily: 'Montserrat', 
                color: '#FFF', 
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              MetaHuman Interviewer
            </h2>
            {/* Show shorter text on mobile, full text on desktop */}
            <p className="text-sm sm:text-base leading-relaxed text-white opacity-90 mb-4 sm:mb-6 sm:block hidden font-[300]">
              Cerebrus' MetaHuman Interviewer bridges the gap between AI
              efficiency and human nuance. It responds in real time, adjusting
              its follow-ups and flow based on how the candidate answers.
            </p>
            <p 
              className="text-white opacity-90 mb-3 sm:hidden"
              style={{
                fontFamily: 'Montserrat',
                color: '#FFF',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '135%'
              }}
            >
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

        {/* Shrunk state - only title visible on hover (desktop only) */}
        <img src="/grad-overlay.svg" alt="" className={`opacity-0 max-md:opacity-100 absolute -bottom-5 max-md:-bottom-2 max-md:z-10 w-full max-md:h-[130%] h-full object-cover -rotate-90 ${isHovered ? 'lg:opacity-100' : ''}`} />
        <div className={`opacity-0  h-max transition-all duration-500 absolute bottom-0 left-0 right-0 mx-auto hidden lg:flex flex-col justify-end ${isHovered ? 'lg:opacity-100' : ''}`}>
          <div className="bg-opacity-40 rounded-lg p-4">
            <h2 
              className="font-medium text-white text-center text-2xl"
              style={{ 
                fontFamily: 'Montserrat', 
                color: '#FFF', 
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              MetaHuman Interviewer
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section - Interactive Proctoring Info */}
      <div 
        className={`relative bg-brand-bg rounded-2xl p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:shadow-lg w-full lg:w-5/12 lg:min-h-[50vh] lg:max-h-[75vh] ${isHovered ? 'lg:w-11/12' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Default State - Always visible on mobile, hides on desktop hover */}
        <div className={`transition-all duration-500 ${isHovered ? 'lg:opacity-0 lg:scale-95' : ''}`}>
          <div className="max-md:hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-primary mb-3 sm:mb-4 text-center">
              Vigilant Proctoring
            </h3>
          </div>
          <div className="flex justify-center">
            <img
              src="/proct-1.svg"
              alt="Vigilant Proctoring"
              className="w-full h-auto rounded-lg max-md:w-1/2 max-w-xs lg:max-w-none"
            />
          </div>
          <div className="max-md:block hidden my-5">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-primary  text-left">
              Vigilant Proctoring
            </h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-primary mb-4 sm:mb-6 text-left">
              Our proctoring measures check for tab switching, unauthorized tools,
              lip sync, eye movement and background activity.
            </p>
          </div>
        </div>

        {/* Hover State */}
        <div className={`absolute !h-max inset-4 sm:inset-6 lg:inset-8 opacity-0 scale-95 transition-all duration-500 flex flex-col lg:flex-row gap-4 lg:gap-6 ${isHovered ? 'lg:opacity-100 lg:scale-100' : ''}`}>
          {/* Left side - Proctoring illustration */}
          <div className="flex justify-center lg:justify-start lg:w-3/5">
            <img
              src="/proct-1.svg"
              alt="Vigilant Proctoring"
              className="w-full h-auto rounded-lg max-w-xs lg:max-w-none"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center lg:w-3/5">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
              Vigilant Proctoring
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-primary mb-4 sm:mb-6">
              Cerebrus makes sure each interview is real, focused, and free of distractions. <br /> Our proctoring measures check for
            </p>
            
            <div className="mb-4 sm:mb-6">
              
              <ul className="space-y-2">
                <li className="flex items-center text-sm sm:text-base text-primary">
                  <img src="/arrow-top-left.svg" className="mr-2 rotate-45" alt="" />
                  Tab switching
                </li>
                <li className="flex items-center text-sm sm:text-base text-primary">
                  <img src="/arrow-top-left.svg" className="mr-2 rotate-45" alt="" />
                  Unauthorized tools
                </li>
                <li className="flex items-center text-sm sm:text-base text-primary">
                  <img src="/arrow-top-left.svg" className="mr-2 rotate-45" alt="" />
                  Lip sync
                </li>
                <li className="flex items-center text-sm sm:text-base text-primary">
                  <img src="/arrow-top-left.svg" className="mr-2 rotate-45" alt="" />
                  Eye movement
                </li>
                <li className="flex items-center text-sm sm:text-base text-primary">
                  <img src="/arrow-top-left.svg" className="mr-2 rotate-45" alt="" />
                  Background activity
                </li>
              </ul>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-primary mb-6">
              If someone is not fully present or not alone, you'll know.
            </p>

            <div className="group/button">
              <AnimatedButton
                text="Click for more"
                onClick={() => navigate("/proctoring")}
                className="!border !border-primary !bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaHumanCard;
