import GradientText from "../common/GradientText";

const FeaturesHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto">
        <GradientText text="Features" />

        <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70">
          Hiring can feel like a race against time. Too many applications and
          not enough hours in the day. Cerebrus helps you keep up, without
          losing depth, fairness, or control.
        </p>
      </div>
    </section>
  );
};

export default FeaturesHero;
