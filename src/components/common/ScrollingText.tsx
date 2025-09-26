interface ScrollingTextProps {
  text?: string;
  count?: number;
}

const ScrollingText = ({ 
  text = "PERFECTING EVALUATION",
  count = 5 
}: ScrollingTextProps) => {
  // Create an array of specified length for rendering items
  const items = Array.from({ length: count }, (_, index) => ({
    id: index,
    text: text
  }));

  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex items-center animate-scroll">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`flex items-center space-x-4 whitespace-nowrap ${index !== 0 ? 'ml-16' : ''}`}
          >
            <span 
              className="text-[20px] font-bold uppercase font-montserrat"
              style={{
                letterSpacing: "15px",
                fontStyle: "normal",
                lineHeight: "normal",
                background: "linear-gradient(90deg, #1A323C 0%, #285059 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.text}
            </span>
            <div 
              className="w-3 h-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #BC9AE4 0%, #8AD5CE 100%)"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingText