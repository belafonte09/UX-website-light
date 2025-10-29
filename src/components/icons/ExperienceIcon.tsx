import React from 'react';

interface ExperienceIconProps {
  size?: number;
  className?: string;
}

const ExperienceIcon: React.FC<ExperienceIconProps> = ({
  size = 100,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 113 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M37.0112 103.676C20.0477 96.6111 5.26896 74.6215 0 64.5098C11.1034 64.5098 29.3005 61.4379 37.0112 59.902C49.3483 59.134 70.1671 43.3905 75.9501 35.3268C80.5765 28.8758 89.4438 9.08769 93.2991 0C106.561 23.3464 110.905 38.6547 111.419 43.3905C117.588 64.5866 104.223 85.7571 96.7689 93.6928C86.3595 107.132 58.2156 112.508 37.0112 103.676Z" fill="#BFD22D"/>
    </svg>
  );
};

export default ExperienceIcon;