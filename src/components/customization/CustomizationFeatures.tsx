const CustomizationFeatures = () => {
  const features = [
    "Focus questions on niche or highly specific skills",
    "Choose the type of questions",
    "Adjust the difficulty based on the role or experience level",
    "Define how long the interview runs",
    "Decide how many rounds each candidate should go through"
  ]

  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-base lg:text-xl text-primary">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <p className="text-base text-primary lg:text-xl">
            It's your hiring process. We just make it easier to shape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomizationFeatures