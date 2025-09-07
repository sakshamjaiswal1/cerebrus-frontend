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
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                
                {/* Circle Icon - Mobile: top, Desktop: left */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-white shadow-lg rounded-full flex items-center justify-center order-1 lg:order-1">
                  <img src={step.icon} alt={step.title} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-24 lg:h-24 p-1 sm:p-2 bg-gray-100 rounded-full" />
                </div>
                
                {/* Content - Mobile: stacked, Desktop: side by side */}
                <div className="flex-1 flex flex-col lg:flex-row items-center justify-end gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-2">
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-2/5 text-center lg:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-primary opacity-70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-shrink-0 w-full lg:w-1/2 order-3 lg:order-3">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-auto rounded-xl shadow-md"
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