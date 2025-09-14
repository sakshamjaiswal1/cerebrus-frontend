interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: FeatureItem[];
  image: string;
  imageAlt: string;
}

const FeatureSection = ({ title, description, features, image, imageAlt }: FeatureSectionProps) => {
  return (
    <section className="w-full py-8 sm:pb-12 lg:pb-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-primary opacity-70 leading-relaxed mb-6 sm:mb-8">
              {description}
            </p>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-3 sm:h-3">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-lg text-primary">
                      {feature.title}: <span className="opacity-70">{feature.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection