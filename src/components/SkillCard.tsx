import React from 'react';

interface SkillCardProps {
  title: string;
  description: string;
  children: React.ReactNode; // For SVG content
  isEven?: boolean; // For alternating mobile layout
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, children, isEven = false }) => {
  return (
    <div className="rounded-xl mx-0" style={{ backgroundColor: '#E4E3DD' }}>
      {/* Desktop Layout - Vertical */}
      <div className="hidden md:flex flex-col h-full p-6">
        {/* Title */}
        <h3 className="mb-2" style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: '800',
          fontSize: '16px',
          lineHeight: '1.75',
          letterSpacing: '-0.16px',
          color: '#000000'
        }}>
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 flex-1" style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '1.5',
          letterSpacing: '0.32px',
          color: '#000000'
        }}>
          {description}
        </p>

        {/* SVG Container */}
        <div className="flex justify-center items-end mt-auto">
          <div className="scale-125">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Horizontal */}
      <div className={`md:hidden flex items-center p-6 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Icon Container */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="scale-90">
            {children}
          </div>
        </div>

        {/* Text Container */}
        <div className={`flex-1 ${isEven ? 'pr-6' : 'pl-6'}`}>
          {/* Title */}
          <h3 className="mb-2" style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: '800',
            fontSize: '16px',
            lineHeight: '1.4',
            letterSpacing: '-0.16px',
            color: '#000000'
          }}>
            {title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '1.35',
            letterSpacing: '0.28px',
            color: '#000000'
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;