import { useNavigate } from "react-router";
import AnimatedButton from "../common/AnimatedButton";

const VigilantProctoringCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-brand-bg rounded-xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
      {/* Left Image */}
      <div className="flex justify-center order-2 lg:order-1">
        <img
          src="/card_img_1.svg"
          alt="Vigilant Proctoring"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6">
          Vigilant Proctoring
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-6 sm:mb-8">
          Advanced AI monitoring ensures exam integrity through comprehensive
          surveillance and real-time analysis. Our intelligent proctoring system
          detects suspicious behavior while maintaining candidate privacy and
          comfort.
        </p>
        <AnimatedButton
          text="Click for more"
          onClick={() => navigate("/proctoring")}
        />
      </div>
    </div>
  );
};

export default VigilantProctoringCard;
