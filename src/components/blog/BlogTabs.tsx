import { useState, useRef, useEffect } from "react"
import AnimatedButton from "../common/AnimatedButton"

const BlogTabs = () => {
  const [activeTab, setActiveTab] = useState("blogs")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDropdownClosing, setIsDropdownClosing] = useState(false)
  const [selectedSort, setSelectedSort] = useState("Published Date (latest to oldest)")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isSelectingSuggestion, setIsSelectingSuggestion] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  const searchSuggestions = [
    "Interview Process",
    "AI Technology",
    "Remote Hiring",
    "MetaHuman",
    "Recruitment Tips",
    "HR Technology",
    "Candidate Experience",
  ]

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
        setIsSelectingSuggestion(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const sortOptions = [
    "Published Date (latest to oldest)",
    "Reading Time (Low to high)",
    "Alphabetical (A to Z)"
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleCloseDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCloseDropdown = () => {
    setIsDropdownClosing(true)
    setTimeout(() => {
      setIsDropdownOpen(false)
      setIsDropdownClosing(false)
    }, 300) // Match animation duration
  }

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
        <div className="w-full">
          {/* Tab Navigation and Sort Controls */}
          <div className="flex flex-row justify-between items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-12">
            {/* Tabs - Left side */}
            <div className="relative flex border-2 border-gray-300 w-max rounded-full items-center">
              {/* Sliding Background */}
              <div
                className={`absolute top-0 bottom-0 bg-primary rounded-full transition-all duration-300 ease-in-out ${activeTab === "blogs"
                  ? "left-0 w-[calc(40%-1px)]"
                  : "left-[calc(40%+1px)] w-[calc(60%-1px)]"
                  }`}
              />

              <button
                onClick={() => setActiveTab("blogs")}
                className={`relative z-10 px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "blogs"
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
                  }`}
              >
                Blogs
              </button>
              <button
                onClick={() => setActiveTab("case-studies")}
                className={`relative z-10 px-3 sm:px-6 text-center py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "case-studies"
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
                  }`}
              >
                Case Studies
              </button>
            </div>

            {/* Sort and Search Controls - Mobile: Sort next to tabs, Desktop: Sort + Search grouped together */}
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              {/* Sort by Dropdown */}
              <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => isDropdownOpen ? handleCloseDropdown() : setIsDropdownOpen(true)}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-gray-300 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:border-gray-400 transition-all duration-200 h-10"
                >
                  <span className="hidden sm:inline">Sort by</span>
                  <span className="sm:hidden">Sort</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 sm:w-4 sm:h-4 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute top-0 right-0 w-80 bg-white border-2 border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden"
                    style={{
                      animation: isDropdownClosing ? 'dropdownScaleOut 0.3s ease-in forwards' : 'dropdownScaleIn 0.3s ease-out forwards',
                      transformOrigin: 'top right'
                    }}
                  >
                    <div className="p-2">
                      {sortOptions.map((option, index) => (
                        <div
                          className="hover:bg-brand-bg cursor-pointer hover:px-2 transition-all duration-300 rounded-xl" key={index}
                        >
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedSort(option)
                              handleCloseDropdown()
                            }}
                            className={`w-full px-4 py-3 text-left text-sm cursor-pointer transition-all duration-200 rounded-xl ${selectedSort === option
                              ? "text-black font-semibold hover:bg-gradient-to-r hover:from-[#AA77ED] hover:via-[#8BD6CE] hover:to-[#8BD6CE] hover:bg-clip-text hover:text-transparent"
                              : "text-gray-700 hover:bg-gradient-to-r hover:from-[#AA77ED] hover:via-[#8BD6CE] hover:to-[#8BD6CE] hover:bg-clip-text hover:text-transparent font-medium"
                              }`}
                            style={{
                              animationDelay: `${index * 0.05}s`,
                              animation: isDropdownClosing ? `slideOutOption 0.3s ease-in ${index * 0.02}s both` : `slideInOption 0.3s ease-out ${index * 0.05}s both`
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

              {/* Search Input - Hidden on mobile, shown on desktop grouped with sort */}
              <div className="relative hidden sm:block w-full sm:w-max" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => {
                    if (!isSelectingSuggestion && !searchQuery) {
                      setIsSearchFocused(false)
                    }
                  }}
                  className={`pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-sm placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out w-full sm:w-[123px] h-10 ${isSearchFocused && window.innerWidth >= 640 ? 'sm:w-[400px]' : ''
                    }`}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
                >
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Search Suggestions Popup */}
                {isSearchFocused && (
                  <div
                    className={"absolute top-full left-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden w-full sm:w-[400px] transition-all duration-300 ease-in-out " + (isSearchFocused ? 'opacity-100' : 'opacity-0')}
                   
                  >
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {searchSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onMouseDown={(e) => {
                              e.preventDefault()
                              setIsSelectingSuggestion(true)
                            }}
                            onClick={() => {
                              setSearchQuery(suggestion)
                              setIsSearchFocused(false)
                              setIsSelectingSuggestion(false)
                            }}
                            className="px-3 py-1.5 rounded-md text-xs text-gray-700 transition-all duration-200 hover:bg-gray-200 group"
                            style={{
                              animationDelay: `${index * 0.03}s`,
                              animation: `slideInOption 0.3s ease-out ${index * 0.03}s both`
                            }}
                          >
                            <span className="group-hover:bg-gradient-to-r group-hover:from-[#AA77ED] group-hover:via-[#8BD6CE] group-hover:to-[#8BD6CE] group-hover:bg-clip-text group-hover:text-transparent">
                              {suggestion}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="sm:hidden mb-6">
            <div className="relative w-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
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
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => {
                  if (!isSelectingSuggestion && !searchQuery) {
                    setIsSearchFocused(false)
                  }
                }}
                className="px-4 py-2.5 border-2 border-gray-200 rounded-full text-sm placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out w-full"
              />

              {/* Search Suggestions Popup for Mobile */}
              {isSearchFocused && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden w-full"
                  style={{
                    animation: 'dropdownScaleIn 0.3s ease-out forwards',
                    transformOrigin: 'top left'
                  }}
                >
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onMouseDown={(e) => {
                            e.preventDefault()
                            setIsSelectingSuggestion(true)
                          }}
                          onClick={() => {
                            setSearchQuery(suggestion)
                            setIsSearchFocused(false)
                            setIsSelectingSuggestion(false)
                          }}
                          className="px-3 py-1.5 rounded-full text-xs text-gray-700 hover:bg-gradient-to-r hover:from-[#c718b9] hover:via-[#A5F5ED] hover:to-[#A5F5ED] hover:bg-clip-text hover:text-transparent transition-all duration-200"
                          style={{
                            animationDelay: `${index * 0.03}s`,
                            animation: `slideInOption 0.3s ease-out ${index * 0.03}s both`
                          }}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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