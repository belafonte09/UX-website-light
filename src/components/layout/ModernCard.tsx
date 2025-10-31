import React from 'react';

interface ModernCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'info' | 'interactive' | 'collapsible';
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
}

const ModernCard: React.FC<ModernCardProps> = ({
  children,
  variant = 'default',
  className = '',
  title,
  icon,
  headerAction
}) => {
  const getCardClasses = () => {
    switch (variant) {
      case 'info':
        return 'bg-white border border-stroke rounded-2xl p-8 shadow-sm';
      case 'interactive':
        return 'bg-white rounded-lg border border-gray-200 hover:border-purple transition-colors';
      case 'collapsible':
        return 'bg-white rounded-lg border border-gray-200';
      default:
        return 'bg-white rounded-lg border border-gray-200 p-6';
    }
  };

  const cardClasses = `${getCardClasses()} ${className}`;

  if (variant === 'collapsible' && title) {
    return (
      <div className={cardClasses}>
        {/* Header with title and action */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {icon}
              <h3 className="text-lg font-sora font-semibold text-foreground">
                {title}
              </h3>
            </div>
            {headerAction}
          </div>
        </div>
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'info' && title) {
    return (
      <div className={cardClasses}>
        <h3 className="text-card-heading text-purple mb-6">
          {title}
        </h3>
        <div className="text-card-body text-foreground leading-relaxed">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      {title && (
        <h3 className="text-lg font-sora font-semibold text-foreground mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default ModernCard;