import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import CTASection from "../components/home/CTASection"
import ApplicationUIHero from "../components/applicationui/ApplicationUIHero"
import FeatureSection from "../components/applicationui/FeatureSection"

function ApplicationUI() {
  const sections = [
    {
      title: "Intuitive Dashboard",
      description: "Our sleek and user-friendly dashboard ensures you have all the critical details at your fingertips.",
      features: [
        {
          title: "Key Metrics Displayed",
          description: "Get an overview of active jobs, pending reviews, upcoming interviews, and pipeline status."
        },
        {
          title: "Interactive Visuals",
          description: "Our dynamic charts and graphs offer real-time insights, keeping you updated on hiring trends."
        },
        {
          title: "Quick Actions",
          description: "One-click navigation to critical tasks like candidate feedback, job creation, and team updates."
        }
      ],
      image: "/exp_img_1.svg",
      imageAlt: "Intuitive Dashboard Interface"
    },
    {
      title: "Interviewed Candidates Overview",
      description: "Effortlessly track and evaluate candidates with a dynamic, color-coded interface.",
      features: [
        {
          title: "Green: Exceptional candidates, excelling in specific skills.",
          description: ""
        },
        {
          title: "Yellow: Average performers, showing moderate skill proficiency.",
          description: ""
        },
        {
          title: "Red: Candidates with below-average performance in a particular skill.",
          description: ""
        },
        {
          title: "Detailed Profiles",
          description: "Access each candidate's assessments, interview recordings, and reports."
        }
      ],
      image: "/exp_img_2.svg",
      imageAlt: "Interviewed Candidates Overview Interface"
    },
    {
      title: "Configurable Group Sorting",
      description: "Employ advanced tools to simplify your candidate search.",
      features: [
        {
          title: "Customizable Filters",
          description: "Sort and filter candidates by assessment scores, availability, and more."
        },
        {
          title: "Smart Sorting",
          description: "Setting the order of the lists by name, performance score, notice period, and more with one click."
        }
      ],
      image: "/exp_img_3.svg",
      imageAlt: "Configurable Group Sorting Interface"
    },
    {
      title: "Detailed Interview Reports",
      description: "Empower your team with detailed reports covering the basics.",
      features: [
        {
          title: "Assessment Summaries",
          description: "Quickly understand candidates' technical & soft skill evaluations."
        },
        {
          title: "Easy Sharing",
          description: "Export or share specific sections within the app to align with your team instantly."
        }
      ],
      image: "/exp_img_4.svg",
      imageAlt: "Detailed Interview Reports Interface"
    },
    {
      title: "Integrated Chat",
      description: "Enable internal communication through comments and feedback.",
      features: [
        {
          title: "Timeline View",
          description: "A chronological feed of all interview-related updates in one scrollable view."
        },
        {
          title: "Action Tracker",
          description: "Logs specific user actions like rejections and interview completions, along with timestamps."
        },
        {
          title: "Candidate History",
          description: "Links to past interviews and you get references for each candidate, with access to previous reports."
        }
      ],
      image: "/exp_img_5.svg",
      imageAlt: "Integrated Chat Interface"
    }
  ]

  return (
    <div className="bg-white">
      <main className="p-10">
        <Header />
        <ApplicationUIHero />
        {sections.map((section, index) => (
          <FeatureSection
            key={index}
            title={section.title}
            description={section.description}
            features={section.features}
            image={section.image}
            imageAlt={section.imageAlt}
          />
        ))}
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default ApplicationUI