import { useState, useEffect } from "react";
import AnimatedButton from "../common/AnimatedButton";
import GradientText from "../common/GradientText";

const Experience = () => {
  const experiences = [
    {
      id: "metabrain",
      title: "Metabrain: The Intelligence Behind Cerebrus",
      description: "The powerful engine that drives Cerebrus",
      image: "/exp_img_1.svg",
    },
    {
      id: "ui-ux",
      title: "UI/UX (User Interface & User Experience)",
      description:
        "A human-first design philosophy: intuitive, responsive, and engaging",
      image: "/exp_img_2.svg",
    },
    {
      id: "audio",
      title: "Audio Processing",
      description:
        "Lifelike conversations, powered by our advanced audio processing module",
      image: "/exp_img_3.svg",
    },
    {
      id: "database",
      title: "Database Management",
      description:
        "Smart data, structured efficiently with all candidate interactions, evaluations, and system activities",
      image: "/exp_img_4.svg",
    },
    {
      id: "algorithm",
      title: "Core Algorithm",
      description:
        "The decision-making powerhouse: our proprietary AI algorithm",
      image: "/exp_img_5.svg",
    },
    {
      id: "security",
      title: "Data Security",
      description:
        "Your data, fiercely protected with enterprise-grade security protocols",
      image: "/exp_img_6.svg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [experiences.length]);

  const currentExperience = experiences[activeIndex];

  return (
    <section id="experience" className="w-full pb-8 sm:pb-12">
      <div className="w-full mx-auto">
        <GradientText text="What Powers the Cerebrus Experience" />

        {/* Single Experience Card */}
        <div className="bg-brand-bg rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 mx-auto mt-4 sm:mt-6 lg:mt-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Image Section with Sliding Animation */}
            <div
              className="w-full lg:w-1/2 h-96 sm:h-80 lg:h-96 rounded-2xl overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(135deg, #1A323C 0%, #2A4B52 50%, #A5F5ED 100%)",
              }}
            >
              <div className="w-full h-full relative">
                {/* All images positioned absolutely for sliding effect */}
                {experiences.map((experience, index) => (
                  <img
                    key={experience.id}
                    src={experience.image}
                    alt={experience.title}
                    className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? "opacity-100 transform translate-x-0"
                        : index < activeIndex
                        ? "opacity-0 transform -translate-x-full"
                        : "opacity-0 transform translate-x-full"
                    }`}
                  />
                ))}

                {/* Animated highlight effect */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(165, 245, 237, 0.3) 50%, transparent 100%)",
                    animation: "slideHighlight 3s ease-in-out infinite",
                  }}
                ></div>
              </div>
            </div>

            {/* Content Section with Text Animation */}
            <div className="w-full lg:w-1/2 space-y-4 text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-primary transition-opacity duration-500">
                {currentExperience.title}
              </h3>

              <p className="text-sm text-primary opacity-70 leading-relaxed transition-opacity duration-500">
                {currentExperience.description}
              </p>

              {/* Read More Button */}
              <AnimatedButton text="Read more" className="!border !border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
