import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface ScaleInWrapperProps {
  children: ReactNode
  className?: string
}

const ScaleInWrapper = ({ children, className }: ScaleInWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px 0px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    // Trigger animation immediately if element is already visible
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true)
        }
      }
    }
    
    // Check immediately after mount
    setTimeout(checkVisibility, 100)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`${className || ''}`}>
      <div 
        className={`transition-all duration-700 ease-out ${
          isVisible 
            ? 'transform scale-100 opacity-100' 
            : 'transform scale-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ScaleInWrapper
