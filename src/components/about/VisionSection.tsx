import { useBreakpoint } from "../../hooks/useBreakPoints";

const VisionSection = () => {
  const { isSm, isMd } = useBreakpoint();
  const isMobile = isSm || isMd; // Mobile/tablet (≤767px)

  const visionData = [
    {
      id: "vision_1",
      img: isMobile ? "/about_img_1.png" : "/about_img_1.svg",
    },
    {
      id: "vision_2",
      img: isMobile ? "/about_img_2.png" : "/about_img_2.svg",
    },
    {
      id: "vision_3",
      img: isMobile ? "/about_img_3.png" : "/about_img_3.svg",
    },
  ];

  return (
    <section className="w-full">
      {visionData.map((item, idx) => (
        <div key={item.id + idx}>
          <img
            src={item.img}
            alt={item.id}
            className="w-full object-contain mb-6 sm:mb-8 lg:mb-10"
          />
        </div>
      ))}
    </section>
  );
};

export default VisionSection;
