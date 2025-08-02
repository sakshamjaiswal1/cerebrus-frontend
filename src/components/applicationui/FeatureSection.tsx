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
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-primary mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-base text-primary opacity-70 leading-relaxed mb-8">
              {description}
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-primary opacity-70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
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