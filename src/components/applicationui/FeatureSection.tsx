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
                <div key={index} className="flex items-start space-x-2 sm:space-x-3">

                  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 14C16 18.4176 12.4176 22 8 22C3.58243 22 0 18.4176 0 14C0 9.58243 3.58243 6 8 6C12.4176 6 16 9.58243 16 14ZM7.93272 11.3508L9.77033 13.1884H3.78835C3.55578 13.1884 3.3617 13.3825 3.3617 13.6151V14.3849C3.3617 14.6175 3.55339 14.8116 3.78835 14.8116H9.77033L7.93272 16.6491C7.76661 16.8153 7.76661 17.0864 7.93272 17.2525L8.4771 17.7969C8.64328 17.963 8.91635 17.9611 9.0805 17.7969L12.5152 14.3623C12.6123 14.2651 12.652 14.1289 12.634 14C12.652 13.8711 12.6123 13.7349 12.5152 13.6377L9.0805 10.203C8.91635 10.0389 8.64328 10.0369 8.4771 10.203L7.93272 10.7474C7.76661 10.9136 7.76661 11.1846 7.93272 11.3508Z" fill="#1A323C" />
                  </svg>

                  <div>
                    <p className="text-xs sm:text-lg text-primary">
                      <span className="font-semibold">{feature.title}:</span> <span className="opacity-70">{feature.description}</span>
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