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
          url(/CTA_BG.svg)
          repeat center center / cover
        `
            }}
        >
            {children}
        </div>
    )
}

export default GradientBackground