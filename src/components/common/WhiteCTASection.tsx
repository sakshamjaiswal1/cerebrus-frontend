
import AnimatedButton from "./AnimatedButton"

const CTASection = () => {
    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center bg-[#E9EAE5] rounded-2xl p-12">
                    <h2 className="text-5xl max-md:text-3xl font-medium text-primary mb-2">
                        Try Cerebrus today!
                    </h2>
                    <p className="text-lg lg:text-xl text-primary mb-6">
                        Book a demo
                    </p>
                    <AnimatedButton text="Let's Connect" className="!border !border-primary !py-1.5 !px-4 !font-semibold" />
                </div>
            </div>
        </section>
    )
}

export default CTASection
