const GradientPill = () => {
  return (
    <div 
      className="group relative overflow-hidden border-4 border-white rounded-full px-6 py-2"
      style={{ 
        background: 'linear-gradient(90deg, #71B3AD 0%, #8AD5CE 100%)',
        transition: 'background 0.5s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(270deg, #71B3AD 0%, #8AD5CE 100%)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(90deg, #71B3AD 0%, #8AD5CE 100%)'
      }}
    >
      {/* Content */}
      <div className="relative w-full h-4" />
    </div>
  )
}

export default GradientPill