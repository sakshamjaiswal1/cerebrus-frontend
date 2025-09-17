import AnimatedButton from "../common/AnimatedButton";

interface JobCardProps {
    title: string;
    experience: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, experience }) => {
    return (
        <div className="bg-white hover:bg-brand-bg rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
            <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-1">{title}</h3>
                <p className="text-sm sm:text-base lg:text-xl text-primary font-[300] mb-3 sm:mb-4">{experience}</p>
                <AnimatedButton text="Apply now" className="!border !border-primary !bg-transparent" /> 
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
