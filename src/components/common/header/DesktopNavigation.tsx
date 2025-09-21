import { Link } from "react-router";
import AnimatedButton from "../AnimatedButton";
import DarkAnimatedButton from "../DarkAnimatedButton";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const DesktopNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [isDropdownOpen]);
  return (
    <>
      {/* Desktop Navigation Menu */}
      <nav className=" hidden lg:flex items-center justify-end pr-12 w-3/4 space-x-8">
        <Link
          to="/"
          className="text-base font-medium transition-colors duration-200 hover:opacity-70"
          style={{ color: "#1A323C" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-base font-medium transition-colors duration-200 hover:opacity-70"
          style={{ color: "#1A323C" }}
        >
          About
        </Link>
        <Link
          to="/features"
          className="text-base font-medium transition-colors duration-200 hover:opacity-70"
          style={{ color: "#1A323C" }}
        >
          Features
        </Link>
        <div className="relative">
          <button
            ref={buttonRef}
            className="flex items-center space-x-1 text-base font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1A323C" }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Resources</span>
            {/* Dropdown Arrow */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 hover:rotate-180 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
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
        </div>

        {/* Dropdown Menu - Rendered as Portal */}
        {isDropdownOpen &&
          createPortal(
            <div
              className="absolute w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-[99]"
              style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
              }}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="py-2 flex flex-col space-y-1 font-semibold overflow-x-hidden">
                <div className="py-2 hover:bg-brand-bg rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <Link
                    to="/how-to-use"
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300 ease-in-out px-4 text-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    How to use
                  </Link>
                </div>
                <div className="py-2 hover:bg-brand-bg rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <Link
                    to="/whats-new"
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300 ease-in-out px-4 text-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Whats new
                  </Link>
                </div>
                <div className="py-2 hover:bg-brand-bg rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <Link
                    to="/blog"
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300 ease-in-out px-4 text-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>,
            document.body
          )}
        <div className="flex items-center space-x-4">
          {/* Get Started Button */}
          <DarkAnimatedButton text="Get Started" />

          {/* Login Button */}
          <AnimatedButton text="Login" />
        </div>
      </nav>

      {/* Desktop Action Buttons */}
    </>
  );
};

export default DesktopNavigation;
