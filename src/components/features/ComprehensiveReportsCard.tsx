import { useNavigate } from "react-router";
import AnimatedButton from "../common/AnimatedButton";

const ComprehensiveReportsCard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-brand-bg rounded-xl p-4 lg:pb-0 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center overflow-hidden">
      {/* Right Image */}
      <div className="flex justify-center overflow-hidden">
        <img
          src="/report-comp.svg"
          alt="Comprehensive Reports"
          className="w-full h-auto rounded-t-lg -mb-[30%]"
        />
      </div>
      {/* Left Content */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-4 sm:mb-6">
          Comprehensive Reports
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 mb-4 sm:mb-6">
          Get a complete view of every candidate with clear organized reports. Watch the interview recording and see overall performance scoring, skill-by-skill evaluations, resume alignment, and interview summaries, all in one place. Key details like salary expectations, notice period, red flags and more are included to help you make confident and faster decisions.
        </p>
        <AnimatedButton text="Click for more" onClick={() => navigate("/candidate-report")} className="!border !border-primary bg-transparent" />
      </div>
    </div>
  );
};

export default ComprehensiveReportsCard;
