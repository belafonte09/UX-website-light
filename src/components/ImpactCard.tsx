import React from 'react';
import { Clock, Zap, Gem, Users } from 'lucide-react';

interface ImpactCardProps {
  variant: 'reduced-work' | 'faster-close' | 'data-accuracy' | 'empowered-users';
  className?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  variant,
  className = ''
}) => {
  const getCardContent = () => {
    switch (variant) {
      case 'reduced-work':
        return {
          icon: Clock,
          title: 'Reduced Manual Work',
          description: 'From 8 hours per BDX to 30mins per BDX!'
        };
      case 'faster-close':
        return {
          icon: Zap,
          title: 'Faster Month-End Close',
          description: 'Reports generated in minutes instead of days'
        };
      case 'data-accuracy':
        return {
          icon: Gem,
          title: 'Higher Data Accuracy',
          description: 'Errors and violations surfaced automatically'
        };
      case 'empowered-users':
        return {
          icon: Users,
          title: 'Empowered users',
          description: 'Underwriters can validate and act on data without IT.'
        };
      default:
        return {
          icon: Clock,
          title: 'Impact',
          description: 'Description'
        };
    }
  };

  const { icon: Icon, title, description } = getCardContent();

  return (
    <div
      className={`bg-butter border border-pink rounded-2xl p-6 ${className}`}
    >
      <div className="space-y-4">
        {/* Icon */}
        <div className="w-12 h-12 bg-blush rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-foreground" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-[18px] font-work-sans font-bold text-foreground">
            {title}
          </h3>
          <p className="text-[16px] font-work-sans text-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;