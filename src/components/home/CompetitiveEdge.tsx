import GradientText from "../common/GradientText";
import GradientPill from "../common/GradientPill";

const CompetitiveEdge = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="w-full mx-auto">
        <GradientText text="Our Competitive Edge" />

        {/* Description Text */}
        <p className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 text-primary opacity-70 max-w-4xl">
          Make the shift from outdated recruitment practices to AI-powered,
          real-world, new-age interviews. Say goodbye to legacy practices and
          expose yourself to more diverse and inclusive talent pools.
        </p>

        {/* Comparison Table */}
        <div className="bg-brand-bg rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-4 sm:py-6 px-2 sm:px-4 text-sm sm:text-lg font-semibold text-primary w-1/5">
                    Parameters
                  </th>
                  <th className="text-center py-4 sm:py-6 px-2 sm:px-4 w-1/5">
                    {/* Cerebrus Logo */}
                    <div className="flex flex-col items-center space-y-2">
                      <img
                        src="/Cerebrus_Logo.svg"
                        alt="Cerebrus"
                        className="h-8 sm:h-12 w-auto"
                      />
                    </div>
                  </th>
                  <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-xs sm:text-lg font-semibold text-primary w-1/5">
                    <div className="text-center">
                      <div>Iaas interviews/</div>
                      <div>Staffing firms</div>
                    </div>
                  </th>
                  <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-xs sm:text-lg font-semibold text-primary w-1/5">
                    <div className="text-center">
                      <div>Recording based</div>
                      <div>interviews</div>
                    </div>
                  </th>
                  <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-xs sm:text-lg font-semibold text-primary w-1/5">
                    <div className="text-center">
                      <div>Traditional</div>
                      <div>interviews</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-sm font-medium text-primary w-1/5">
                    Quality of Interview
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={35} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={25} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base font-medium text-primary w-1/5">
                    Evaluation Reliability
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={35} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={25} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base font-medium text-primary w-1/5">
                    Time-to-Hire
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={50} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={25} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base font-medium text-primary w-1/5">
                    <div>Reduced Time Burden</div>
                    <div>on Senior Staff</div>
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={50} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={25} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base font-medium text-primary w-1/5">
                    Cost Efficiency
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={35} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={25} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base font-medium text-primary w-1/5">
                    Confidentiality
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={50} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                  <td className="py-3 sm:py-6 px-2 sm:px-4 text-center w-1/5">
                    <GradientPill fillPercentage={100} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
