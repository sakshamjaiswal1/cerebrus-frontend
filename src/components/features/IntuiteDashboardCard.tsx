import AnimatedButton from "../common/AnimatedButton"

const IntuiteDashboardCard = () => {
  return (
    <div className=" p-8 flex gap-8 items-center h-112">
      {/* Left Content */}
      <div className="bg-brand-bg w-7/12 h-full rounded-xl py-16 px-10">
        <h2 className="text-3xl font-semibold text-primary mb-6">Intuitive Dashboard</h2>
        <p className="text-base leading-relaxed text-primary opacity-70 mb-6">
          A clear and responsive interface built to simplify how you manage candidates, track progress and access important information -
          all in one place.
        </p>
        <p className="text-base leading-relaxed text-primary opacity-70 mb-8">
          From live status indicators to smart filters and structured candidate views, the UI keeps everything organized and easy to act.
        </p>
        <AnimatedButton text="Click for more" />
      </div>

      {/* Right Image */}
      <div className="flex flex-col justify-center bg-brand-bg p-6 rounded-xl text-primary w-5/12 h-full">
        <h3 className="text-xl text-center">Customization Flexibility</h3>
        <img
          src="/cust_flex.svg"
          alt="Intuitive Dashboard"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}

export default IntuiteDashboardCard