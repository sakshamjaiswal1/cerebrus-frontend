interface CultureCardProps {
    icon: string;
    title: string;
    description: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 flex items-center space-x-4 sm:space-x-6 shadow-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src={icon} alt="" className="w-6 h-6 sm:w-10 sm:h-10 xl:w-32 xl:h-32" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}


const CultureSection = () => {
    const cultureItems = [
        {
            icon: '/culture-1.svg',
            title: 'Be creative.',
            description: 'Creativity here means figuring out how to build something that hasn’t been built before and finding different ways to do it.',
        },
        {
            icon: '/culture-2.svg',
            title: 'Approachability isn’t secondary.',
            description: 'You don’t need a pitch deck to start a conversation here. You’ll find people who explain things clearly, listen first, and don’t make you try hard to feel included.',
        },
        {
            icon: '/culture-3.svg',
            title: 'Feedback isn’t a ritual, it’s a reflex.',
            description: 'Whether it’s your first week or you’ve been with us for a year, everyone’s encouraged to give feedback. It’s not a “culture of feedback,” it’s just how we operate.',
        },
        {
            icon: '/culture-4.svg',
            title: 'Learn, grow, let it show.',
            description: 'We don’t run seminars on “how to grow.” We give people meaningful problems to solve, and the trust to figure them out—taking on more ownership as you go.',
        },
    ];

    return (
        <section className="mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary mb-3 sm:mb-4">A Culture of Fairness and Simplicity</h2>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-3xl leading-relaxed">Our culture wasn't written first, it came out of how we work, by figuring things out, fixing what was broken, and helping each other get better. It's practical, honest, and still evolving.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {cultureItems.map((item, index) => (
                    <CultureCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    );
};

export default CultureSection;
