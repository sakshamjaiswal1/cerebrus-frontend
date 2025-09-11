interface GradientPillProps {
  fillPercentage?: number;
}

const GradientPill = ({ fillPercentage = 100 }: GradientPillProps) => {
  return (
    <div 
      className="group relative overflow-hidden border-4 border-white rounded-full bg-white shadow-lg"
      
    >
      {/* Content */}
      <div className="relative w-full h-8">
        <div 
          className="h-full bg-gradient-to-r from-[#71B3AD] to-[#8AD5CE] rounded-full transition-all duration-500"
          style={{ width: `${fillPercentage}%` }}
        />
      </div>
    </div>
  )
}

export default GradientPill