const GallerySection = () => {
    const images = [
        "/features_hero.svg",
        "/features_hero.svg",
        "/features_hero.svg",
        "/features_hero.svg",
        "/features_hero.svg",
    ];
    
    return (
        <section className="mb-24">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-4xl font-bold text-primary">From the Gallery</h2>
                <a href="#" className="inline-flex items-center text-sm text-primary font-medium border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
                    <span>View all</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <p className="text-gray-500 mb-8 max-w-2xl">Here’s a look at the team behind Cerebrus, and the culture that shapes how we work.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                    <img src={images[0]} alt="Gallery image 1" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                    <img src={images[1]} alt="Gallery image 2" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                    <img src={images[2]} alt="Gallery image 3" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                    <img src={images[3]} alt="Gallery image 4" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <img src={images[4]} alt="Gallery image 5" className="w-full h-full object-cover rounded-2xl" />
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
