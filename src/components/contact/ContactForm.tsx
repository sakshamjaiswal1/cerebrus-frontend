const ContactForm = () => {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Side - Map and Company Info */}
            <div className="lg:w-1/2">
              {/* Google Map */}
              <div className="mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7886937071266!2d77.03781831508027!3d28.546081482454675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d49%3A0x7e6c5d4b0c7e8f9a!2sPatparganj%20Industrial%20Area%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              
              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">Skets Griphic Pvt. Ltd</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">Address</h4>
                    <p className="text-sm text-primary opacity-70">
                      226, Patparganj Industrial Area, Patparganj, Delhi, 110092
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">Phone number</h4>
                    <p className="text-sm text-primary opacity-70">+91-7300590668</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">Email ID</h4>
                    <p className="text-sm text-primary opacity-70">info@griphic.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-1/2">
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-sm text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-sm text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                {/* Organization Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Organization email id"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-sm text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                {/* Phone Number */}
                <div>
                  <div className="flex">
                    <select className="px-3 py-3 bg-gray-100 border-0 rounded-l-lg text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-r-lg text-sm text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <textarea
                    placeholder="How can we help ?"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-sm text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200"
                  >
                    Submit
                  </button>
                </div>
                
                {/* Terms */}
                <div className="text-center">
                  <p className="text-xs text-primary opacity-70">
                    By contacting us, you agree to our{" "}
                    <a href="#" className="underline hover:opacity-80">terms of service</a>
                    {" "}and{" "}
                    <a href="#" className="underline hover:opacity-80">privacy policy</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm