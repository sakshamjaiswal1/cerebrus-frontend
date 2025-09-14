const ContactCards = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Join Us Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="flex items-center space-x-4 sm:space-x-6">
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Join us</h3>
                <p className="text-xs sm:text-sm text-primary opacity-70 leading-relaxed mb-4 sm:mb-6">
                  We're always looking for people who share our values and are thoughtful about design, engineering, or hiring systems.
                </p>
                <p className="text-xs sm:text-sm text-primary">
                  Send your resumes at{" "}
                  <a href="mailto:jobs@griphic.com" className="font-semibold text-primary hover:underline">
                    jobs@griphic.com
                  </a>
                </p>
              </div>
              <div className="w-max">
                <img src="/contact1.svg" alt="Join Us" className="w-40 h-40 max-md:w-24 max-md:h-24 object-contain" />
              </div>
            </div>
          </div>

          {/* Product Support Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="flex items-center space-x-4 sm:space-x-6">
              
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Product support</h3>
                <p className="text-xs sm:text-sm text-primary opacity-70 leading-relaxed mb-4 sm:mb-6">
                  For product questions, technical issues, or anything else, our team is here to support you.
                </p>
                <p className="text-xs sm:text-sm text-primary">
                  Reach out through the platform or email us at{" "}
                  <a href="mailto:cerebrus.info@griphic.com" className="font-semibold text-primary hover:underline">
                    cerebrus.info@griphic.com
                  </a>
                </p>
              </div>
              <div className="w-max">
                <img src="/contact2.svg" alt="Join Us" className="w-40 h-40 max-md:w-24 max-md:h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCards