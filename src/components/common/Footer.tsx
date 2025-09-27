import { Link } from 'react-router'
import FacebookIcon from './icons/FacebookIcon'
import YouTubeIcon from './icons/YouTubeIcon'
import XIcon from './icons/XIcon'
import InstagramIcon from './icons/InstagramIcon'
import LinkedInIcon from './icons/LinkedInIcon'

const Footer = () => {
  return (
    <footer>
      {/* Main Footer with bg-brand-bg */}
      <div className="bg-brand-bg px-8 py-12 rounded-xl">
        <div className=" mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-5 lg:gap-12 lg:space-y-0">
            
            {/* Logo and Tagline Section - Bigger */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="/Cerebrus_Logo.svg" 
                  alt="Cerebrus" 
                  className="w-[86px] h-[50px] sm:w-[173px] sm:h-[100px] lg:w-[173px] lg:h-[100px] mb-4"
                />
                <p className="text-primary text-center text-[8px] sm:text-[16px] lg:text-[16px] font-montserrat font-medium uppercase"
                  style={{
                    letterSpacing: "2px",
                    lineHeight: "normal",
                    fontStyle: "normal",
                    fontWeight: 500
                  }}
                  data-mobile-style="letter-spacing: 2px;"
                  data-desktop-style="letter-spacing: 4px;"
                >
                  <span className="sm:hidden" style={{ letterSpacing: "2px" }}>PERFECTING EVALUATION</span>
                  <span className="hidden sm:inline" style={{ letterSpacing: "4px" }}>PERFECTING EVALUATION</span>
                </p>
              </div>
              
              {/* Social Media Icons with white circular backgrounds */}
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200 group"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 text-primary group-hover:text-purple-400 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200 group"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-5 h-5 text-primary group-hover:text-cyan-300 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200 group"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5 text-primary group-hover:text-purple-400 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200 group"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 text-primary group-hover:text-cyan-300 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200 group"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5 text-primary group-hover:text-purple-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Navigation Sections - Row on Mobile, Grid on Desktop */}
            <div className="grid grid-cols-3 gap-4 lg:contents">
              {/* Product Section */}
              <div>
            <h3 className="text-primary font-bold text-xs sm:text-lg lg:text-lg mb-6" style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%' }}>Product</h3>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/how-to-use" 
                className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
              >
                Watch Demo
              </Link>
              <Link 
                to="/our-concept" 
                className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
              >
                Our Concept
              </Link>
              <Link 
                to="/algorithm" 
                className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
              >
                Framework
              </Link>
              <Link 
                to="/meet-a-human" 
                className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
              >
                MetaHuman
              </Link>
              <Link 
                to="/application-ui" 
                className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
              >
                Platform
              </Link>
            </nav>
          </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-primary font-bold text-xs sm:text-lg lg:text-lg mb-6" style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%' }}>Resources</h3>
                <nav className="flex flex-col space-y-4">
                  <Link 
                    to="/how-to-use" 
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                    style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
                  >
                    Getting Started
                  </Link>
                  <Link 
                    to="/blog" 
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                    style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/whats-new" 
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                    style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
                  >
                    What's New
                  </Link>
                </nav>
              </div>

              {/* Company Section */}
              <div>
                <h3 className="text-primary font-bold text-xs sm:text-lg lg:text-lg mb-6" style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%' }}>Company</h3>
                <nav className="flex flex-col space-y-4">
                  <Link 
                    to="/about" 
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                    style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
                  >
                    About
                  </Link>
                  <Link 
                    to="/careers" 
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                    style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
                  >
                    Careers
                  </Link>
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r hover:from-purple-400 hover:via-cyan-200 hover:to-cyan-300 from-primary to-primary/70 bg-clip-text text-transparent hover:translate-x-2 transition-all duration-300 ease-in-out text-xs sm:text-base lg:text-base"
                    style={{ fontFamily: 'Montserrat', color: '#1A323C', lineHeight: '135%', fontWeight: 400 }}
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Outside bg-brand-bg */}
      <div className="py-6 text-primary">
        <div className=" mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary text-sm mb-4 md:mb-0">
              Copyright © 2024 Skets Griphic Pvt. Ltd.
            </p>
            <div className="flex items-center space-x-2 text-primary text-sm">
              <span>A</span>
              <img 
                src="/griphic_product.svg" 
                alt="Griphic" 
                className="h-6 w-auto"
              />
              <span className='font-medium text-sm'>Product</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer