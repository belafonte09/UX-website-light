import React from 'react';

interface ExperienceCardProps {
  icon?: React.ReactNode;
  title: string;
  duration: string;
  description: string | string[];
  keyLearning?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  icon,
  title,
  duration,
  description,
  keyLearning
}) => {
  return (
    <div className="flex gap-6 mb-20">
      {/* Icon/Image on the left */}
      <div className="flex-shrink-0">
        {icon ? (
          icon
        ) : (
          <div className="w-16 h-16 bg-white rounded-xl"></div>
        )}
      </div>

      {/* Content on the right */}
      <div className="flex-1">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-riso-white mb-2 font-sora">
          {title}
        </h3>

        {/* Duration */}
        <p className="text-base text-riso-white/70 mb-4">
          {duration}
        </p>

        {/* Description */}
        {Array.isArray(description) ? (
          <ul className="list-disc space-y-3 text-riso-white/90 ml-6 mb-4">
            {description.map((item, index) => (
              <li key={index} className="text-xl leading-relaxed pl-2">
                <span className="-ml-2 block">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xl text-riso-white/90 leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Key Learning (if provided) */}
        {keyLearning && (
          <div>
            <span className="text-xl font-bold text-riso-white">
              Most important thing I learned here:{' '}
            </span>
            <span className="text-xl text-riso-white/90">
              {keyLearning}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;