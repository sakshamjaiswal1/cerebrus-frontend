interface CultureCardProps {
    icon: string;
    title: string;
    description: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-2xl p-6 flex items-start space-x-6 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src={icon} alt="" className="w-10 h-10" />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    )
}


const CultureSection = () => {
    const cultureItems = [
        {
            icon: '/features_hero.svg',
            title: 'Be creative.',
            description: 'Creativity here means figuring out how to build something that hasn’t been built before and finding different ways to do it.',
        },
        {
            icon: '/features_hero.svg',
            title: 'Approachability isn’t secondary.',
            description: 'You don’t need a pitch deck to start a conversation here. You’ll find people who explain things clearly, listen first, and don’t make you try hard to feel included.',
        },
        {
            icon: '/features_hero.svg',
            title: 'Feedback isn’t a ritual, it’s a reflex.',
            description: 'Whether it’s your first week or you’ve been with us for a year, everyone’s encouraged to give feedback. It’s not a “culture of feedback,” it’s just how we operate.',
        },
        {
            icon: '/features_hero.svg',
            title: 'Learn, grow, let it show.',
            description: 'We don’t run seminars on “how to grow.” We give people meaningful problems to solve, and the trust to figure them out—taking on more ownership as you go.',
        },
    ];

    return (
        <section className="mb-24">
            <h2 className="text-4xl font-bold text-primary mb-4">A Culture of Fairness and Simplicity</h2>
            <p className="text-gray-500 mb-8 max-w-3xl">Our culture wasn’t written first, it came out of how we work, by figuring things out, fixing what was broken, and helping each other get better. It’s practical, honest, and still evolving.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cultureItems.map((item, index) => (
                    <CultureCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    );
};

export default CultureSection;
