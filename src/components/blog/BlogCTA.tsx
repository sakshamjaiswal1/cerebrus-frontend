import AnimatedButton from "../common/AnimatedButton"

const BlogCTA = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="bg-brand-bg rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary leading-tight mb-2 sm:mb-4">
                Business Leader of the Year' at the 33rd World HRD Congress
              </h2>
            </div>
            
            {/* Right Side - Button */}
            <div className="w-full lg:w-1/3 flex justify-start lg:justify-end">
              <AnimatedButton text="Read more" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCTA