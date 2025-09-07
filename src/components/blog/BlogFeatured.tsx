import AnimatedButton from "../common/AnimatedButton"

const BlogFeatured = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* Left Side - Featured Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary leading-tight">Featured</h2>
              
              {/* Featured Items */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Business Leader of the Year' at the 33rd World HRD Congress",
                    category: "Technology",
                    date: "2 min read"
                  },
                  {
                    title: "Business Leader of the Year' at the 33rd World HRD Congress", 
                    category: "Technology",
                    date: "2 min read"
                  },
                  {
                    title: "Business Leader of the Year' at the 33rd World HRD Congress",
                    category: "Technology", 
                    date: "2 min read"
                  },
                  {
                    title: "Business Leader of the Year' at the 33rd World HRD Congress",
                    category: "Technology",
                    date: "2 min read"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0">
                    <h3 className="text-base sm:text-lg font-medium text-primary mb-2 leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                      <div className="flex items-center space-x-2">
                        <AnimatedButton text="Read more" />
                        <span className="text-xs sm:text-sm text-primary opacity-70">{item.category}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-primary opacity-70">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Featured Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-brand-bg rounded-2xl p-4 sm:p-6 lg:p-8">
              {/* Image */}
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/whats_new_hero.svg" 
                  alt="Featured post"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary leading-tight">
                  Cerebrus launched<br />its app's beta<br />version
                </h3>
                
                <p className="text-xs sm:text-sm text-primary opacity-70 leading-relaxed">
                  Cerebrus started as a dream shared by a group of engineers from IIT Delhi.
                </p>
                
                <div className="pt-2 sm:pt-4">
                  <AnimatedButton text="Read more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogFeatured