interface GradientBackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

const GradientBackground = ({ children, className = "" }: GradientBackgroundProps) => {
    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{
                background: `
          linear-gradient(
            135deg, 
            #FFFFFF 0%, 
             rgba(26, 50, 60, 0.8) 15%, 
            #1A323C 80%, 
            rgba(138, 213, 206, 0.8) 90%, 
             #8AD5CE  100%
          )
        `
            }}
        >
            {children}
        </div>
    )
}

export default GradientBackground