import LightGradientText from "../common/LightGradientText";

const MeetAHumanHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto text-left">
        <LightGradientText text="Meet Your MetaHuman Interviewer" />
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 w-full mx-auto">
          Our MetaHuman is a practical response to real problems organizations
          face during hiring, including bottlenecks, repetitive screening, and
          unconvincing AI interactions.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 w-full mx-auto mb-8 sm:mb-10 lg:mb-12">
          Leaving behind the age of generic questions and robotic avatars, we
          carefully developed a response system vetted by visual industry
          experts and designed an interviewer in Unreal Engine 5 that evaluates
          data-based responses thoughtfully.
        </p>
        <div className="relative px-4 sm:px-6 lg:px-0 w-full overflow-hidden max-md:h-[60vh] rounded-2xl">
          <img
            src="/Metahuman.svg"
            alt="MetaHuman Interviewer"
            className="h-full object-fill w-full mx-auto max-md:scale-300"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetAHumanHero;
