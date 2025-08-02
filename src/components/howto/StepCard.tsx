interface StepCardProps {
  icon: string
  title: string
  description: string
  image: string
  reverse?: boolean
}

const StepCard = ({ icon, title, description, image, reverse = false }: StepCardProps) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-8 items-center py-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mr-6">
            <img src={icon} alt="" className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-semibold text-primary">{title}</h2>
        </div>
        
        <p className="text-base leading-relaxed text-primary opacity-70 max-w-md mx-auto lg:mx-0">
          {description}
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="max-w-lg w-full">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default StepCard