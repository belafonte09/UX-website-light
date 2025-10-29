import React from 'react';

interface GoalCardProps {
  title: string;
  description: string;
  variant: 'backend' | 'ux';
  className?: string;
}

const GoalCard: React.FC<GoalCardProps> = ({
  title,
  description,
  variant,
  className = ''
}) => {
  const isBackend = variant === 'backend';
  const borderClass = isBackend ? '' : 'border-pink';
  const borderColor = isBackend ? '#5556AF' : undefined;
  const shadowColor = isBackend ? '#5556AF' : '#E36785';

  return (
    <div
      className={`bg-butter rounded-2xl p-6 md:p-8 ml-2 ${borderClass} ${className}`}
      style={{
        ...(borderColor && { border: `1px solid ${borderColor}` }),
        ...(!borderColor && { border: '1px solid' }),
        boxShadow: `-6px 6px 0px 0px ${shadowColor}`
      }}
    >
      <h3 className="text-[18px] font-work-sans font-bold text-foreground mb-4">
        {title}
      </h3>
      <p className="text-[16px] font-work-sans text-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default GoalCard;