const MeasuresWeTake = () => {
  const measures = [
    {
      id: 1,
      title: "Background Activity Surveillance",
      description:
        "Cerebrus actively monitors background noise and movements to detect unauthorized activities. This feature ensures that the test taker remains in a distraction-free and compliant environment.",
      image: "/proc-1.gif",
    },
    {
      id: 2,
      title: "Remote Access Sharing Check",
      description:
        "Preventing unauthorized access is critical. Our system detects any attempts to share control of the test environment with third parties, ensuring that only the authorized user completes the exam.",
      image: "/proc-2.gif",
    },
    {
      id: 3,
      title: "Screen Recording",
      description:
        "Every session is recorded for later review, capturing all on-screen activities to provide an additional layer of security and transparency.",
      image: "/proc-3.gif",
    },
    {
      id: 4,
      title: "Eye Movement Tracking",
      description:
        "Using advanced AI, Cerebrus tracks eye movements to identify potential cheating behaviors, such as looking away from the screen or consulting unauthorized materials.",
      image: "/proc-4.gif",
    },
    {
      id: 5,
      title: "Lip Sync Check",
      description:
        "By analyzing lip movements, our technology ensures that the test taker isn't receiving verbal cues or reading answers aloud to an external party.",
      image: "/proc-5.gif",
    },
    {
      id: 6,
      title: "Tab Switching Detection",
      description:
        "Any attempt to switch tabs or access unauthorized resources during the test is instantly flagged, maintaining a secure testing environment.",
      image: "/proc-6.gif",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary text-center mb-8 sm:mb-12 lg:mb-16">
          The Measures We Take
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {measures.map((measure) => (
            <div
              key={measure.id}
              className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={measure.image}
                  alt={measure.title}
                  className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 mb-3 sm:mb-4 rounded-lg object-contain"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  {measure.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-primary opacity-70">
                  {measure.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasuresWeTake;
