import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const words = ['SMARTER', 'MORE HUMAN', 'FASTER']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Start slide up animation
      setIsVisible(false)
      
      // After animation completes, change word and slide in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 400)
      
    }, 2500) // Change word every 2.5 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span 
      className="inline-block relative overflow-hidden"
      style={{ 
        height: '0.99em',
        minWidth: '240px', // Ensure enough space for "MORE HUMAN"
        verticalAlign: 'baseline'
      }}
    >
      <span 
        className={`block transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform -translate-y-full opacity-0'
        }`}
        style={{ color: '#8B5CF6' }}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}

export default AnimatedText