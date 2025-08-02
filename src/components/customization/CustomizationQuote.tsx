const CustomizationQuote = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="text-center relative">
          {/* Left Quote marks */}
          <div className="absolute top-0 left-8 z-10">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 70C15 62.5 17.5 55 22.5 48.75C27.5 42.5 35 37.5 45 33.75V25C30 30 17.5 40 10 52.5C2.5 65 0 77.5 0 90V95C0 97.5 2.5 100 5 100H35C37.5 100 40 97.5 40 95V70C40 67.5 37.5 65 35 65H15C12.5 65 10 67.5 10 70H15Z" fill="#8AD5CE"/>
              <path d="M65 70C65 62.5 67.5 55 72.5 48.75C77.5 42.5 85 37.5 95 33.75V25C80 30 67.5 40 60 52.5C52.5 65 50 77.5 50 90V95C50 97.5 52.5 100 55 100H85C87.5 100 90 97.5 90 95V70C90 67.5 87.5 65 85 65H65C62.5 65 60 67.5 60 70H65Z" fill="#8AD5CE"/>
            </svg>
          </div>
          
          {/* Right Quote marks */}
          <div className="absolute bottom-0 right-8 z-10 rotate-180">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 70C15 62.5 17.5 55 22.5 48.75C27.5 42.5 35 37.5 45 33.75V25C30 30 17.5 40 10 52.5C2.5 65 0 77.5 0 90V95C0 97.5 2.5 100 5 100H35C37.5 100 40 97.5 40 95V70C40 67.5 37.5 65 35 65H15C12.5 65 10 67.5 10 70H15Z" fill="#8AD5CE"/>
              <path d="M65 70C65 62.5 67.5 55 72.5 48.75C77.5 42.5 85 37.5 95 33.75V25C80 30 67.5 40 60 52.5C52.5 65 50 77.5 50 90V95C50 97.5 52.5 100 55 100H85C87.5 100 90 97.5 90 95V70C90 67.5 87.5 65 85 65H65C62.5 65 60 67.5 60 70H65Z" fill="#8AD5CE"/>
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto px-20 py-12 relative z-20">
            <p className="text-2xl font-medium text-primary leading-relaxed">
              Customization is all about alignment. When interviews reflect the intent behind them, hiring becomes not just efficient, but also meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizationQuote