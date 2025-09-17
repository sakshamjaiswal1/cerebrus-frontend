import AnimatedButton from "../common/AnimatedButton";

const IntelligenceFrameworkCard = () => {
  return (
    <div className="bg-brand-bg rounded-xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center lg:py-16">
      {/* Left Image */}
      <div className="flex justify-center order-1">
        <img
          src="/int-fram.svg"
          alt="Intelligence Framework"
          className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6">
          Intelligence Framework
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
          From our intuitive hiring platform to the intelligently designed AI
          interview algorithm, Cerebrus is designed around a robust framework of
          integrated components, each function runs a unified ecosystem.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-6 sm:mb-8">
          This ensures that hiring decisions are not only fast, also but
          calculated and reliable.
        </p>
        <AnimatedButton text="Click for more" className="!border !border-primary !bg-transparent" />
      </div>
    </div>
  );
};

export default IntelligenceFrameworkCard;
