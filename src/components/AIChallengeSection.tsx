import React from 'react';

const AIChallengeSection: React.FC = () => {
  return (
    <div className="full-width-section py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#FFF3F1' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          The Challenge
        </h2>

        <div className="space-y-12 lg:space-y-24">
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            Design a dunning communication experience that helps customers
            understand their payment status and take action quickly.
          </p>

          {/* Our setup was not helping us! Card */}
          <div className="w-full">
            <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
              <h3 className="text-card-heading text-pink mb-6">
                Our setup was not helping us!
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    Rules lived in two separate systems, and there was no sync between them.
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    The Underwriting team depended on developers to make even the smallest change.
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                  <span className="text-card-body text-foreground">
                    Violation checks were manual, slow, and often inconsistent.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Quote - Full width spillover */}
          <div className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
              <p className="text-quote text-pink italic max-w-5xl mx-auto">
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>
                Every time we needed a small tweak to a rule, it felt like we were
                opening a ticket for a moon mission.
                <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
              </p>
              <cite className="text-2xl font-work-sans text-pink text-center block mt-4">
                - Senior Underwriter
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChallengeSection;