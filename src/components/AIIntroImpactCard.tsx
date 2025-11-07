import React from 'react';

interface AIIntroImpactCardProps {
  items: string[];
  className?: string;
}

const AIIntroImpactCard: React.FC<AIIntroImpactCardProps> = ({
  items,
  className = ''
}) => {
  return (
    <div
      className={`bg-butter border border-[#2C5FB2] rounded-2xl p-6 md:p-10 ml-2 ${className}`}
      style={{ boxShadow: '-8px 8px 0px 0px #2C5FB2' }}
    >
      <div className="space-y-4 md:space-y-6">
        {/* Title */}
        <h3 className="text-lg md:text-[22px] font-work-sans text-[#2C5FB2] mb-3 md:mb-4">
          Impact
        </h3>

        {/* List Items */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Bullet dot */}
              <div className="w-2 h-2 bg-foreground rounded-full flex-shrink-0 mt-2.5" />

              {/* Item text */}
              <span className="text-base md:text-[20px] font-work-sans text-foreground leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIIntroImpactCard;
