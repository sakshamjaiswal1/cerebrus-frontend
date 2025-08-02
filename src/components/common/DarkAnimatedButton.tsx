const DarkAnimatedButton = ({ text }: { text: string }) => {
    return (
        <button className="group relative overflow-hidden bg-primary text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white">
            {/* Sliding background */}
            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                style={{ background: 'linear-gradient(90deg, #8BD6CE 0%, #BD9AE3 100%)' }}>
            </div>

            {/* Button content */}
            <div className="relative flex items-center space-x-2">
                <span>{text}</span>
            </div>
        </button>
    )
}

export default DarkAnimatedButton