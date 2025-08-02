import AnimatedButton from "./AnimatedButton"
import DarkAnimatedButton from "./DarkAnimatedButton"
import GradientTextSmall from "./GradientTextSmall"
import { Link } from "react-router"

const Header = ({ isHome = false }: { isHome?: boolean }) => {
    return (
        <header className="w-full">
            <div className="flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center bg-white rounded-xl p-2 w-1/12 h-full">
                    <Link to="/">
                        <img
                            src="/Cerebrus_Logo.svg"
                            alt="Cerebrus"
                            className="h-full w-full "
                        />
                    </Link>
                </div>

                <div className={`flex w-11/12 justify-end p-4 py-6 ${isHome ? 'rounded-t-xl bg-brand-bg' : ''}`}>

                    {/* Navigation Menu */}
                    <nav className="flex items-center justify-end pr-12 w-3/4 space-x-8">
                        <Link
                            to="/about"
                            className="text-base font-medium transition-colors duration-200 hover:opacity-70"
                            style={{ color: '#1A323C' }}
                        >
                            About
                        </Link>
                        <Link
                            to="/features"
                            className="text-base font-medium transition-colors duration-200 hover:opacity-70"
                            style={{ color: '#1A323C' }}
                        >
                            Features
                        </Link>
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 text-base font-medium transition-colors duration-200 hover:opacity-70"
                                style={{ color: '#1A323C' }}
                            >
                                <span>Resources</span>
                                {/* Dropdown Arrow */}
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-200 group-hover:rotate-180"
                                >
                                    <path
                                        d="M3 4.5L6 7.5L9 4.5"
                                        stroke="#1A323C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                                                        {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="py-2">
                                    <Link 
                                        to="/how-to-use" 
                                        className="group/item block px-4 py-3 text-sm transition-all duration-200 hover:bg-gray-100"
                                    >
                                        <span className="text-primary group-hover/item:hidden">How to use</span>
                                        <span className="hidden group-hover/item:block">
                                            <GradientTextSmall text="How to use" />
                                        </span>
                                    </Link>
                                                                                    <Link 
                                                    to="/whats-new" 
                                                    className="group/item block px-4 py-3 text-sm transition-all duration-200 hover:bg-gray-100"
                                                >
                                                    <span className="text-primary group-hover/item:hidden">Whats new</span>
                                                    <span className="hidden group-hover/item:block">
                                                        <GradientTextSmall text="Whats new" />
                                                    </span>
                                                </Link>
                                    <a
                                        href="#"
                                        className="group/item block px-4 py-3 text-sm transition-all duration-200 hover:bg-gray-100"
                                    >
                                        <span className="text-primary group-hover/item:hidden">Blog</span>
                                        <span className="hidden group-hover/item:block">
                                            <GradientTextSmall text="Blog" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Get Started Button */}
                        <DarkAnimatedButton text="Get Started" />

                        {/* Login Button */}
                        <AnimatedButton text="Login" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header