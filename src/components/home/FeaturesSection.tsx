import { useState, useEffect, useRef } from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: "proctoring",
      title: "Vigilant Proctoring",
      description:
        "Advanced AI monitoring ensures exam integrity through comprehensive surveillance and real-time analysis.",
      image: "/card_img_1.svg", // Will be added later
    },
    {
      id: "metahuman",
      title: "MetaHuman Interviewer",
      description:
        "Our lifelike AI-powered MetaHuman engages candidates in natural, unscripted conversations, designed to simulate real-world human interactions.",
      image: "/card_img_2.svg", // Will be added later
    },
    {
      id: "reports",
      title: "Comprehensive Reports",
      description:
        "Detailed analytics and insights provide complete candidate evaluation with actionable intelligence.",
      image: "/card_img_3.svg", // Will be added later
    },
    {
      id: "customization",
      title: "Customization Flexibility",
      description:
        "Customize your questions, skills, difficulty levels, and pacing, so every interview reflects your standards.",
      image: "/card_img_4.svg", // Will be added later
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Start with MetaHuman (center)

  const intervelRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervelRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervelRef.current!);
  }, [features.length]);

  const getCardPosition = (index: number) => {
    const totalCards = features.length;
    let diff = index - activeIndex;

    // Normalize diff to handle circular positioning
    if (diff > totalCards / 2) {
      diff -= totalCards;
    } else if (diff < -totalCards / 2) {
      diff += totalCards;
    }

    // Center card (focused)
    if (diff === 0) {
      return "translate-x-0 scale-100 z-20 blur-0 ";
    }
    // Left card
    else if (diff === -1) {
      return "sm:-translate-x-[280px] lg:-translate-x-[420px] scale-90 sm:scale-95 z-10 blur-sm opacity-50 sm:opacity-100";
    }
    // Right card
    else if (diff === 1) {
      return "sm:translate-x-[280px] lg:translate-x-[420px] scale-90 sm:scale-95 z-10 blur-sm opacity-50 sm:opacity-100";
    }
    // Hidden cards (for more than 3 cards)
    else {
      return "translate-x-0 scale-90 z-0 opacity-0";
    }
  };

  return (
    <section className="w-full bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center bg-white rounded-full p-2 shadow-sm gap-1 sm:gap-0">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-base transition-all duration-500 pointer ${
                  index === activeIndex
                    ? "text-white shadow-md bg-primary"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => {
                  setActiveIndex(index);

                  clearInterval(intervelRef.current!);
                }}
              >
                {feature.id === "proctoring" && "Proctoring"}
                {feature.id === "metahuman" && "MetaHuman"}
                {feature.id === "reports" && "Reports"}
                {feature.id === "customization" && "Customization"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative flex justify-center items-center h-96 sm:h-112 overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`absolute w-80 sm:w-96 max-w-full h-full transition-all duration-700 ease-in-out ${getCardPosition(
                index
              )}`}
            >
              <div className="rounded-2xl border border-gray-200 h-full overflow-hidden relative p-4 sm:p-6 bg-brand-bg">
                {/* Top Image Section */}
                <div className="h-auto bg-white rounded-2xl relative mb-6">
                  {/* Placeholder for image */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover bg-brand-bg"
                  />
                </div>

                {/* Content Section */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-70 text-primary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
