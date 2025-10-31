import React from 'react';

interface ModernLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-background overflow-x-auto ${className}`}>
      {children}
    </div>
  );
};

export default ModernLayout;