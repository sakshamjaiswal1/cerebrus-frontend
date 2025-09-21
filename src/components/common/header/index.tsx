import { useState, useEffect } from "react";
import { Link } from "react-router";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import DesktopNavigation from "./DesktopNavigation";
import CerebrusLogo from "../../../assets/logo/cerebrus.svg?react";

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
        <Link
          to="/"
          className="   w-[81px]   h-[48px]  lg:h-[72px]   lg:w-[124px]"
        >
          <CerebrusLogo className="w-full  h-full" />
        </Link>

        <div
          className={`flex w-11/12 justify-end p-4 py-2 ${
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
