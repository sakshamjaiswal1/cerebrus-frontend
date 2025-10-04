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
                        <DarkAnimatedButton text="Get Started" className="!bg-primary-light !font-semibold !text-primary" />

                        {/* Login Button */}
                        <AnimatedButton text="Login" className="!border !border-primary-light !bg-transparent !text-primary-light !py-1.5 !font-semibold hover:!text-white"
                            arrowIcon={
                                <div
                                    className="absolute inset-0 transform group-hover:rotate-[45deg] transition-transform duration-300 top-0 bottom-1 !bg-primary-light rounded-full w-6 h-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3942_52191)">
                                            <circle cx="12" cy="12" r="12" />
                                            <path d="M13.9554 8.54353L7.52264 8.5784C7.26008 8.57983 7.04439 8.49085 6.87558 8.31148C6.70676 8.1321 6.62329 7.91092 6.62515 7.64791C6.63746 7.39623 6.72877 7.17957 6.89911 6.99792C7.06944 6.81627 7.28611 6.72495 7.5491 6.72396L16.2137 6.67699C16.345 6.67627 16.4625 6.70014 16.5664 6.74859C16.6703 6.79704 16.7653 6.86522 16.8515 6.95315C16.9377 7.04108 17.0054 7.13654 17.0547 7.23955C17.1041 7.34255 17.1282 7.45991 17.127 7.59163L17.08 16.2562C17.0787 16.4969 16.9872 16.7081 16.8055 16.8898C16.6238 17.0715 16.4073 17.1683 16.1561 17.1802C15.8935 17.1816 15.6724 17.0924 15.4926 16.9127C15.3129 16.7329 15.2239 16.512 15.2258 16.2499L15.2611 9.84922L8.26487 16.8455C8.07788 17.0325 7.85835 17.1267 7.60629 17.128C7.35423 17.1294 7.13615 17.0376 6.95205 16.8526C6.76796 16.6676 6.67615 16.4491 6.67664 16.1971C6.67713 15.945 6.77131 15.7259 6.95917 15.5398L13.9554 8.54353Z" className="fill-primary group-hover:fill-white" />
                                            <path d="M-3.11393 26.5239L-9.51808 26.5239C-9.77947 26.5239 -9.99468 26.4341 -10.1637 26.2546C-10.3328 26.0751 -10.4171 25.8545 -10.4166 25.5926C-10.4057 25.3421 -10.316 25.1269 -10.1474 24.947C-9.97878 24.7671 -9.76357 24.6773 -9.50174 24.6778L-0.875742 24.6778C-0.745045 24.6778 -0.627854 24.7022 -0.524167 24.751C-0.420481 24.7997 -0.325508 24.8681 -0.239248 24.9561C-0.152988 25.0441 -0.0850253 25.1396 -0.0353607 25.2424C0.0143042 25.3452 0.0389186 25.4622 0.0384827 25.5933L0.0384831 34.2193C0.0384833 34.4589 -0.0514803 34.6687 -0.231407 34.8486C-0.411332 35.0285 -0.626329 35.1237 -0.876396 35.1342C-1.13779 35.1342 -1.35845 35.0442 -1.53838 34.8643C-1.7183 34.6844 -1.80805 34.4639 -1.80761 34.203L-1.80696 27.8308L-8.73451 34.7584C-8.91966 34.9435 -9.13771 35.0361 -9.38865 35.0361C-9.63958 35.0361 -9.85719 34.9435 -10.0415 34.7584C-10.2258 34.5732 -10.3183 34.3552 -10.3192 34.1042C-10.3201 33.8533 -10.2275 33.6357 -10.0415 33.4514L-3.11393 26.5239Z" fill="#E9EAE5" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3942_52191">
                                                <rect width="24" height="24" rx="12" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            }
                        />
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