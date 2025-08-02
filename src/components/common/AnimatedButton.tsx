const AnimatedButton = ({ text }: { text: string }) => {
    return (
        <button className="group relative overflow-hidden bg-white text-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white">
            {/* Sliding background */}
            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                style={{ background: 'linear-gradient(90deg, #8BD6CE 0%, #BD9AE3 100%)' }}>
            </div>

            {/* Button content */}
            <div className="relative flex items-center space-x-2">
                <span>{text}</span>

                {/* Arrow icon with rotation - transparent arrow with colored background */}
                <div className="w-6 h-6 bg-primary group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 relative overflow-hidden">
                    {/* Transparent arrow cutout */}
                    <div
                        className="absolute inset-0 transform group-hover:rotate-[45deg] transition-transform duration-300 top-0 bottom-1"
                        style={{
                            background: `url("data:image/svg+xml,${encodeURIComponent(`
                          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M18 6H6M18 6V18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                          </svg>
                        `)}")`,
                            backgroundSize: '10px 10px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            mixBlendMode: 'difference'
                        }}
                    />
                </div>
            </div>
        </button>
    )
}

export default AnimatedButton