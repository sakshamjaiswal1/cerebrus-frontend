import AnimatedButton from "../common/AnimatedButton";
import SwipeableCarousel from "../common/SwipeableCarousel";

const RecentUpdatesSection = () => {
  const updatesData = [
    {
      id: "update1",
      image: "/exp_img_1.svg",
      title: "Business Leader of the Year at the EB-5 World CDS Congress",
      description:
        "We are thrilled to announce that our CEO has been recognized as Business Leader of the Year at the prestigious EB-5 World CDS Congress. This recognition highlights our commitment to innovation in the recruitment industry and our dedication to transforming how organizations evaluate talent through AI-powered solutions.",
      date: "March 15, 2024",
      buttonText: "Read More",
    },
    {
      id: "update2",
      image: "/exp_img_2.svg",
      title: "Business Leader of the Year at the EB-5 World CDS Congress",
      description:
        "Our latest product updates include enhanced AI capabilities, improved user interface, and new integrations with popular HR platforms. These updates make our interview platform even more powerful and user-friendly for organizations of all sizes.",
      date: "March 10, 2024",
      buttonText: "Read More",
    },
    {
      id: "update3",
      image: "/exp_img_3.svg",
      title: "Business Leader of the Year at the EB-5 World CDS Congress",
      description:
        "We're excited to share insights from our recent research on AI bias in hiring processes. Our team has published groundbreaking findings that help ensure fair and unbiased candidate evaluation across diverse talent pools.",
      date: "March 5, 2024",
      buttonText: "Read More",
    },
    {
      id: "update4",
      image: "/exp_img_4.svg",
      title: "Partnership with Leading Universities",
      description:
        "Cerebrus has partnered with top universities to enhance our AI algorithms with academic research. This collaboration ensures our platform stays at the forefront of innovation in talent assessment technology.",
      date: "February 28, 2024",
      buttonText: "Read More",
    },
    {
      id: "update5",
      image: "/exp_img_5.svg",
      title: "New MetaHuman Interview Features",
      description:
        "Introducing advanced MetaHuman capabilities including emotion recognition, natural language processing improvements, and personalized interview experiences that adapt to each candidate's communication style.",
      date: "February 20, 2024",
      buttonText: "Read More",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
         <div className="w-full flex justify-between items-center mb-6 sm:mb-8">
          <h2 
            className="font-medium text-primary text-[24px] sm:text-[30px] lg:text-[36px]"
            style={{
              fontFamily: 'Montserrat',
              color: '#1A323C',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal'
            }}
          >
            Recent Updates
          </h2>
          <AnimatedButton text="View All" className="!border !border-primary !bg-transparent" />
        </div>

        <SwipeableCarousel
          items={updatesData}
          
          autoPlayInterval={1000}
          showButton={true}
          className="w-full"
          buttonComponent={<AnimatedButton text="Read More" className="!ml-[45%] !border !border-primary !bg-transparent" />}
        />
      </div>
    </section>
  );
};

export default RecentUpdatesSection;
