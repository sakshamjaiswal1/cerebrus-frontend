import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";

const FallbackPage = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate elements in sequence
    const timer1 = setTimeout(() => setAnimationStep(1), 200);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    const timer3 = setTimeout(() => setAnimationStep(3), 1400);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Helmet>
          <title>Page Not Found - Cerebrus</title>
          <meta name="description" content="The page you're looking for doesn't exist. Let's get you back on track." />
        </Helmet>
        
        <Header />
        
        <main className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Animated 404 Number */}
            <div className="relative mb-8 overflow-hidden">
              <h1 
                className={`text-8xl md:text-9xl font-bold text-primary transition-all duration-1000 transform ${
                  animationStep >= 1 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-full opacity-0'
                }`}
              >
                404
              </h1>
              
              {/* Animated underline */}
              <div 
                className={`absolute bottom-0 left-1/2 h-2 bg-gradient-to-r from-primary-light to-secondary rounded-full transition-all duration-800 transform -translate-x-1/2 ${
                  animationStep >= 1 
                    ? 'w-32 opacity-100' 
                    : 'w-0 opacity-0'
                }`}
              />
            </div>

            {/* Animated Content */}
            <div 
              className={`transition-all duration-1000 delay-300 transform ${
                animationStep >= 2 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                Oops! Page Not Found
              </h2>
              
              <p className="text-lg text-primary/80 mb-8 leading-relaxed">
                It seems like you've wandered into uncharted territory. 
                The page you're looking for doesn't exist, but don't worry – 
                we'll help you find your way back.
              </p>
            </div>

            {/* Animated Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 transform ${
                animationStep >= 3 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <button
                onClick={handleGoHome}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Go Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105"
              >
                Contact Support
              </Link>
            </div>

            {/* Animated Floating Elements */}
            <div className="relative mt-16">
              {/* Floating circles */}
              <div 
                className={`absolute -top-8 -left-8 w-16 h-16 bg-primary-light/20 rounded-full transition-all duration-2000 ${
                  animationStep >= 2 ? 'animate-bounce' : 'opacity-0'
                }`}
                style={{ animationDelay: '0s', animationDuration: '3s' }}
              />
              <div 
                className={`absolute -top-4 -right-12 w-12 h-12 bg-secondary/20 rounded-full transition-all duration-2000 ${
                  animationStep >= 2 ? 'animate-bounce' : 'opacity-0'
                }`}
                style={{ animationDelay: '1s', animationDuration: '3s' }}
              />
              <div 
                className={`absolute -bottom-6 left-12 w-8 h-8 bg-primary-light/30 rounded-full transition-all duration-2000 ${
                  animationStep >= 3 ? 'animate-bounce' : 'opacity-0'
                }`}
                style={{ animationDelay: '2s', animationDuration: '3s' }}
              />
            </div>

            {/* Animated Navigation Suggestions */}
            <div 
              className={`mt-12 p-6 bg-brand-bg rounded-2xl transition-all duration-1000 delay-900 transform ${
                animationStep >= 3 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Popular Pages
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { to: "/features", label: "Features" },
                  { to: "/about", label: "About Us" },
                  { to: "/how-to-use", label: "How to Use" },
                  { to: "/careers", label: "Careers" }
                ].map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 text-sm bg-white text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 ${
                      animationStep >= 3 ? 'animate-fadeInUp' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${1200 + index * 100}ms`,
                      animationDuration: '600ms',
                      animationFillMode: 'forwards'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>


    </div>
  );
};

export default FallbackPage;