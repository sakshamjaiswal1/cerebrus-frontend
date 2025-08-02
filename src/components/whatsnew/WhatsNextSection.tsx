const WhatsNextSection = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="bg-primary-light rounded-2xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-medium text-primary leading-tight">
                What's next for<br />Cerebrus?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-primary">
                  Insights from Siddhant Bansal,
                </p>
                <p className="text-base font-medium text-primary">
                  CEO@Griphic
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-primary opacity-70">
                <span>4 min read</span>
                <span>|</span>
                <span>15 March, 2025</span>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/whats_new_hero.svg" 
                  alt="Siddhant Bansal, CEO@Griphic"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Numbered List Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="space-y-6">
                {[
                  "Lorem Ipsum is simply dummy",
                  "Lorem Ipsum is simply dummy", 
                  "Lorem Ipsum is simply dummy",
                  "Lorem Ipsum is simply dummy"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary text-sm font-medium">
                      {index + 1}
                    </div>
                    <p className="text-base text-primary pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="space-y-6">
                <p className="text-base text-primary leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                  piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard 
                  McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one 
                  of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                  going through the cites of the word in classical literature, discovered the 
                  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
                  45 BC. <strong>This book is a treatise on the theory of ethics, very popular during the 
                  Renaissance.</strong> The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet...", comes 
                  from a line in section 1.10.32.
                </p>
                
                <p className="text-base text-primary leading-relaxed">
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for 
                  those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
                  by Cicero are also reproduced in their exact original form, accompanied by English 
                  versions from the 1914 translation by H. Rackham.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                  Lorem Ipsum is simply dummy
                </h3>
                
                <p className="text-base text-primary leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                  piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard 
                  McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one 
                  of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                  going through the cites of the word in classical literature, discovered the 
                  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
                  45 BC. This book is a treatise on the theory of ethics, very popular during the 
                  Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet...", comes 
                  from a line in section 1.10.32.
                </p>
                
                <p className="text-base text-primary leading-relaxed">
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for 
                  those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
                  by Cicero are also reproduced in their exact original form, accompanied by English 
                  versions from the 1914 translation by H. Rackham.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                  Lorem Ipsum is simply dummy
                </h3>
                
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/exp_img_2.svg" 
                    alt="Content illustration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNextSection