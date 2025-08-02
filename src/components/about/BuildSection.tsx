const BuildSection = () => {
  return (
    <section className="w-full py-16">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src="/exp_img_2.svg" 
              alt="Built by Dreamers" 
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold text-primary mb-6">Built by Dreamers, Driven by Innovation</h2>
            <p className="text-base leading-relaxed text-primary opacity-70 mb-6">
              To build a structured, intelligent interview framework that helps organizations 
              identify real skill, Cerebrus seeks to make hiring more accurate, more 
              efficient, and more humane.
            </p>
            <p className="text-base leading-relaxed text-primary opacity-70 mb-6">
              Our groundbreaking team of dedicated seasoned professionals works tirelessly to make what's 
              IT Griphic dream like the vision to bring clarity and productivity to 
              talent acquisition. Our goal has strengthens teams to overcome hiring 
              challenges all AI-powered interview processes are set by people, for people.
            </p>
            <p className="text-base leading-relaxed text-primary opacity-70">
              Every aspect of candidate experience to its interface designed to collaborate—all 
              want, developed and vetted in collaboration with professors at 
              IIT Delhi, making this foundation berseek on academic expertise 
              as well as practical application.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildSection