const ScrollingText = () => {
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex items-center animate-scroll">
        {/* First instance */}
        <div className="flex items-center space-x-4 whitespace-nowrap">
          <span 
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#1A323C' }}
          >
            PERFECTING EVALUATION
          </span>
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#8B5CF6' }}
          ></div>
        </div>

        {/* Duplicate instances for seamless loop */}
        <div className="flex items-center space-x-4 whitespace-nowrap ml-16">
          <span 
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#1A323C' }}
          >
            PERFECTING EVALUATION
          </span>
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#8B5CF6' }}
          ></div>
        </div>

        <div className="flex items-center space-x-4 whitespace-nowrap ml-16">
          <span 
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#1A323C' }}
          >
            PERFECTING EVALUATION
          </span>
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#8B5CF6' }}
          ></div>
        </div>

        <div className="flex items-center space-x-4 whitespace-nowrap ml-16">
          <span 
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#1A323C' }}
          >
            PERFECTING EVALUATION
          </span>
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#8B5CF6' }}
          ></div>
        </div>

        <div className="flex items-center space-x-4 whitespace-nowrap ml-16">
          <span 
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#1A323C' }}
          >
            PERFECTING EVALUATION
          </span>
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#8B5CF6' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ScrollingText