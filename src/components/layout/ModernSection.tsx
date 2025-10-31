import React from 'react';

interface ModernSectionProps {
  children: React.ReactNode;
  background?: 'white' | 'blush' | 'butter' | 'greige' | 'default';
  className?: string;
  fullWidth?: boolean;
}

const ModernSection: React.FC<ModernSectionProps> = ({
  children,
  background = 'default',
  className = '',
  fullWidth = false
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'white':
        return 'bg-white';
      case 'blush':
        return 'bg-blush';
      case 'butter':
        return 'bg-butter';
      case 'greige':
        return 'bg-greige';
      default:
        return '';
    }
  };

  if (fullWidth) {
    return (
      <div className={`full-width-section ${getBackgroundClass()} py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${className}`}>
        <div className="max-w-4xl mx-auto px-4">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${getBackgroundClass()} py-8 lg:py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default ModernSection;