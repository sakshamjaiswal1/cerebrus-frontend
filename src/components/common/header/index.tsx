import { useState, useEffect } from "react";
import { Link } from "react-router";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import DesktopNavigation from "./DesktopNavigation";

const Header = ({ isHome = false }: { isHome?: boolean }) => {
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
        <div className="flex items-center bg-white rounded-xl p-2 w-1/12 h-full">
          <Link to="/">
            <img
              src="/Cerebrus_Logo.svg"
              alt="Cerebrus"
              className="h-full w-full "
            />
          </Link>
        </div>

        <div
          className={`flex w-11/12 justify-end p-4 py-6 ${
            isHome ? "rounded-t-xl bg-brand-bg" : ""
          }`}
        >
          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile Hamburger Menu Button */}
          <HamburgerButton 
            isOpen={isMobileMenuOpen} 
            onClick={toggleMobileMenu} 
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={toggleMobileMenu} 
      />
    </header>
  );
};

export default Header;
