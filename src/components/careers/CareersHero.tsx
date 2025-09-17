import GradientText from "../common/GradientText";

const CareersHero = () => {
    return (
      <section className="my-12 sm:mb-16 lg:mb-24">
        <GradientText text="Careers" className="!font-medium"/>
        <div className="bg-brand-bg rounded-2xl flex flex-col lg:flex-row items-center p-4 sm:p-6 lg:p-8 xl:p-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:pr-8 xl:pr-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary leading-tight mb-3 sm:mb-4">Bring your skills</h2>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary leading-tight mb-3 sm:mb-4">Own your work</h2>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary leading-tight mb-6 sm:mb-8">Grow with Griphic!</h2>
                <a href="mailto:jobs@griphic.com" className="inline-flex items-center bg-gray-100 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base text-primary font-medium border">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>jobs@griphic.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="w-full lg:w-1/2">
                <img src="/career-hero.svg" alt="Career illustration" className="w-full h-auto object-contain hover:scale-105 transition-all duration-200" />
            </div>
        </div>
      </section>
    );
};

export default CareersHero;
