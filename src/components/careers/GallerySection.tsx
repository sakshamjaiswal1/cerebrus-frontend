import AnimatedButton from "../common/AnimatedButton";

const GallerySection = () => {
    const images = [
        "/gall-1.png",
        "/gall-2.png",
        "/gall-3.png",
        "/gall-4.png",
        "/gall-5.png",
    ];

    return (
        <section className="mb-12 sm:mb-16 lg:mb-24">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h2 
                    className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary"
                    style={{
                        fontFamily: 'Montserrat',
                        color: '#1A323C',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}
                >
                    From the Gallery
                </h2>
                <AnimatedButton text="View all" className="!border !border-primary !bg-transparent" />
            </div>
            <p className="text-sm sm:text-base lg:text-xl text-primary font-[300] mb-6 sm:mb-8 w-full leading-relaxed">Here's a look at the team behind Cerebrus, and the culture that shapes how we work.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="col-span-1">
                    <img src={images[0]} alt="Gallery image 1" className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl" />
                </div>
                <div className="col-span-1">
                    <img src={images[1]} alt="Gallery image 2" className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <img src={images[2]} alt="Gallery image 3" className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                    <img src={images[3]} alt="Gallery image 4" className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl" />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <img src={images[4]} alt="Gallery image 5" className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl" />
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
