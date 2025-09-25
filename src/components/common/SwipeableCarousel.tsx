import { useState, useEffect, useRef } from "react";

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  date?: string;
  buttonText?: string;
}

interface SwipeableCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
  showButton?: boolean;
  descClassName?: string;
  buttonComponent?: React.ReactNode;
}

const SwipeableCarousel = ({
  items,
  autoPlayInterval = 1000,
  className = "",
  showButton = false,
  descClassName = "",
  buttonComponent = null,
}: SwipeableCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervelRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (!isHovered && autoPlayInterval > 0) {
       intervelRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % items.length
          // Auto-scroll to the new index
          if (containerRef.current) {
            const cardWidth = containerRef.current.offsetWidth / 3
            containerRef.current.scrollTo({
              left: newIndex * cardWidth,
              behavior: 'smooth'
            })
          }
          return newIndex
        })
      }, autoPlayInterval)

      return () => clearInterval(intervelRef.current!)
    }
  }, [isHovered, autoPlayInterval, items.length])

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / 3; // Show 3 cards at once
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[408px] p-[24px] rounded-[20px] border border-[#F7F7F7]"
            style={{
              background: "linear-gradient(9deg, #F7F7F7 6.49%, rgba(247, 247, 247, 0.00) 93.46%)"
            }}
          >
            <div
              className="w-full transition-transform duration-300 hover:scale-105"
            >
              {" "}
              {/* Image Section */}
              <div className="w-[300px] h-[300px] overflow-hidden rounded-xl mx-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{
                    aspectRatio: "4/4",
                  }}
                />
              </div>
              {/* Content Section */}
              <div className="p-6 flex flex-col items-center text-center w-full">
                <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2 text-center w-full">
                  {item.title}
                </h3>

                {item.description && (
                  <p
                    className={`text-sm text-primary opacity-70 mb-4 line-clamp-3 text-center w-full ${descClassName}`}
                  >
                    {item.description}
                  </p>
                )}

                {item.date && (
                  <p className="text-xs text-primary opacity-50 mb-4">
                    {item.date}
                  </p>
                )}

                {showButton && item.buttonText && buttonComponent ? (
                  buttonComponent
                ) : (
                  <button className="text-sm font-medium text-secondary hover:opacity-70 transition-opacity">
                    {item.buttonText} →
                  </button>
                )}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="justify-center mt-6 space-x-2 hidden">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCarousel;
