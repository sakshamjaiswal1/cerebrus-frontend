import { useNavigate } from "react-router";
import AnimatedButton from "../common/AnimatedButton";

const IntuiteDashboardCard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto group">
      {/* Left Content */}
      <div className="relative bg-brand-bg w-full lg:w-7/12 lg:group-hover:w-5/12 rounded-xl p-6 sm:p-8 lg:py-16 lg:px-10 transition-all duration-500 h-[70vh]">
        {/* Content that hides on hover on desktop, always visible on mobile */}
        <div className="lg:group-hover:opacity-0 lg:group-hover:scale-95 transition-all duration-500">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-4 sm:mb-6 text-center lg:text-left max-md:hidden">
            Intuitive Dashboard
          </h2>
          <div className="flex items-center gap-2 w-full">
            <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6 hidden xl:block">
              A clear and responsive interface built to simplify how you manage candidates, track interview progress, and review evaluations, all in one place.
              <br /> <br />
              From visual score indicators to smart filters and structured candidate views, the UI keeps everything organized and easy to act on.
            </p>
            <img src="/int-dash.svg" alt="" className="xl:w-1/2 w-full max-md:mb-5 object-contain" />
          </div>
          <div className="max-md:block hidden">
            <h2 className="text-2xl sm:text-3xl font-medium text-primary text-left">
              Intuitive Dashboard
            </h2>
            A clear and responsive interface built to simplify how you manage interviews and candidates. <br /> <br />
          </div>
          <div className="flex justify-start sm:hidden">
            <AnimatedButton text="Click for more" className="!border !border-primary bg-transparent" />
          </div>
        </div>

        {/* Shrunk state - only title and image visible on hover (desktop only) */}
        <div className="opacity-0 h-max lg:group-hover:opacity-100 transition-all duration-500 absolute inset-6 sm:inset-8 lg:inset-10 hidden lg:flex flex-col justify-center items-center">
          <h2 className="text-xl sm:text-2xl font-medium text-primary mb-4 text-center">
            Intuitive Dashboard
          </h2>
          <img src="/int-dash.svg" alt="" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Right Section - Customization Flexibility */}
      <div className="relative bg-brand-bg rounded-xl p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:shadow-lg w-full lg:w-5/12 lg:group-hover:w-7/12 max-h-[70vh]">
        {/* Default State - Always visible on mobile, hides on desktop hover */}
        <div className="lg:group-hover:opacity-0 lg:group-hover:scale-95 transition-all duration-500">
          <div className="max-md:hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3 sm:mb-4 text-center lg:text-left">
              Customization Flexibility
            </h3>
          </div>
          <div className="flex justify-center">
            <img
              src="/cust_flex.svg"
              alt="Customization Flexibility"
              className="w-10/12 h-auto rounded-lg max-w-xs lg:max-w-none"
            />
          </div>
          <div className="max-md:block hidden my-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-primary text-left">
              Customization Flexibility
            </h3>
          </div>
        </div>

        {/* Hover State */}
        <div className="absolute !h-max inset-4 sm:inset-6 lg:inset-8 opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition-all duration-500 flex flex-col lg:flex-row gap-4 lg:gap-6 py-16">
          {/* Left side - Radar chart image */}
          <div className="flex justify-center lg:justify-start lg:w-2/5">
            <img
              src="/cust_flex.svg"
              alt="Customization Flexibility"
              className="w-full h-auto rounded-lg max-w-xs lg:max-w-none"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center lg:w-3/5">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
              Customization Flexibility
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
              Cerebrus helps you tailor each interview to the role. Set the focus areas, adjust difficulty, and shape the flow based on what the position demands. The system adapts with clarity whether it's a hands-on role or a strategic function.
            </p>

            <div className="group/button">
              <AnimatedButton
                text="Click for more"
                onClick={() => navigate("/customization")}
                className="!border !border-primary !bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntuiteDashboardCard;
