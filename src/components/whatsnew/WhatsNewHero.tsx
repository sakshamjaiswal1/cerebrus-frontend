import GradientText from "../common/GradientText"

const WhatsNewHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <GradientText text="What's New" />
          
          <p className="text-sm sm:text-base lg:text-lg text-primary opacity-70 leading-relaxed mt-4 sm:mt-6 max-w-4xl">
            Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by 
            utilizing the potential of technology. Through our research, we found gaps and caveats in the current hiring processes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatsNewHero