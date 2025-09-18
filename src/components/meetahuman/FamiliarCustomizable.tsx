import { useState, useEffect } from "react";
import { useBreakpoint } from "../../hooks/useBreakPoints";

const images = [
  "/meta-card-3.png",
  "/meta-card-4.png",
  "/meta-card-0.png",
  "/meta-card-1.png",
  "/meta-card-2.png",
];

const FamiliarCustomizable = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const { isSm, isMd } = useBreakpoint();
  const isMobile = isSm || isMd; // Mobile/tablet (≤767px)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStyle = (index: number) => {
    let offset = index - currentIndex;
    const totalImages = images.length;
    if (offset > totalImages / 2) {
      offset -= totalImages;
    }
    if (offset < -totalImages / 2) {
      offset += totalImages;
    }

    const visibleRange = isMobile ? 1 : 2;
    const isVisible = Math.abs(offset) <= visibleRange;

    const translateXVw = isMobile ? offset * 35 : offset * 15;
    const scale = 1 - Math.abs(offset) * (isMobile ? 0.2 : 0.15);
    const blurPx = Math.abs(offset) * 4;

    return {
      transform: `translateX(${translateXVw}vw) scale(${scale})`,
      filter: `blur(${blurPx}px)`,
      zIndex: 10 - Math.abs(offset),
      opacity: isVisible ? 1 : 0,
      transition: "all 0.5s ease-out",
    };
  };

  return (
    <section className="bg-primary py-20 overflow-x-hidden max-md:hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center text-[#A5F5ED] mb-16 italic"
          style={{
            fontFamily: "Georgia, serif"
          }}
        >
          Familiar, customizable, <span className="font-serif text-white font-normal" style={{
            fontStyle: "normal"
          }}>and designed to &nbsp;</span>
          represent you
        </h2>
        <div className="relative h-[350px] md:h-[500px] flex justify-center items-center">
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute w-[200px] h-[300px] md:w-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
              style={getStyle(index)}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamiliarCustomizable;
