import RectangleAnimation from "../common/RectangleAnimation"
import WatchVideoButton from "../common/WatchVideoButton"
import AnimatedText from "../common/AnimatedText"
import ScrollingText from "../common/ScrollingText"

const HeroSection = () => {
    return (
        <div className='min-h-screen flex items-start justify-between w-full rounded-tl-xl'>
            {/* Left Content Section */}
            <div className="w-1/2">

                <div className="bg-brand-bg rounded-tl-xl py-16 pl-12">
                    {/* Main Heading */}
                    <h1 className="text-5xl font-medium leading-tight mb-6 bg-brand-bg text-primary">
                        Beyond simple <br /> automation to make <br /> AI-hiring{' '}

                        <AnimatedText />
                    </h1>

                    {/* Subtext */}
                    <p className="text-base leading-relaxed my-8 w-9/12 opacity-70 text-primary">
                        Make the shift from outdated recruitment practices to AI-powered, real-world, new-age interviews. Say goodbye to legacy practices and expose yourself to more diverse and inclusive talent pools.
                    </p>

                    {/* Buttons Section */}
                    <div className="flex items-center space-x-4">
                        {/* Get Started Button */}
                        <button
                            type="button"
                            className="!px-6 !py-1.5 rounded-full bg-primary font-medium text-white hover:opacity-90 cursor-pointer"
                        >
                            Get Started
                        </button>

                        {/* Watch Video Button */}
                        <WatchVideoButton />
                    </div>
                </div>
                
                {/* Scrolling Text Animation */}
                <div className="w-full">
                    <ScrollingText />
                </div>
            </div>

            {/* Right Animation Section */}
            <div className="w-1/2 flex justify-center border border-gray-300 bg-white">
                <RectangleAnimation />
            </div>
        </div>
    )
}

export default HeroSection