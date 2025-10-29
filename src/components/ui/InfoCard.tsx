import React from 'react';

interface InfoCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleColor?: 'purple' | 'default';
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  className = '',
  titleColor = 'default'
}) => {
  return (
    <div className={`bg-butter border border-stroke rounded-2xl p-8 shadow-sm ${className}`}>
      {title && (
        <h3 className={`text-lg font-work-sans font-bold mb-6 ${
          titleColor === 'purple' ? 'text-purple' : 'text-foreground'
        }`}>
          {title}
        </h3>
      )}
      <div className="text-foreground font-work-sans text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;