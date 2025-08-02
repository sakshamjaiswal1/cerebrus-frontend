import { useState, useEffect, useRef } from 'react'

interface CarouselItem {
  id: string
  image: string
  title: string
  description?: string
  date?: string
  buttonText?: string
}

interface SwipeableCarouselProps {
  items: CarouselItem[]
  autoPlayInterval?: number
  cardBackground?: string
  className?: string
  showButton?: boolean
}

const SwipeableCarousel = ({ 
  items, 
  autoPlayInterval = 1000, 
  cardBackground = 'bg-white',
  className = '',
  showButton = false
}: SwipeableCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isHovered && autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % items.length
          // Auto-scroll to the new index
          if (containerRef.current) {
            const cardWidth = containerRef.current.offsetWidth / 3
            containerRef.current.scrollTo({
              left: newIndex * cardWidth,
              behavior: 'smooth'
            })
          }
          return newIndex
        })
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }
  }, [isHovered, autoPlayInterval, items.length])

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / 3 // Show 3 cards at once
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item) => (
          <div 
            key={item.id}
            className={`flex-shrink-0 w-80 ${cardBackground} rounded-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105`}
          >
            {/* Image Section */}
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                {item.title}
              </h3>
              
              {item.description && (
                <p className="text-sm text-primary opacity-70 mb-4 line-clamp-3">
                  {item.description}
                </p>
              )}
              
              {item.date && (
                <p className="text-xs text-primary opacity-50 mb-4">
                  {item.date}
                </p>
              )}
              
              {showButton && item.buttonText && (
                <button className="text-sm font-medium text-secondary hover:opacity-70 transition-opacity">
                  {item.buttonText} →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="justify-center mt-6 space-x-2 hidden">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default SwipeableCarousel