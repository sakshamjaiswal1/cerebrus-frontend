import { Link } from "react-router";
import AnimatedButton from "../AnimatedButton";
import DarkAnimatedButton from "../DarkAnimatedButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-50 h-[100dvh] transition-all duration-300 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Mobile Menu Content */}
      <div
        className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link to="/" onClick={onClose}>
            <img
              src="/Cerebrus_Logo.svg"
              alt="Cerebrus"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Close mobile menu"
          >
            <span className="block w-6 h-0.5 bg-primary rotate-45 translate-y-2" />
            <span className="block w-6 h-0.5 bg-primary opacity-0" />
            <span className="block w-6 h-0.5 bg-primary -rotate-45 -translate-y-2" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-6">
          {/* <Link
            to="/"
            className="text-lg font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1A323C" }}
            onClick={onClose}
          >
            Home
          </Link> */}
          <Link
            to="/about"
            className="text-lg font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1A323C" }}
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-lg font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1A323C" }}
            onClick={onClose}
          >
            Features
          </Link>

          {/* Mobile Resources Section */}
          <div className="space-y-4">
            <span className="text-lg font-medium" style={{ color: "#1A323C" }}>
              Resources
            </span>
            <div className="pl-4 space-y-3">
              <Link
                to="/how-to-use"
                className="block text-base transition-colors duration-200 hover:opacity-70"
                style={{ color: "#1A323C" }}
                onClick={onClose}
              >
                How to use
              </Link>
              <Link
                to="/whats-new"
                className="block text-base transition-colors duration-200 hover:opacity-70"
                style={{ color: "#1A323C" }}
                onClick={onClose}
              >
                Whats new
              </Link>
              <Link
                to="/blog"
                className="block text-base transition-colors duration-200 hover:opacity-70"
                style={{ color: "#1A323C" }}
                onClick={onClose}
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Action Buttons */}
        <div className="absolute bottom-6 left-6 right-6 space-y-4">
          <div onClick={onClose}>
            <DarkAnimatedButton text="Get Started" />
          </div>
          <div onClick={onClose}>
            <AnimatedButton text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
