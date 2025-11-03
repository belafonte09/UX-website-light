import React from 'react';

const AIIdeationSection: React.FC = () => {
  return (
    <div className="full-width-section bg-white py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          Ideation & Design Sprint
        </h2>

        <div className="space-y-12 lg:space-y-24">
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            I did a design sprint with the stakeholders, product managers, and engineers
            to scope the problem. I used a template from AJ&Smart and adapted it to
            make it slightly shorter and more concise.
          </p>

          {/* After just one intense day together Card */}
          <div className="w-full">
            <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
              <h3 className="text-card-heading text-pink mb-6">
                After just one intense day together...
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    We defined the core problem
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    We established a clear vision for what we wanted to solve
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    We generated enough sketches for the UI team to develop wireframes
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    Engineers began preparations for creating a proof of concept
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Sprint Visual - Column overflow */}
          <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
            <img
              src="/Case Studies/ai project/ai - design sprint visual.png"
              alt="Design sprint sketches and wireframes showing ideation process"
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial Quote - Full width spillover */}
          <div className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
              <p className="text-quote text-pink italic max-w-5xl mx-auto">
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>
                The Crazy 8 exercise really pushed us out of our comfort zone. I'll
                admit, sketching eight ideas in eight minutes felt impossible at first,
                but it forced us to think faster and more creatively than we would have
                otherwise.
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
              </p>
              <cite className="text-2xl font-work-sans text-pink text-center block mt-4">
                - Product Owner
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIdeationSection;