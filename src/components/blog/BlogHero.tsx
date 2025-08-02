import GradientText from "../common/GradientText"
import AnimatedButton from "../common/AnimatedButton"

const BlogHero = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="mb-12">
          <GradientText text="Blog" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side - Featured Card */}
          <div className="lg:w-1/2">
            <div className="bg-primary rounded-2xl p-8 text-white">
              {/* Image */}
              <div className="mb-6">
                <img 
                  src="/exp_img_1.svg" 
                  alt="Featured post"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold leading-tight">
                  Cerebrus launched<br />its app's beta<br />version
                </h2>
                
                <p className="text-sm opacity-90 leading-relaxed">
                  Cerebrus started as a dream shared by a group of engineers from IIT Delhi.
                </p>
                
                <div className="pt-4">
                  <AnimatedButton text="Read more" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Recent Updates */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Recent Updates</h3>
              
              {/* Update Items */}
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
                    <h4 className="text-lg font-medium text-primary mb-2 leading-tight">
                      {item.title}
                    </h4>
                    
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
        </div>
      </div>
    </section>
  )
}

export default BlogHero