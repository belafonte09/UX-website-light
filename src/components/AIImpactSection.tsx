import React from 'react';
import NumberImpactCard from '@/components/NumberImpactCard';

const AIImpactSection: React.FC = () => {
  return (
    <div className="full-width-section bg-white py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          Impact
        </h2>

        <div className="space-y-12 lg:space-y-24">
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            By implementing design changes (especially around automated validation
            and feedback), we transformed how the Underwriting team and developers
            interacted with rule management.
          </p>

          {/* Number Impact Cards - Same as Boosting Payment Success */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <NumberImpactCard
              percentage="70%"
              description="REDUCTION IN PROCESS TIME"
            />
            <NumberImpactCard
              percentage="80%"
              description="MORE ACCURACY"
            />
          </div>

          {/* KPI Table Visual - Column overflow */}
          <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
            <img
              src="/Case Studies/ai project/Ai - KPI Table.png"
              alt="KPI comparison table showing before and after metrics"
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial Quote - Full width spillover */}
          <div className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
              <p className="text-quote text-purple italic max-w-5xl mx-auto">
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>
                Not only does this save our developers hours previously spent
                translating Excel sheets into JSON, it also gives underwriters
                autonomous control over the rules they need to create for partner
                validation.
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
              </p>
              <cite className="text-2xl font-work-sans text-purple text-center block mt-4">
                - Product Team Lead
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIImpactSection;