import SwipeableCarousel from "../common/SwipeableCarousel"

const EventsSection = () => {
  const eventsData = [
    {
      id: "event1",
      image: "/card_img_1.svg",
      title: "The Entrepreneur ship Championship Organized by MAITS",
      description: "Celebrating innovation and entrepreneurship in the tech industry.",
      date: "March 2024"
    },
    {
      id: "event2",
      image: "/card_img_2.svg",
      title: "Startup India Investment Summit 2024",
      description: "Presenting our AI-powered interview platform to investors and industry leaders.",
      date: "February 2024"
    },
    {
      id: "event3",
      image: "/card_img_3.svg",
      title: "Business Leader of the Year at the EB-5 World CDS Congress",
      description: "Recognition for excellence in AI-driven hiring solutions.",
      date: "January 2024"
    },
    {
      id: "event4",
      image: "/exp_img_1.svg",
      title: "FIATA World Congress 2024",
      description: "Global platform showcasing innovative recruitment technologies.",
      date: "December 2023"
    },
    {
      id: "event5",
      image: "/exp_img_2.svg",
      title: "EB-5 Industry Achievement Awards",
      description: "Award for outstanding contribution to the recruitment industry.",
      date: "November 2023"
    }
  ]

  return (
    <section className="w-full py-16">
      <h2 className="text-3xl font-medium text-primary mb-8">
        Events & Recognitions
      </h2>
      <div className="mx-auto p-8 bg-brand-bg rounded-xl">


        <SwipeableCarousel
          items={eventsData}
          cardBackground="bg-gradient-to-b from-transparent to-gray-100"
          autoPlayInterval={5000}
          className="w-full"
        />
      </div>
    </section>
  )
}

export default EventsSection