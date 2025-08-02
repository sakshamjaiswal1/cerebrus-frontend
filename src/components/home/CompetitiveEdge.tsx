import GradientText from "../common/GradientText"
import GradientPill from "../common/GradientPill"

const CompetitiveEdge = () => {
  return (
    <section className="w-full py-16">
      <div className="w-full mx-auto">
        <GradientText text="Our Competitive Edge" />
        
        {/* Description Text */}
        <p className="text-base leading-relaxed mb-12 text-primary opacity-70 max-w-4xl">
          Make the shift from outdated recruitment practices to AI-powered, real-world, new-age interviews. Say goodbye to legacy practices and expose yourself to more diverse and inclusive talent pools.
        </p>

        {/* Comparison Table */}
        <div className="bg-brand-bg rounded-3xl p-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-6 px-4 text-lg font-semibold text-primary w-1/5">Parameters</th>
                  <th className="text-center py-6 px-4 w-1/5">
                    {/* Cerebrus Logo */}
                    <div className="flex flex-col items-center space-y-2">
                      <img src="/Cerebrus_Logo.svg" alt="Cerebrus" className="h-12 w-auto" />
                    </div>
                  </th>
                  <th className="text-center py-6 px-4 text-lg font-semibold text-primary w-1/5">
                    <div className="text-center">
                      <div>Iaas interviews/</div>
                      <div>Staffing firms</div>
                    </div>
                  </th>
                  <th className="text-center py-6 px-4 text-lg font-semibold text-primary w-1/5">
                    <div className="text-center">
                      <div>Recording based</div>
                      <div>interviews</div>
                    </div>
                  </th>
                  <th className="text-center py-6 px-4 text-lg font-semibold text-primary w-1/5">
                    <div className="text-center">
                      <div>Traditional</div>
                      <div>interviews</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-6 px-4 text-base font-medium text-primary w-1/5">Quality of Interview</td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-6 px-4 text-base font-medium text-primary w-1/5">Evaluation Reliability</td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-6 px-4 text-base font-medium text-primary w-1/5">Time-to-Hire</td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-6 px-4 text-base font-medium text-primary w-1/5">
                    <div>Reduced Time Burden</div>
                    <div>on Senior Staff</div>
                  </td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-6 px-4 text-base font-medium text-primary w-1/5">Cost Efficiency</td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                </tr>
                <tr>
                  <td className="py-6 px-4 text-base font-medium text-primary w-1/5">Confidentiality</td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                  <td className="py-6 px-4 text-center w-1/5"><GradientPill /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveEdge