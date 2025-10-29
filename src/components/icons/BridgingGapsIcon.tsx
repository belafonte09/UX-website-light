import React from 'react';

interface BridgingGapsIconProps {
  size?: number;
  className?: string;
}

const BridgingGapsIcon: React.FC<BridgingGapsIconProps> = ({
  size = 100,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 132 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M95.0557 25.2667L131.418 57.2657L71.299 95.5677C25.7246 121.749 7.30084 80.5378 3.42217 74.7198C0.319232 70.0654 -0.133279 51.4478 0.0283318 42.7208C0.836388 28.9838 8.8523 1.21891 34.4515 0.0553061C60.0507 -1.1083 85.5207 16.378 95.0557 25.2667Z" fill="#CD9EA1"/>
    </svg>
  );
};

export default BridgingGapsIcon;