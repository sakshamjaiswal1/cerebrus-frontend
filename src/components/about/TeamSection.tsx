import TeamCard from "../common/TeamCard";

const TeamSection = () => {
  const teamMembers = [
    {
      id: "team1",
      image: "/siddhant.png",
      name: "Siddhant Bansal",
      position: "Founder & CEO (Chief Executive Officer)",
      description:
        "Visionary leader with 10+ years of experience in AI and product strategy. Passionate about revolutionizing the hiring process through innovative technology.",
    },
    {
      id: "team2",
      image: "/ashwani.png",
      name: "Ashwani",
      position: "Co-Founder & CPO (Chief Product Officer)",
      description:
        "AI research expert with a PhD in Machine Learning. Leads our technical innovation and ensures our AI models deliver accurate and fair assessments.",
    },
    {
      id: "team3",
      image: "/pransh.png",
      name: "Pranshuman Singh Bhouriyal",
      position: "COO (Chief Operating Officer)",
      description:
        "Operations excellence expert who ensures smooth platform delivery. Focuses on scalability and user experience optimization.",
    },
    {
      id: "team4",
      image: "/somya.png",
      name: "Somya Darshan Pattnaik",
      position: "CTO (Chief Technology Officer)",
      description:
        "Technology architecture specialist with expertise in cloud platforms and system design. Ensures our platform is robust and scalable.",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
      <div className="mx-auto px-0 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-6 sm:mb-8">
          The Minds Behind the Mission
        </h2>

        {/* Mobile: Horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 sm:hidden">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex-shrink-0 w-72">
              <TeamCard
                image={member.image}
                name={member.name}
                position={member.position}
                description={member.description}
              />
            </div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
