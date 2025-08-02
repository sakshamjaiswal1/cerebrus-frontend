import GradientText from "../common/GradientText"

const WhatsNewHero = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="mb-12">
          <GradientText text="What's New" />
          
          <p className="text-lg text-primary opacity-70 leading-relaxed mt-6 max-w-4xl">
            Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by 
            utilizing the potential of technology. Through our research, we found gaps and caveats in the current hiring processes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatsNewHero