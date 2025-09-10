import { useState } from "react";

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  description: string;
  className?: string;
}

const TeamCard = ({
  image,
  name,
  position,
  description,
  className = "",
}: TeamCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full max-w-64 h-72 sm:h-80 perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
          {/* Image Section with Primary Background */}
          <div className="h-3/4 bg-primary p-0 flex items-end justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Info Section */}
          <div className="h-1/4 p-3 sm:p-4 flex flex-col justify-center">
            <h3 className="text-base sm:text-lg font-semibold text-primary text-center">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-primary opacity-70 text-center mt-1">
              {position}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="h-full p-4 sm:p-6 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-semibold text-primary text-center mb-2">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-primary opacity-70 text-center mb-3 sm:mb-4">
              {position}
            </p>
            <p className="text-xs sm:text-sm text-primary opacity-80 text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
