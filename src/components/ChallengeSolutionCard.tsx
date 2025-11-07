import React from 'react';

interface ChallengeSolutionCardProps {
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  className?: string;
}

const ChallengeSolutionCard: React.FC<ChallengeSolutionCardProps> = ({
  challenge,
  solution,
  className = ''
}) => {
  return (
    <div
      className={`bg-white border border-stroke rounded-2xl p-6 md:p-8 ${className}`}
    >
      <div className="space-y-8">
        {/* Challenge Section */}
        <div className="space-y-3">
          <h3 className="text-card-heading font-fira-code font-bold text-foreground">
            {challenge.title}
          </h3>
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            {challenge.description}
          </p>
        </div>

        {/* Solution Section */}
        <div className="space-y-3">
          <h3 className="text-card-heading font-fira-code font-bold text-foreground">
            {solution.title}
          </h3>
          <p className="text-lg font-work-sans text-foreground leading-relaxed">
            {solution.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSolutionCard;
