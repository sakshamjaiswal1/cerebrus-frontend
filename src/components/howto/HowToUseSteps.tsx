const HowToUseSteps = () => {
  const steps = [
    {
      icon: "/card_img_1.svg",
      title: "Create a Job",
      description: "Define the position, requirements, closing date, report recipients, and admin roles.",
      image: "/exp_img_1.svg"
    },
    {
      icon: "/card_img_2.svg", 
      title: "Add Candidates",
      description: "After creating a job, add candidates for evaluation. You can upload their details or enter them manually. Verify any missing fields and set the interview link validity.",
      image: "/exp_img_2.svg"
    },
    {
      icon: "/card_img_3.svg",
      title: "The Job is Published",
      description: "Once everything is aligned, we will publish the job and initiate the interview process.",
      image: "/exp_img_3.svg"
    },
    {
      icon: "/exp_img_4.svg",
      title: "Candidates Undergo Interviews",
      description: "Candidates will participate in lifelike AI-powered interviews led by a MetaHuman. These interviews test skills and suitability based on your specified criteria.",
      image: "/exp_img_4.svg"
    },
    {
      icon: "/exp_img_5.svg",
      title: "You Get In-Depth Interview Reports",
      description: "Get a comprehensive report for each candidate, packed with valuable insights to help you make confident and informed hiring decisions.",
      image: "/exp_img_5.svg"
    }
  ]

  return (
    <section className="w-full py-16">
      <div className="mx-auto px-12">
        <div className="space-y-8 shadow-lg w-full relative ml-auto bg-gray-50">
          {steps.map((step, index) => (
            <div key={index} className="rounded-2xl p-8">
              <div className="flex items-center gap-8">
                
                {/* Circle Icon - Left Side */}
                <div className="flex-shrink-0 w-32 h-32 bg-white shadow-lg rounded-full flex items-center justify-center absolute -left-16">
                  <img src={step.icon} alt="" className="w-24 h-24 p-2 bg-gray-100 rounded-full" />
                </div>
                
                {/* Content - Text on left, Image on right */}
                <div className="flex-1 flex items-center justify-end gap-8">
                  
                  {/* Text Content */}
                  <div className="w-2/5">
                    <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
                    <p className="text-base text-primary opacity-70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-shrink-0 w-1/2">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToUseSteps