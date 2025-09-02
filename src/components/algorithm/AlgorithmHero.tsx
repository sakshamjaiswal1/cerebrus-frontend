import GradientText from "../common/GradientText"

const AlgorithmHero = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start text-left mb-12">
          <GradientText text="The Cerebrus Intelligence Framework" />
          <p className="text-base leading-relaxed text-primary opacity-70 max-w-4xl">
          Cerebrus is built on a stack of integrated components, each designed to replicate the depth of human evaluation but without the inconsistencies. Every layer, from the logic of mathematical models to the fluidity of Unreal Engine visuals, contributes to a platform that understands, assesses, and adapts accordingly.
          </p>
        </div>

        {/* Image centered below content */}
        <div className="flex justify-center bg-dark-white p-10 rounded-2xl">
          <img 
            src="/algo-hero-1.svg" 
            alt="Cerebrus Intelligence Framework" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default AlgorithmHero
