import React from 'react';

interface KeyInsightCardProps {
  insight: string;
  update: string;
  className?: string;
}

const KeyInsightCard: React.FC<KeyInsightCardProps> = ({
  insight,
  update,
  className = ''
}) => {
  return (
    <div className={`bg-butter border border-pink rounded-2xl p-6 md:p-10 ml-2 ${className}`} style={{ boxShadow: '-8px 8px 0px 0px #E36785' }}>
      <div className="space-y-4 md:space-y-6">
        {/* Key insight section */}
        <div>
          <h3 className="text-lg md:text-[22px] font-work-sans text-pink mb-3 md:mb-4">
            Key insight
          </h3>
          <p
            className="text-base md:text-[20px] font-work-sans text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: insight }}
          />
        </div>

        {/* Update section - only show if update content exists */}
        {update && (
          <div>
            <h4 className="text-lg md:text-[22px] font-work-sans text-pink mb-3 md:mb-4">
              Update
            </h4>
            <p
              className="text-base md:text-[20px] font-work-sans text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: update }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyInsightCard;