import TeamCard from "../common/TeamCard"

const TeamSection = () => {
  const teamMembers = [
    {
      id: "team1",
      image: "/exp_img_1.svg",
      name: "Arjun Bansal",
      position: "Founder & CEO (Product Lead Strategy Officer)",
      description: "Visionary leader with 10+ years of experience in AI and product strategy. Passionate about revolutionizing the hiring process through innovative technology."
    },
    {
      id: "team2", 
      image: "/exp_img_2.svg",
      name: "Priya Sharma",
      position: "Co-Founder & CTO (Principal AI Research Lead)",
      description: "AI research expert with a PhD in Machine Learning. Leads our technical innovation and ensures our AI models deliver accurate and fair assessments."
    },
    {
      id: "team3",
      image: "/exp_img_3.svg",
      name: "Rajesh Kumar", 
      position: "Head of Operations (Principal Technology Officer)",
      description: "Operations excellence expert who ensures smooth platform delivery. Focuses on scalability and user experience optimization."
    },
    {
      id: "team4",
      image: "/exp_img_4.svg",
      name: "Sarah Johnson",
      position: "Principal Technology Officer",
      description: "Technology architecture specialist with expertise in cloud platforms and system design. Ensures our platform is robust and scalable."
    }
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-8">
        <h2 className="text-3xl font-medium text-primary mb-8">
          The Minds Behind the Mission
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
  )
}

export default TeamSection