import React from 'react';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  type = 'button'
}) => {
  const getVariantClasses = () => {
    if (disabled) {
      return 'bg-gray-200 text-gray-500 cursor-not-allowed';
    }

    switch (variant) {
      case 'primary':
        return 'bg-purple text-white hover:bg-purple/90 focus:ring-purple/20';
      case 'secondary':
        return 'bg-white border border-purple text-purple hover:bg-purple/5 focus:ring-purple/20';
      case 'ghost':
        return 'text-purple hover:bg-purple/5 focus:ring-purple/20';
      default:
        return 'bg-purple text-white hover:bg-purple/90 focus:ring-purple/20';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-md font-work-sans font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ModernButton;