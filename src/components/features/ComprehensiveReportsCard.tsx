import AnimatedButton from "../common/AnimatedButton";

const ComprehensiveReportsCard = () => {
  return (
    <div className="bg-brand-bg rounded-xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6">
          Comprehensive Reports
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
          Get a complete view of every candidate with clear organized reports.
          Watch the interview recording and get overall performance metrics.
          Detailed analytics provide insights for informed decision making.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-6 sm:mb-8">
          Summarized, per of sections: key insights like salary expectations,
          notice period, red flags and more are and customized like a personal
          interview summary.
        </p>
        <AnimatedButton text="Click for more" />
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/exp_img_4.svg"
          alt="Comprehensive Reports"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ComprehensiveReportsCard;
