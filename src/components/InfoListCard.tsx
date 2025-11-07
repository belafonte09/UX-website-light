import React from 'react';

interface InfoListCardProps {
  title: string;
  items: string[];
  className?: string;
}

const InfoListCard: React.FC<InfoListCardProps> = ({
  title,
  items,
  className = ''
}) => {
  return (
    <div
      className={`bg-white border border-stroke rounded-2xl p-6 md:p-8 ${className}`}
    >
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-card-heading font-fira-code font-bold text-foreground">
          {title}
        </h3>

        {/* List Items */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Purple bullet dot */}
              <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5" />

              {/* Item text */}
              <span className="text-[16px] md:text-[18px] font-work-sans text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoListCard;
