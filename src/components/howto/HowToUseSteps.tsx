const HowToUseSteps = () => {
  const steps = [
    {
      icon: "/step-1.svg",
      title: "Create a Job",
      description: "Define the position, requirements, closing date, report recipients, and admin roles.",
      mobDesc: "Define the position, requirements, closing date, report recipients, and admin roles.",
      image: "/how-to-1.svg"
    },
    {
      icon: "/step-2.svg",
      title: "Add Candidates",
      description: "After creating a job, add candidates for evaluation. You can upload their details or enter them manually. Verify any missing fields and set the interview link validity.",
      mobDesc: "Add candidates for evaluation, upload their details and set the interview link's validity.",
      image: "/how-to-2.svg"
    },
    {
      icon: "/step-3.svg",
      title: "The Job is Published",
      description: "Once everything is aligned, we will publish the job and initiate the interview process.",
      mobDesc: "Once everything is aligned, we will publish the job and initiate the interview process.",
      image: "/how-to-3.svg"
    },
    {
      icon: "/step-4.svg",
      title: "Candidates Undergo Interviews",
      description: "Candidates will participate in lifelike AI-powered interviews led by a MetaHuman. These interviews test skills and suitability based on your specified criteria.",
      mobDesc: "Lifelike AI-powered interviews led by a MetaHuman to test skills and suitability",
      image: "/how-to-4.svg"
    },
    {
      icon: "/step-5.svg",
      title: "You Get In-Depth Interview Reports",
      description: "Get a comprehensive report for each candidate, packed with valuable insights to help you make confident and informed hiring decisions.",
      mobDesc: "Detailed reports for each candidate with insights to help you make informed decisions.",
      image: "/how-to-5.svg"
    }
  ]

  return (
    <section className="w-full pb-8">
      <div className="mx-auto sm:px-6 lg:px-12">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-r-2xl shadow-lg lg:relative lg:w-11/12 lg:ml-auto max-md:p-4 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-8">

                {/* Circle Icon - Desktop only */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-white shadow-lg rounded-full items-center justify-center order-1 lg:order-1 lg:absolute lg:-left-16 lg:top-[35%] p-4 hidden lg:flex">
                  <div className="bg-gray-100 rounded-full p-1 sm:p-4 w-full h-full flex items-center justify-center shadow-md">
                    <img src={step.icon} alt={step.title} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-20 lg:h-20 p-1 sm:p-2 object-contain" />
                  </div>
                </div>

                {/* Content - Mobile: stacked, Desktop: side by side */}
                <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-end gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-2">

                  {/* Text Content */}
                  <div className="w-full lg:w-2/5 text-left flex items-center flex-wrap lg:block">

                    {/* Circle Icon - only for mobile and tablet */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-lg rounded-full flex items-center justify-center p-2 sm:p-3 lg:hidden">
                      <div className="bg-gray-100 rounded-full w-full h-full flex items-center justify-center shadow-md p-2 sm:p-3">
                        <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="w-8/12 ml-2 mt-3 lg:w-full lg:ml-0 lg:mt-0">
                      <h3 
                        className="font-medium text-primary mb-1 sm:mb-4 self-stretch text-2xl sm:text-3xl lg:text-4xl"
                        style={{ 
                          fontFamily: 'Montserrat', 
                          color: '#1A323C', 
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: 'normal'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-primary opacity-70 leading-relaxed max-md:hidden">
                        {step.description}
                      </p>
                      <p className="text-xs sm:text-base text-primary opacity-70 leading-relaxed max-md:block hidden">{step.mobDesc}</p>
                    </div>

                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 w-full lg:w-1/2 order-3 lg:order-3">
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