import React from 'react';

const AIWireframesSection: React.FC = () => {
  return (
    <div className="full-width-section py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#ECF1F9' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          Wireframes
        </h2>

        <div className="space-y-12 lg:space-y-24">
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            I first sketched wireframes based on our existing rule configuration feature,
            a list of predefined rules that users could pick from and adjust accordingly.
            My main focus was to improve the usability as previous interviews showed
            users struggled with the interface.
          </p>

          {/* Initial flow subsection */}
          <div className="space-y-8 lg:space-y-12">
            <h3 className="text-xl font-sora font-bold text-foreground">
              Initial flow
            </h3>

            {/* Initial Flow Visual - Column overflow */}
            <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
              <img
                src="/Case Studies/ai project/ai - initial flow.png"
                alt="Initial wireframe flow showing 6-step process for rule creation"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* AHA moment subsection */}
          <div className="space-y-8 lg:space-y-12">
            <h3 className="text-xl font-sora font-bold text-foreground">
              AHA moment
            </h3>

            <div className="space-y-6">
              <p className="text-lg font-work-sans text-foreground leading-relaxed">
                While reviewing the flow with an engineer, we had a breakthrough:
                What if users could just write the rule in plain English, and AI handled the
                rest?
              </p>

              <p className="text-lg font-work-sans text-foreground leading-relaxed">
                That idea sparked the move to use a Large Language Model (LLM) trained on
                our internal rule set to interpret natural language into developer-ready logic.
              </p>
            </div>
          </div>

          {/* Updated flow subsection */}
          <div className="space-y-8 lg:space-y-12">
            <h3 className="text-xl font-sora font-bold text-foreground">
              Updated flow
            </h3>

            <div className="space-y-6">
              <p className="text-lg font-work-sans text-foreground leading-relaxed">
                In the new flow, users simply type statements like:
                "If the partner's start date is after their policy date, flag it as invalid"
              </p>

              <p className="text-lg font-work-sans text-foreground leading-relaxed">
                The system then converts it automatically into the correct rule format.
                This made rule creation faster, more natural, and consistent, a huge win for
                non-technical users.
              </p>
            </div>

            {/* Updated Flow Visual - Column overflow */}
            <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
              <img
                src="/Case Studies/ai project/ai - wireframe val gtp.png"
                alt="Updated wireframe showing AI-powered validation rules interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Testimonial Quote - Full width spillover */}
          <div className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
              <p className="text-quote text-purple italic max-w-5xl mx-auto">
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>
                Wait... you mean I don't have to edit JSON anymore? This is
                promising!
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
              </p>
              <cite className="text-2xl font-work-sans text-purple text-center block mt-4">
                - Underwriter
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWireframesSection;