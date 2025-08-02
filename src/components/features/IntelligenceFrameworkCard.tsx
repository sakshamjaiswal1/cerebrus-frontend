import AnimatedButton from "../common/AnimatedButton"

const IntelligenceFrameworkCard = () => {
  return (
    <div className="bg-brand-bg rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Image */}
      <div className="flex justify-center order-2 lg:order-1">
        <img 
          src="/exp_img_1.svg" 
          alt="Intelligence Framework" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl font-semibold text-primary mb-6">Intelligence Framework</h2>
        <p className="text-base leading-relaxed text-primary opacity-70 mb-6">
          From our intuitive hiring platform to the intelligently designed AI interview algorithm, Cerebrus is designed around a robust 
          framework of integrated components, each function runs a unified ecosystem.
        </p>
        <p className="text-base leading-relaxed text-primary opacity-70 mb-8">
          This ensures that hiring decisions are not only fast, also but calculated and reliable.
        </p>
        <AnimatedButton text="Click for more" />
      </div>
    </div>
  )
}

export default IntelligenceFrameworkCard