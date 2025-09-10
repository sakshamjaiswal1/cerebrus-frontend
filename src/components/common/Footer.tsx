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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Logo and Tagline Section - Bigger */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="/Cerebrus_Logo.svg" 
                  alt="Cerebrus" 
                  className="h-20 w-auto mb-4"
                />
                <p className="text-primary text-sm font-medium tracking-wider text-center">
                  PERFECTING EVALUATION
                </p>
              </div>
              
              {/* Social Media Icons with white circular backgrounds */}
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-70 transition-opacity duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          {/* Product Section */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6">Product</h3>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/how-to-use" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Watch Demo
              </Link>
              <Link 
                to="/our-concept" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Our Concept
              </Link>
              <Link 
                to="/algorithm" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Framework
              </Link>
              <Link 
                to="/meet-a-human" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                MetaHuman
              </Link>
              <Link 
                to="/application-ui" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Platform
              </Link>
            </nav>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6">Resources</h3>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/how-to-use" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Getting Started
              </Link>
              <Link 
                to="/blog" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Blog
              </Link>
              <Link 
                to="/whats-new" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                What's New
              </Link>
            </nav>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6">Company</h3>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                About
              </Link>
              <Link 
                to="/careers" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                Contact Us
              </Link>
            </nav>
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
              <span>GRIPHIC Product</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer