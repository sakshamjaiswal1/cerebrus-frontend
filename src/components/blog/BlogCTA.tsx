import AnimatedButton from "../common/AnimatedButton"

const BlogCTA = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="bg-brand-bg rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Side - Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold text-primary leading-tight mb-4">
                Business Leader of the Year' at the 33rd World HRD Congress
              </h2>
            </div>
            
            {/* Right Side - Button */}
            <div className="lg:w-1/3 flex justify-end">
              <AnimatedButton text="Read more" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCTA