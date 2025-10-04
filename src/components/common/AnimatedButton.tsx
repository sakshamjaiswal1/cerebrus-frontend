interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  whiteButton?: boolean;
  variant?: 'default' | 'outline';
  arrowIcon?: React.ReactNode;
  gradientBorder?: boolean;
}

const AnimatedButton = ({
  text,
  onClick,
  className = '',
  whiteButton = false,
  variant = 'default',
  arrowIcon,
  gradientBorder = false,
}: AnimatedButtonProps) => {
  const baseClasses = 'cursor-pointer group relative overflow-hidden text-primary text-sm font-medium transition-all duration-300 hover:text-white';
  const variantClasses = variant === 'outline'
    ? 'border border-primary px-4 py-1.5'
    : 'bg-white px-5 py-1.5';

  return (
    <div className={gradientBorder ? "p-0.5 rounded-full w-max" : ""} style={{
      background: gradientBorder ? "linear-gradient(90deg, #8BD6CE 0%, #BD9AE3 100%)" : "transparent",
    }}
    >
      <button
        className={`${baseClasses} ${variantClasses} rounded-full ${className}`}
        onClick={() => onClick?.()}
      >
        {/* Sliding background */}
        <div
          className="absolute inset-0 transform -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"
          style={{
            background: "linear-gradient(90deg, #8BD6CE 0%, #BD9AE3 100%)",
          }}
        />

        {/* Button content */}
        {!whiteButton && (
          <div className="relative flex items-center space-x-1 sm:space-x-2">
            <span className="whitespace-nowrap">{text}</span>

            {/* Arrow icon with rotation - transparent arrow with colored background */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 relative overflow-hidden flex-shrink-0">
              {/* Transparent arrow cutout */}
              {arrowIcon ? arrowIcon : (
                <div
                  className="absolute inset-0 transform group-hover:rotate-[45deg] transition-transform duration-300 top-0 bottom-1"
                  style={{
                    background: `url("data:image/svg+xml,${encodeURIComponent(`
                          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M18 6H6M18 6V18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                          </svg>
                        `)}")`,
                    backgroundSize: "10px 10px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    mixBlendMode: "difference",
                  }}
                />
              )}
            </div>
          </div>
        )}
        {whiteButton && (
          <div className="relative flex items-center space-x-1 sm:space-x-2">
            <span className="whitespace-nowrap">{text}</span>

            {/* Arrow icon with rotation - transparent arrow with colored background */}
            <div className="w-6 h-6 bg-white group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 relative overflow-hidden">
              {/* Transparent arrow cutout */}
              <div className="absolute inset-0 transform group-hover:rotate-[45deg] transition-transform duration-300 text-primary p-1 scale-80">
                <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62953 2.1183L1.26887 2.14737C1.05006 2.14855 0.870324 2.07441 0.729647 1.92493C0.588969 1.77545 0.519407 1.59113 0.520959 1.37196C0.531213 1.16222 0.607312 0.981671 0.749256 0.830297C0.891201 0.678922 1.07175 0.602823 1.29092 0.602L8.5114 0.562853C8.6208 0.56226 8.71879 0.58215 8.80536 0.622522C8.89193 0.662895 8.97112 0.719717 9.04292 0.792989C9.11473 0.866261 9.17118 0.945815 9.21229 1.03165C9.25339 1.11749 9.27347 1.21529 9.27251 1.32506L9.23336 8.54554C9.23227 8.74611 9.15602 8.92211 9.00459 9.07353C8.85317 9.22496 8.67277 9.30562 8.4634 9.3155C8.2446 9.31669 8.0603 9.24239 7.91051 9.09259C7.76072 8.9428 7.68659 8.75868 7.68814 8.54024L7.71761 3.20638L1.88739 9.0366C1.73157 9.19243 1.54863 9.27091 1.33858 9.27205C1.12853 9.27319 0.946794 9.19668 0.793378 9.04253C0.639963 8.88838 0.56346 8.70629 0.563869 8.49624C0.564279 8.28619 0.642759 8.10362 0.79931 7.94852L6.62953 2.1183Z" fill="#1A323C" />
                </svg>
              </div>
            </div>
          </div>
        )}

      </button>
    </div>
  );
};

export default AnimatedButton;