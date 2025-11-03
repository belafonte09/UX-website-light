import React from 'react';

const AIOverviewSection: React.FC = () => {
  return (
    <div className="full-width-section py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-sora font-bold text-foreground leading-tight lg:leading-relaxed mb-8">
            How We Used AI to Simplify<br />
            Rule Creation
          </h1>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="font-sora font-bold text-foreground mb-8 lg:mb-16" style={{ fontSize: '40px' }}>
            Overview
          </h2>

          <div className="space-y-8 lg:space-y-12">
            <p className="text-lg font-work-sans text-foreground leading-relaxed">
              As our business model evolved into a <span className="font-bold">Managing General Agent (MGA)</span>, one
              challenge stood out: validating Partner data against a complex set of rules,
              and having to do this fast!
            </p>

            <p className="text-lg font-work-sans text-foreground leading-relaxed">
              Creating and maintaining these business rules wasn't easy. For non-technical
              users, every small change meant opening documentation, contacting IT, and
              waiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIOverviewSection;