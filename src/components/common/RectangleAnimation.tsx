import { useEffect } from "react";
import "./rect-anim.css";

const RectangleAnimation = () => {
  useEffect(() => {
    const rect1 = document.getElementById("rect1") as HTMLElement;
    const rect2 = document.getElementById("rect2") as HTMLElement;
    const rect3 = document.getElementById("rect3") as HTMLElement;
    const rect4 = document.getElementById("rect4") as HTMLElement;

    let isMerged = false;

    function getResponsiveTransforms() {
      const screenWidth = window.innerWidth;

      // Responsive scaling factors
      let translateX, translateY, scaleReduction;

      if (screenWidth <= 480) {
        // Mobile phones
        translateX = 60;
        translateY = 8;
        scaleReduction = 0.7;
      } else if (screenWidth <= 640) {
        // Small tablets
        translateX = 80;
        translateY = 12;
        scaleReduction = 0.65;
      } else if (screenWidth <= 1024) {
        // Tablets
        translateX = 90;
        translateY = 13;
        scaleReduction = 0.6;
      } else {
        // Desktop (original values scaled)
        translateX = 105;
        translateY = 15;
        scaleReduction = 0.6;
      }

      return { translateX, translateY, scaleReduction };
    }

    function animate() {
      const { translateX, translateY, scaleReduction } =
        getResponsiveTransforms();

      if (isMerged) {
        // Return to original state
        rect1.style.transform = "scaleX(1)";
        rect2.style.transform = "scaleX(1) translate(0, 0)";
        rect3.style.transform = "scaleX(1) translate(0, 0)";
        rect4.style.transform = "scaleX(1)";
      } else {
        // Animate to merged state with responsive values
        rect1.style.transform = `scaleX(${scaleReduction})`;
        rect2.style.transform = `scaleX(0.8) translate(-${translateX}px, ${translateY}px)`;
        rect3.style.transform = `scaleX(0.8) translate(${translateX}px, -${translateY}px)`;
        rect4.style.transform = `scaleX(${scaleReduction})`;
      }
      isMerged = !isMerged;
    }

    // Handle window resize
    function handleResize() {
      // Re-animate with new responsive values
      if (isMerged) {
        animate();
      }
    }

    const intervalId = setInterval(animate, 2000);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="scale-75 sm:scale-90 lg:scale-100 w-full h-full flex items-center justify-center"
      id="rect-anim"
    >
      <div className="container">
        <svg
          className="goo"
          viewBox="0 0 750 645"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
          <g>
            <rect
              id="rect1"
              x="30"
              y="30"
              width="225"
              height="330"
              fill="black"
              rx="30"
              ry="30"
            />
            <rect
              id="rect4"
              x="285"
              y="390"
              width="435"
              height="225"
              fill="black"
              rx="30"
              ry="30"
            />
          </g>
          <g filter="url(#goo)">
            <rect
              id="rect2"
              x="285"
              y="30"
              width="435"
              height="330"
              fill="black"
              rx="30"
              ry="30"
            />
            <rect
              id="rect3"
              x="30"
              y="390"
              width="225"
              height="225"
              fill="black"
              rx="30"
              ry="30"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RectangleAnimation;
