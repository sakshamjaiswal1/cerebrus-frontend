const ShapeInterviewsSection = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="bg-brand-bg rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Shape Interviews to Match Your Ideal Hire
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Video */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden mb-6">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  className="w-full h-auto object-cover"
                >
                  <source src="/customisability.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-primary mb-2">
                  Tailor type of interview questions to prioritize what matters to you the most.
                </h3>
              </div>
            </div>

            {/* Right Video */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden mb-6">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  className="w-full h-auto object-cover"
                >
                  <source src="/skills.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-primary mb-2">
                  Craft the perfect blend of skills to define your interviewing ideology.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShapeInterviewsSection