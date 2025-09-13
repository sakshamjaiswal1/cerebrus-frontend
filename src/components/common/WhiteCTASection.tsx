
import AnimatedButton from "./AnimatedButton"

const CTASection = () => {
    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center bg-gray-100 rounded-2xl p-12">
                    <h2 className="text-4xl max-md:text-3xl font-medium text-primary mb-4">
                        Try Cerebrus today!
                    </h2>
                    <p className="text-lg text-primary mb-8">
                        Book a demo
                    </p>
                    <AnimatedButton text="Let's Connect" className="!border !border-primary" />
                </div>
            </div>
        </section>
    )
}

export default CTASection
