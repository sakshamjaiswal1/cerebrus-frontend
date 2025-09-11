interface JobCardProps {
    title: string;
    experience: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, experience }) => {
    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
            <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1">{title}</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">{experience}</p>
                <a href="#" className="inline-flex items-center text-xs sm:text-sm text-primary font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-2 hover:bg-gray-50 transition-colors">
                    <span>Apply now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/suitcase.svg" alt="Career icon" className="w-full h-full object-contain" />
            </div>
        </div>
    )
}

const HiringSection = () => {
    const jobs = [
        { title: 'Full Stack Developer', experience: 'Experience: X-X Years' },
        { title: 'Full Stack Developer', experience: 'Experience: X-X Years' },
        { title: 'Full Stack Developer', experience: 'Experience: X-X Years' },
    ];

    return (
        <section className="mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary mb-6 sm:mb-8">Now Hiring</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {jobs.map((job, index) => (
                    <JobCard key={index} title={job.title} experience={job.experience} />
                ))}
            </div>
        </section>
    );
};

export default HiringSection;
