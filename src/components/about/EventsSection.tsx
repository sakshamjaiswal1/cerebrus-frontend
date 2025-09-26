import SwipeableCarousel from "../common/SwipeableCarousel";

const EventsSection = () => {
  // Remove date and title from each event in eventsData
  const eventsData = [
    {
      id: "event1",
      image: "src/assets/local/about/events1.png",
      title: "",
      description:
        "Celebrating innovation and entrepreneurship in the tech industry.",
      date: "",
    },
    {
      id: "event2",
      image: "src/assets/local/about/events1.png",
      title: "",
      description:
        "Presenting our AI-powered interview platform to investors and industry leaders.",
      date: "",
    },
    {
      id: "event3",
      image: "src/assets/local/about/events1.png",
      title: "",
      description: "Recognition for excellence in AI-driven hiring solutions.",
      date: "",
    },
    {
      id: "event4",
      image: "src/assets/local/about/events1.png",
      title: "",
      description:
        "Global platform showcasing innovative recruitment technologies.",
      date: "",
    },
    {
      id: "event5",
      image: "src/assets/local/about/events1.png",
      title: "",
      description:
        "Award for outstanding contribution to the recruitment industry.",
      date: "",
    },
  ];
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-6 sm:mb-8">
        Events & Recognitions
      </h2>
      <div className="mx-auto p-4 sm:p-6 lg:p-8 bg-brand-bg rounded-xl">
        <SwipeableCarousel
          items={eventsData}
          // cardBackground="bg-gradient-to-b from-transparent to-gray-100"
          autoPlayInterval={5000}
          className="w-full"
          descClassName="!text-lg font-medium !text-gray-600"
        />
      </div>
    </section>
  );
};

export default EventsSection;
