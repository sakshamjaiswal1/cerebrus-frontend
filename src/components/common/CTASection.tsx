const CTASection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl text-center py-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Try Cerebrus today!
          </h2>
          <p className="text-lg text-primary mb-8">
            Book a demo
          </p>
          <a
            href="#"
            className="inline-flex items-center text-lg text-primary font-semibold group"
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
      </div>
    </section>
  );
};

export default CTASection;
