interface JobCardProps {
    title: string;
    experience: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, experience }) => {
    return (
        <div className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm">
            <div>
                <h3 className="text-xl font-semibold text-primary mb-1">{title}</h3>
                <p className="text-gray-500 mb-4">{experience}</p>
                <a href="#" className="inline-flex items-center text-sm text-primary font-medium border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
                    <span>Apply now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
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
        <section className="mb-24">
            <h2 className="text-4xl font-bold text-primary mb-8">Now Hiring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job, index) => (
                    <JobCard key={index} title={job.title} experience={job.experience} />
                ))}
            </div>
        </section>
    );
};

export default HiringSection;
