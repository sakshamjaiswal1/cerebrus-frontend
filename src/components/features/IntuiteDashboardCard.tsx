import AnimatedButton from "../common/AnimatedButton";

const IntuiteDashboardCard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch lg:h-112">
      {/* Left Content */}
      <div className="bg-brand-bg w-full lg:w-7/12 h-auto lg:h-full rounded-xl p-6 sm:p-8 lg:py-16 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6 text-center lg:text-left">
          Intuitive Dashboard
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
          A clear and responsive interface built to simplify how you manage
          candidates, track progress and access important information - all in
          one place.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-6 sm:mb-8">
          From live status indicators to smart filters and structured candidate
          views, the UI keeps everything organized and easy to act.
        </p>
        <div className="flex justify-center lg:justify-start">
          <AnimatedButton text="Click for more" />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex flex-col justify-center bg-brand-bg p-4 sm:p-6 rounded-xl text-primary w-full lg:w-5/12 h-64 sm:h-80 lg:h-full">
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
