import { useState, useRef, useEffect } from "react"
import AnimatedButton from "../common/AnimatedButton"

const BlogTabs = () => {
  const [activeTab, setActiveTab] = useState("blogs")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("Published Date (latest to oldest)")
  const [searchQuery, setSearchQuery] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  const sortOptions = [
    "Published Date (latest to oldest)",
    "Reading Time (Low to high)",
    "Alphabetical (A to Z)"
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="w-full flex justify-between items-center">
          {/* Tab Navigation */}
          <div className="relative flex border-2 border-gray-300 w-max rounded-full items-center mb-8 sm:mb-10 lg:mb-12">
            {/* Sliding Background */}
            <div
              className={`absolute top-0 bottom-0 bg-primary rounded-full transition-all duration-300 ease-in-out ${activeTab === "blogs"
                ? "left-0 w-[calc(40%-1px)]"
                : "left-[calc(40%+1px)] w-[calc(60%-1px)]"
                }`}
            />

            <button
              onClick={() => setActiveTab("blogs")}
              className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "blogs"
                ? "text-white"
                : "text-gray-700 hover:text-gray-900"
                }`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`relative z-10 px-4 sm:px-6 text-center py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "case-studies"
                ? "text-white"
                : "text-gray-700 hover:text-gray-900"
                }`}
            >
              Case Studies
            </button>
          </div>

          {/* Sort and Search Controls */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Sort by Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-gray-400 transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sort by
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute top-0 left-0 w-80 bg-white border-2 border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden"
                  style={{
                    animation: 'wobblyScale 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                    transformOrigin: 'top left'
                  }}
                >
                  <div className="p-2">
                    {sortOptions.map((option, index) => (
                      <div className="hover:bg-brand-bg cursor-pointer hover:px-2 transition-all duration-300 rounded-xl" key={index}>
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedSort(option)
                            setIsDropdownOpen(false)
                          }}
                          className={`w-full px-4 py-3 text-left text-sm cursor-pointer transition-all duration-200 rounded-xl ${selectedSort === option
                            ? "bg-black bg-clip-text text-transparent font-medium"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-[#c718b9] hover:via-[#A5F5ED] hover:to-[#A5F5ED] hover:bg-clip-text hover:text-transparent"
                            }`}
                          style={{
                            animationDelay: `${index * 0.05}s`,
                            animation: `slideInOption 0.3s ease-out ${index * 0.05}s both`
                          }}
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative w-max">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-42 pl-12 py-2.5 border-2 border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all duration-200"
              />

            </div>
          </div>


        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-brand-bg border border-gray-300 hover:bg-gray-200 hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="h-32 sm:h-40 lg:h-max overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-11/12 mx-auto border border-gray-300 my-4 rounded-xl h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-primary leading-tight line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-primary opacity-70 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-1 sm:pt-2">
                  <AnimatedButton text="Read more" className="!border !border-primary !bg-transparent !text-primary" />
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