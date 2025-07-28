import { useEffect } from "react";
import "./rect-anim.css";

const RectangleAnimation = () => {
    useEffect(() => {
        const rect1 = document.getElementById('rect1') as HTMLElement;
        const rect2 = document.getElementById('rect2') as HTMLElement;
        const rect3 = document.getElementById('rect3') as HTMLElement;
        const rect4 = document.getElementById('rect4') as HTMLElement;

        let isMerged = false;

        function animate() {
            if (isMerged) {
                // Return to original state
                rect1.style.transform = 'scaleX(1)';
                rect2.style.transform = 'scaleX(1) translate(0, 0)';
                rect3.style.transform = 'scaleX(1) translate(0, 0)';
                rect4.style.transform = 'scaleX(1)';
            } else {
                // Animate to merged state
                rect1.style.transform = 'scaleX(0.6)';
                rect2.style.transform = 'scaleX(0.8) translate(-70px, 10px)';
                rect3.style.transform = 'scaleX(0.8) translate(70px, -10px)';
                rect4.style.transform = 'scaleX(0.6)';
            }
            isMerged = !isMerged;
        }

        setInterval(animate, 2000);
    }, [])
    return (
        <div id="rect-anim">
            <div className="container">
                <svg className="goo">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                    <g>
                        <rect id="rect1" x="20" y="20" width="150" height="220" fill="black" rx="20" ry="20" />
                        <rect id="rect4" x="190" y="260" width="290" height="150" fill="black" rx="20" ry="20" />
                    </g>
                    <g filter="url(#goo)">
                        <rect id="rect2" x="190" y="20" width="290" height="220" fill="black" rx="20" ry="20" />
                        <rect id="rect3" x="20" y="260" width="150" height="150" fill="black" rx="20" ry="20" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default RectangleAnimation