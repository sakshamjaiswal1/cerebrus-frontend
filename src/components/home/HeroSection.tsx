import RectangleAnimation from "../common/RectangleAnimation";
import WatchVideoButton from "../common/WatchVideoButton";
import AnimatedText from "../common/AnimatedText";
import ScrollingText from "../common/ScrollingText";
import { SlideLeftRightWrapper, SlideRightLeftWrapper } from "../common/wrapper";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start justify-between w-full lg:rounded-tl-xl ">
      {/* Left Content Section */}
      <SlideLeftRightWrapper className="w-full lg:w-1/2">
        <div className="bg-brand-bg lg:rounded-tl-xl  rounded-xl py-8 px-6 sm:py-12 sm:px-8 lg:py-16 lg:pl-12">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6  bg-brand-bg text-primary">
            Beyond simple <br /> automation to make <br /> AI-hiring{" "}
            <AnimatedText />
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base leading-relaxed my-6 sm:my-8 w-full sm:w-10/12 lg:w-9/12 opacity-70 text-primary">
            Make the shift from outdated recruitment practices to AI-powered,
            real-world, new-age interviews. Say goodbye to legacy practices and
            expose yourself to more diverse and inclusive talent pools.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Get Started Button */}
            <button
              type="button"
              className="!px-6 !py-1.5 rounded-full bg-primary font-medium text-white hover:opacity-90 cursor-pointer"
            >
              Get Started
            </button>

            {/* Watch Video Button */}
            <WatchVideoButton />
          </div>
        </div>

        {/* Scrolling Text Animation */}
        <div className="w-full">
          <ScrollingText />
        </div>
      </SlideLeftRightWrapper>

      {/* Right Animation Section */}
      <SlideRightLeftWrapper className="w-full lg:w-1/2 flex justify-center  bg-white mt-6 lg:mt-0 lg:h-[90vh]">
        <RectangleAnimation />
      </SlideRightLeftWrapper>
    </div>
  );
};

export default HeroSection;
