const CareersHero = () => {
    return (
      <section className="mb-24">
        <h1 className="text-6xl font-bold text-primary mb-12">
            Caree<span className="text-[#8AD5CE]">r</span>s
        </h1>
        <div className="bg-white rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-12">
                <h2 className="text-5xl font-bold text-primary leading-tight mb-4">Bring your skills</h2>
                <h2 className="text-5xl font-bold text-primary leading-tight mb-4">Own your work</h2>
                <h2 className="text-5xl font-bold text-primary leading-tight mb-8">Grow with Griphic!</h2>
                <a href="mailto:jobs@griphic.com" className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-primary font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>jobs@griphic.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="md:w-1/2">
                <img src="/features_hero.svg" alt="Career illustration" className="w-full h-auto" />
            </div>
        </div>
      </section>
    );
};

export default CareersHero;
