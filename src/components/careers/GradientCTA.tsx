const GradientCTA = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24">
            <div className="mx-auto rounded-2xl bg-gradient-to-br from-[#1A323C] via-[#2C5D63] to-[#8AD5CE] text-center py-16 text-white">
                <h2 className="text-4xl font-bold mb-4">
                    Try Cerebrus today!
                </h2>
                <p className="text-lg opacity-80 mb-8">
                    Book a demo
                </p>
                <a
                    href="#"
                    className="inline-flex items-center text-lg font-semibold group bg-white text-primary rounded-full px-6 py-3"
                >
                    Let's Connect
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    >
                        <path
                            d="M5 12H19"
                            stroke="#1A323C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 5L19 12L12 19"
                            stroke="#1A323C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default GradientCTA;
