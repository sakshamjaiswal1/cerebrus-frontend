import AnimatedButton from "../common/AnimatedButton";

const CustomizationCard = () => {
  return (
    <div className="bg-brand-bg rounded-xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
      {/* Left Image */}
      <div className="flex justify-center order-2 lg:order-1">
        <img
          src="/exp_img_5.svg"
          alt="Customization Flexibility"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6">
          Customization Flexibility
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-6 sm:mb-8">
          Tailor the interview experience to match your organization's unique
          requirements. Customize question sets, evaluation criteria, and
          interview flow to align with your hiring process and company culture.
        </p>
        <AnimatedButton text="Click for more" />
      </div>
    </div>
  );
};

export default CustomizationCard;
