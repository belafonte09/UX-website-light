import React from 'react';
import RuleCreationPrototype from '@/components/prototype/RuleCreationPrototype';

interface AIFinalUISectionProps {
  onAnyInteraction: () => void;
}

const AIFinalUISection: React.FC<AIFinalUISectionProps> = ({ onAnyInteraction }) => {
  return (
    <div className="full-width-section bg-greige py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
          Final UI
        </h2>

        {/* Prototype Container */}
        <div className="-mx-4 md:-mx-16 lg:-mx-24 xl:-mx-32">
          <div className="mx-4 md:mx-8 mb-8 overflow-hidden">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="transform scale-90 origin-top-left w-[111.11%] h-[111.11%]">
                <RuleCreationPrototype onAnyInteraction={onAnyInteraction} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFinalUISection;