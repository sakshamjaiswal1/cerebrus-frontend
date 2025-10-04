import GradientText from "../common/GradientText"
import AnimatedButton from "../common/AnimatedButton"

const BlogHero = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <GradientText text="Blog" className="!font-medium lg:!text-6xl" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-start">

          {/* Left Side - Featured Card */}
          <div className="w-full lg:w-1/2 group">
            <div className="bg-primary rounded-2xl p-4 sm:p-6 lg:p-8 text-white"
            >
              {/* Image */}
              <div className="mb-4 sm:mb-6">
                <img
                  src="/blog-header.svg"
                  alt="Featured post"
                  className="w-full h-auto rounded-xl group-hover:scale-90 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 group-hover:-translate-y-4 transition-all duration-300">
                <h2 className="text-xl sm:text-2xl lg:text-5xl font-medium leading-tight opacity-90">
                  Cerebrus launched<br />its app's beta<br />version
                </h2>

                <p className="lg:text-xl font-[300] opacity-90 leading-relaxed">
                  Cerebrus started as a dream shared by a group of engineers from IIT Delhi.
                </p>

                <div className="pt-2 sm:pt-4">
                  <AnimatedButton text="Read more" className="!font-semibold" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Recent Updates */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">Recent Updates</h3>

              {/* Update Items */}
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
                  <div key={index} className="border-b border-b-primary pb-4 sm:pb-6 last:border-b-0">
                    <div className="py-4 border border-transparent hover:border-gray-300 hover:border hover:bg-brand-bg rounded-2xl hover:px-4 transition-all duration-300">
                      <h4 className="text-base sm:text-2xl lg:text-3xl font-medium text-primary mb-2 leading-tight">
                        {item.title}
                      </h4>

                      <div className="flex flex-row items-center justify-start gap-2">
                        <div className="flex items-center gap-3">
                          <AnimatedButton text="Read more" className="!border !border-primary !bg-transparent !text-primary !px-2 !py-1 !text-xs sm:!px-4 sm:!py-2 sm:!text-sm !font-semibold" />
                          <span className="text-xs text-primary font-semibold">{item.category}</span>
                        </div>
                        <span className="text-xs text-primary opacity-95">{item.date}</span>
                      </div>
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