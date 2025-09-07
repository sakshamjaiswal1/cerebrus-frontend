const MeetAHumanHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Meet Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD5CE] to-[#349988]">
            MetaHuman
          </span>{" "}
          Interviewer
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-4">
          Our MetaHuman is a practical response to real problems organizations
          face during hiring, including bottlenecks, repetitive screening, and
          unconvincing AI interactions.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4">
          Leaving behind the age of generic questions and robotic avatars, we
          carefully developed a response system vetted by visual industry
          experts and designed an interviewer in Unreal Engine 5 that evaluates
          data-based responses thoughtfully.
        </p>
        <div className="relative px-4 sm:px-6 lg:px-0">
          <img
            src="/features_hero.svg"
            alt="MetaHuman Interviewer"
            className="w-full h-auto object-cover rounded-2xl max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetAHumanHero;
