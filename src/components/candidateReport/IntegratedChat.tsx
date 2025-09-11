

const IntegratedChat = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary text-left mb-6 sm:mb-8 lg:mb-12">Integrated Chat</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Feature Descriptions with Icons */}
          <div className="space-y-6 lg:space-y-8 xl:block hidden">
            {/* Timeline View */}
            <div className="relative">
              <div className="flex items-start gap-4 lg:relative lg:w-full">
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 lg:absolute lg:-left-8 lg:top-8">
                  <img 
                    src="/report-integ-1.svg" 
                    alt="Timeline View Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 flex-1 lg:w-full lg:pl-16">
                  <h3 className="text-base lg:text-lg font-semibold text-primary mb-2">Timeline View</h3>
                  <p className="text-xs lg:text-sm text-primary opacity-70">
                    Captures a chronological log of key updates like interview activity and status in a single scrollable view.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Tracker */}
            <div className="relative">
              <div className="flex items-start gap-4 lg:relative lg:w-full">
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 lg:absolute lg:-left-8 lg:top-8">
                  <img 
                    src="/report-integ-2.svg" 
                    alt="Action Tracker Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 flex-1 lg:w-full lg:pl-16">
                  <h3 className="text-base lg:text-lg font-semibold text-primary mb-2">Action Tracker</h3>
                  <p className="text-xs lg:text-sm text-primary opacity-70">
                    Shows who took what action and when, including candidate rejections and interview completions.
                  </p>
                </div>
              </div>
            </div>

            {/* Candidate History */}
            <div className="relative">
              <div className="flex items-start gap-4 lg:relative lg:w-full">
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 lg:absolute lg:-left-8 lg:top-8">
                  <img 
                    src="/report-integ-3.svg" 
                    alt="Candidate History Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 flex-1 lg:w-full lg:pl-16">
                  <h3 className="text-base lg:text-lg font-semibold text-primary mb-2">Candidate History</h3>
                  <p className="text-xs lg:text-sm text-primary opacity-70">
                    Displays prior interview IDs and job references, with clickable links to previous reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Internal Communication */}
            <div className="relative">
              <div className="flex items-start gap-4 lg:relative lg:w-full">
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 lg:absolute lg:-left-8 lg:top-8">
                  <img 
                    src="/report-integ-4.svg" 
                    alt="Internal Communication Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 flex-1 lg:w-full lg:pl-16">
                  <h3 className="text-base lg:text-lg font-semibold text-primary mb-2">Internal Communication</h3>
                  <p className="text-xs lg:text-sm text-primary opacity-70">
                    Enables team members to leave comments, share feedback, and collaborate privately on candidate evaluations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Chat Image */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <img 
              src="/report-2.svg" 
              alt="Integrated Chat Interface" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegratedChat
