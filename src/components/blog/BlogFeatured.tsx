import AnimatedButton from "../common/AnimatedButton"

const BlogFeatured = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side - Featured Content */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-primary leading-tight">Featured</h2>
              
              {/* Featured Items */}
              <div className="space-y-6">
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
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-lg font-medium text-primary mb-2 leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <AnimatedButton text="Read more" />
                        <span className="text-sm text-primary opacity-70">{item.category}</span>
                      </div>
                      <span className="text-sm text-primary opacity-70">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Featured Card */}
          <div className="lg:w-1/2">
            <div className="bg-brand-bg rounded-2xl p-8">
              {/* Image */}
              <div className="mb-6">
                <img 
                  src="/whats_new_hero.svg" 
                  alt="Featured post"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary leading-tight">
                  Cerebrus launched<br />its app's beta<br />version
                </h3>
                
                <p className="text-sm text-primary opacity-70 leading-relaxed">
                  Cerebrus started as a dream shared by a group of engineers from IIT Delhi.
                </p>
                
                <div className="pt-4">
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