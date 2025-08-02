import GradientText from "../common/GradientText"

const AboutHero = () => {
  return (
    <section className="w-full py-16">
      <div className=" mx-auto">
        <GradientText text="About Us" />
        <h4 className="text-xl font-medium text-primary mb-8">
          Built by dreamers, driven by innovation.
        </h4>
        <p className="text-base leading-relaxed max-w-4xl text-primary opacity-70">
          Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology. Through our research, we found gaps and caveats in the current hiring processes. Fueled by innovation, we set out to revolutionize hiring and completely transform the way organizations approach it. Today, Cerebrus combines creativity, expertise, and cutting-edge technology to simplify hiring. It processes and creates a smarter, more efficient platform for hiring.
        </p>
      </div>
    </section>
  )
}

export default AboutHero