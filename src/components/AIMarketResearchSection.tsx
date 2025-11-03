import React from 'react';

const AIMarketResearchSection: React.FC = () => {
  return (
    <div className="full-width-section py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#E4E3DD' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          Market Research
        </h2>

        <div className="space-y-12 lg:space-y-24">
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            We looked into existing rule management tools. Some were powerful, but
            they came with steep learning curves or price tags that didn't make sense
            for us.
          </p>

          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            So we asked ourselves:
          </p>

          {/* Quote - Full width spillover */}
          <div className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
              <p className="text-quote text-purple italic max-w-5xl mx-auto">
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>
                What if we built our own, with AI doing the heavy lifting?
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMarketResearchSection;