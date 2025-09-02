

const HowItComesTogether = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start text-left mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-6">How It Comes Together</h2>
          <p className="text-base leading-relaxed text-primary opacity-70 max-w-4xl mb-12">
          Behind every lifelike interview and every candidate insight, our Metabrain blends smart UX, adaptive algorithms, secure data systems, and natural audio processing to drive Cerebrus from start to shortlist.
          </p>
        </div>

        {/* Image centered below content */}
        <div className="flex justify-center">
          <img 
            src="/algo-hero-2.svg" 
            alt="How It Comes Together" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HowItComesTogether
