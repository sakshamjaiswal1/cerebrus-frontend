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
          className="h-full rounded-full relative overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          {/* Base gradient layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#71B3AD] to-[#8AD5CE] transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          {/* Hover gradient layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#8AD5CE] to-[#71B3AD] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  )
}

export default GradientPill