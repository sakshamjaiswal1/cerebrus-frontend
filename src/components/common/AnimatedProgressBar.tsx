import { useEffect, useState } from 'react'

interface AnimatedProgressBarProps {
  percentage: number
  color?: 'yellow' | 'red' | 'green' | string
  label: string
  delay?: number
}

const AnimatedProgressBar = ({ 
  percentage, 
  color = 'yellow', 
  label,
  delay = 0 
}: AnimatedProgressBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  const getColorClass = (color: string) => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow-200'
      case 'red':
        return 'bg-red-300'
      case 'green':
        return 'bg-green-400'
      default:
        return color.startsWith('bg-') ? color : `bg-${color}`
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-primary min-w-[60px]">{label}</span>
      <div className="bg-white border border-gray-200 rounded-md p-1 w-11/12 relative">
        <div 
          className={`h-6 rounded transition-all duration-1000 ease-out ${getColorClass(color)}`}
          style={{ width: `${animatedWidth}%` }}
        />
        {/* Optional: Show percentage text */}
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-600 font-medium">
          {Math.round(animatedWidth)}%
        </span>
      </div>
    </div>
  )
}

export default AnimatedProgressBar