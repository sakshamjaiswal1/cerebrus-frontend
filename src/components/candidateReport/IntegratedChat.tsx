

const IntegratedChat = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-primary text-left mb-2">Integrated Chat</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Feature Descriptions with Icons */}
          <div className="space-y-8">
            {/* Timeline View */}
            <div className="">
              <div className="flex items-start space-x-4 relative w-full">
                <div className="w-16 h-16 flex-shrink-0 absolute -left-8 top-8">
                  <img 
                    src="/report-integ-1.svg" 
                    alt="Timeline View Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-6 shadow-lg border border-gray-200 w-full pl-16">
                  <h3 className="text-lg font-semibold text-primary mb-2">Timeline View</h3>
                  <p className="text-sm text-primary opacity-70">
                    Captures a chronological log of key updates like interview activity and status in a single scrollable view.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Tracker */}
            <div className="">
              <div className="flex items-start space-x-4 relative w-full">
                <div className="w-16 h-16 flex-shrink-0 absolute -left-8 top-8">
                  <img 
                    src="/report-integ-2.svg" 
                    alt="Action Tracker Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-6 shadow-lg border border-gray-200 w-full pl-16">
                  <h3 className="text-lg font-semibold text-primary mb-2">Action Tracker</h3>
                  <p className="text-sm text-primary opacity-70">
                    Shows who took what action and when, including candidate rejections and interview completions.
                  </p>
                </div>
              </div>
            </div>

            {/* Candidate History */}
            <div className="">
              <div className="flex items-start space-x-4 relative w-full">
                <div className="w-16 h-16 flex-shrink-0 absolute -left-8 top-8">
                  <img 
                    src="/report-integ-3.svg" 
                    alt="Candidate History Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-6 shadow-lg border border-gray-200 w-full pl-16">
                  <h3 className="text-lg font-semibold text-primary mb-2">Candidate History</h3>
                  <p className="text-sm text-primary opacity-70">
                    Displays prior interview IDs and job references, with clickable links to previous reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Internal Communication */}
            <div className="">
              <div className="flex items-start space-x-4 relative w-full">
                <div className="w-16 h-16 flex-shrink-0 absolute -left-8 top-8">
                  <img 
                    src="/report-integ-4.svg" 
                    alt="Internal Communication Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-brand-bg rounded-xl p-6 shadow-lg border border-gray-200 w-full pl-16">
                  <h3 className="text-lg font-semibold text-primary mb-2">Internal Communication</h3>
                  <p className="text-sm text-primary opacity-70">
                    Enables team members to leave comments, share feedback, and collaborate privately on candidate evaluations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Chat Image */}
          <div className="flex justify-center">
            <img 
              src="/report-2.svg" 
              alt="Integrated Chat Interface" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegratedChat
