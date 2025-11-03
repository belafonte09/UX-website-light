import React from 'react';

const AIUsabilityTestingSection: React.FC = () => {
  return (
    <div className="full-width-section bg-white py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          Usability Testing
        </h2>

        <div className="space-y-12 lg:space-y-24">
          <div className="space-y-6">
            <p className="text-lg font-work-sans text-foreground leading-relaxed">
              With sketches turned into clickable prototypes, we brought them to the
              Underwriting and Claims teams for usability testing.
            </p>

            <p className="text-lg font-work-sans text-foreground leading-relaxed">
              Here's what we learned:
            </p>
          </div>

          {/* Insights Table Visual - Column overflow */}
          <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
            <img
              src="/Case Studies/ai project/ai - insights table.png"
              alt="Usability testing insights table showing topics, insights, and actions"
              className="w-full h-auto"
            />
          </div>

          {/* Out of Scope Card - Matching KeyInsightCard style with riso-blue */}
          <div className="w-full">
            <div className="bg-butter border border-riso-blue rounded-2xl p-6 md:p-10 ml-2" style={{ boxShadow: '-8px 8px 0px 0px #2C5FB2' }}>
              <div>
                <h3 className="text-lg md:text-[22px] font-work-sans text-riso-blue mb-3 md:mb-4">
                  Out of Scope (Next iteration)
                </h3>
                <p className="text-base md:text-[20px] font-work-sans text-foreground leading-relaxed">
                  A visual way for users to see which rules are generic, which have a validation rule
                  attached to them, and which rules are mandatory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIUsabilityTestingSection;