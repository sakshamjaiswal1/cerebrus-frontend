const ContactCards = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Join Us Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-4">Join us</h3>
                <p className="text-sm text-primary opacity-70 leading-relaxed mb-6">
                  We're always looking for people who share our values and are thoughtful about design, engineering, or hiring systems.
                </p>
                <p className="text-sm text-primary">
                  Send your resumes at{" "}
                  <a href="mailto:jobs@griphic.com" className="font-semibold text-primary hover:underline">
                    jobs@griphic.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Product Support Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-4">Product support</h3>
                <p className="text-sm text-primary opacity-70 leading-relaxed mb-6">
                  For product questions, technical issues, or anything else, our team is here to support you.
                </p>
                <p className="text-sm text-primary">
                  Reach out through the platform or email us at{" "}
                  <a href="mailto:cerebrus.info@griphic.com" className="font-semibold text-primary hover:underline">
                    cerebrus.info@griphic.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCards