import React from 'react';

interface NumberImpactCardProps {
  percentage: string;
  description: string;
  className?: string;
}

const NumberImpactCard: React.FC<NumberImpactCardProps> = ({
  percentage,
  description,
  className = ''
}) => {
  return (
    <div
      className={`bg-white border border-riso-blue rounded-2xl p-8 text-left ${className}`}
      style={{ boxShadow: '-6px 6px 0px 0px #2C5FB2' }}
    >
      <div className="space-y-4">
        {/* Large percentage number */}
        <div className="text-5xl md:text-6xl font-bold text-foreground">
          {percentage}
        </div>

        {/* Description text */}
        <div className="text-sm md:text-base font-work-sans text-foreground uppercase tracking-wide">
          {description}
        </div>
      </div>
    </div>
  );
};

export default NumberImpactCard;