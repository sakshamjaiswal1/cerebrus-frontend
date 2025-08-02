import { useState } from "react"
import AnimatedButton from "../common/AnimatedButton"

const BlogTabs = () => {
  const [activeTab, setActiveTab] = useState("blogs")

  const blogItems = [
    {
      image: "/exp_img_1.svg",
      title: "Business Leader of the Year' at the 33rd World HRD Congress",
      description: "Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology.",
      category: "Technology",
      date: "2 min read"
    },
    {
      image: "/exp_img_2.svg", 
      title: "Business Leader of the Year' at the 33rd World HRD Congress",
      description: "Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology.",
      category: "Technology",
      date: "2 min read"
    },
    {
      image: "/exp_img_3.svg",
      title: "Business Leader of the Year' at the 33rd World HRD Congress", 
      description: "Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology.",
      category: "Technology",
      date: "2 min read"
    },
    {
      image: "/exp_img_4.svg",
      title: "Business Leader of the Year' at the 33rd World HRD Congress",
      description: "Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology.", 
      category: "Technology",
      date: "2 min read"
    },
    {
      image: "/exp_img_5.svg",
      title: "Business Leader of the Year' at the 33rd World HRD Congress",
      description: "Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology.",
      category: "Technology", 
      date: "2 min read"
    },
    {
      image: "/exp_img_6.svg",
      title: "Business Leader of the Year' at the 33rd World HRD Congress",
      description: "Cerebrus started as a dream shared by a group of engineers from IIT Delhi. We wanted to solve meaningful real-life problems by utilizing the potential of technology.",
      category: "Technology",
      date: "2 min read"
    }
  ]

  const caseStudyItems = [
    {
      image: "/card_img_1.svg",
      title: "Case Study: Transforming Recruitment at Tech Corp",
      description: "How Cerebrus helped a Fortune 500 company reduce hiring time by 70% while improving candidate quality and experience.",
      category: "Case Study",
      date: "5 min read"
    },
    {
      image: "/card_img_2.svg",
      title: "Case Study: AI-Powered Interviews Success Story", 
      description: "Learn how a startup scaled their hiring process using MetaHuman interviews, conducting 500+ interviews per month.",
      category: "Case Study",
      date: "4 min read"
    },
    {
      image: "/card_img_3.svg",
      title: "Case Study: Remote Hiring Excellence",
      description: "Discover how a global company maintained hiring standards across 15 countries using Cerebrus's AI evaluation system.",
      category: "Case Study", 
      date: "6 min read"
    }
  ]

  const currentItems = activeTab === "blogs" ? blogItems : caseStudyItems

  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        
        {/* Tab Navigation */}
        <div className="flex items-center space-x-8 mb-12">
          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "blogs"
                ? "bg-primary text-white"
                : "bg-white text-primary border border-gray-300 hover:border-primary"
            }`}
          >
            Blogs
          </button>
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "case-studies"
                ? "bg-primary text-white"
                : "bg-white text-primary border border-gray-300 hover:border-primary"
            }`}
          >
            Case Studies
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-brand-bg rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-primary leading-tight line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-primary opacity-70 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-primary opacity-70">{item.category}</span>
                    <span className="text-xs text-primary opacity-50">•</span>
                    <span className="text-xs text-primary opacity-70">{item.date}</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <AnimatedButton text="Read more" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogTabs