import AnimatedButton from "../common/AnimatedButton";

const IntuiteDashboardCard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto">
      {/* Left Content */}
      <div className="bg-brand-bg w-full lg:w-7/12 h-auto rounded-xl p-6 sm:p-8 lg:py-16 lg:px-10">
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

      {/* Right Image */}
      <div className="flex flex-col justify-center bg-brand-bg p-4 sm:p-6 lg:p-6 rounded-xl text-primary w-full lg:w-5/12 h-auto lg:h-full">
        <h3 className="text-lg sm:text-xl text-center mb-4">
          Customization Flexibility
        </h3>
        <img
          src="/cust_flex.svg"
          alt="Intuitive Dashboard"
          className="w-full h-auto rounded-lg flex-1 object-contain"
        />
      </div>
    </div>
  );
};

export default IntuiteDashboardCard;
