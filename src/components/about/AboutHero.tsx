import GradientText from "../common/GradientText";

const AboutHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className=" mx-auto">
        <GradientText text="About Us" className="mb-0" />
        <p className="text-sm sm:text-base leading-relaxed max-w-4xl text-primary opacity-70">
          Built under the expertise of Griphic, Cerebrus is not just a product of HR technology, but of a core belief that the best path for innovation is through strengthening human judgment.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
