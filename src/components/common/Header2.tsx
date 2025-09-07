import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton"
import DarkAnimatedButton from "./DarkAnimatedButton"
import GradientTextSmall from "./GradientTextSmall"
import HamburgerButton from "./header/HamburgerButton";
import MobileMenu from "./header/MobileMenu";
import { Link } from "react-router"

const Header2 = ({ isHome = false }: { isHome?: boolean }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent body scroll when menu is open
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    // Clean up body overflow on component unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <header className="w-full">
            <div className="flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center rounded-xl p-2 w-auto lg:w-1/12 h-full">
                    <Link to="/">
                        <img
                            src="/white_cerebrus_logo.svg"
                            alt="Cerebrus"
                            className="h-8 w-auto lg:h-full lg:w-full min-w-[81px]"
                        />
                    </Link>
                </div>

                <div className={`flex w-auto lg:w-11/12 justify-end p-4 py-2 ${isHome ? 'rounded-t-xl' : ''}`}>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-end pr-12 w-3/4 space-x-8">
                        <Link
                            to="/about"
                            className="text-base font-medium transition-colors duration-200 hover:opacity-70 text-white"
                        >
                            About
                        </Link>
                        <Link
                            to="/features"
                            className="text-base font-medium transition-colors duration-200 hover:opacity-70 text-white"
                        >
                            Features
                        </Link>
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 text-base font-medium transition-colors duration-200 hover:opacity-70 text-white"
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
                                        stroke="white"
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
                                    <Link 
                                        to="/blog" 
                                        className="group/item block px-4 py-3 text-sm transition-all duration-200 hover:bg-gray-100"
                                    >
                                        <span className="text-primary group-hover/item:hidden">Blog</span>
                                        <span className="hidden group-hover/item:block">
                                            <GradientTextSmall text="Blog" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Get Started Button */}
                        <DarkAnimatedButton text="Get Started" />

                        {/* Login Button */}
                        <AnimatedButton text="Login" />
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <HamburgerButton
                        isOpen={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                        isMeetHuman
                    />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header>
    )
}

export default Header2