const CustomizationQuote = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="text-center relative">
          {/* Left Quote marks */}
          <div className="absolute -top-10 left-8 z-30 bg-white pr-10 max-md:-top-5 max-md:left-0">
            <img src="/quote.svg" alt="Quote Left" className="max-md:w-10 object-contain" />
          </div>

          {/* Right Quote marks */}
          <div className="absolute -bottom-10 right-8 z-30 rotate-180 bg-white pr-10 max-md:-bottom-5 max-md:right-0">
            <img src="/quote.svg" alt="Quote Right" className="max-md:w-10 object-contain" />
          </div>

          <div className="max-w-6xl w-full max-md:px-4 max-md:py-8 mx-auto px-20 py-12 relative z-20 border-y border-gray-300">
            <p className="text-2xl max-md:text-xs font-medium text-primary leading-relaxed w-4/5 max-md:w-full mx-auto">
              Customization is all about alignment. When interviews reflect the intent behind them, hiring becomes not just efficient, but also meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizationQuote