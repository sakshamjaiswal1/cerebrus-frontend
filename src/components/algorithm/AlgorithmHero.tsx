import GradientText from "../common/GradientText"

const AlgorithmHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8 lg:mb-12">
          <GradientText text="The Cerebrus Intelligence Framework" />
          <p className="text-sm sm:text-base leading-relaxed text-primary opacity-70 max-w-4xl">
          Cerebrus is built on a stack of integrated components, each designed to replicate the depth of human evaluation but without the inconsistencies. Every layer, from the logic of mathematical models to the fluidity of Unreal Engine visuals, contributes to a platform that understands, assesses, and adapts accordingly.
          </p>
        </div>

        {/* Image centered below content */}
        <div className="flex justify-center bg-dark-white p-4 sm:p-6 lg:p-10 rounded-2xl">
          <div className="w-full overflow-hidden rounded-lg">
            <img 
              src="/algo-hero-1.svg" 
              alt="Cerebrus Intelligence Framework" 
              className="w-full h-auto max-md:scale-300 max-md:h-[60vh]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlgorithmHero
