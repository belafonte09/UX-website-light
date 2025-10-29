import React from 'react';

interface FigmaProIconProps {
  size?: number;
  className?: string;
}

const FigmaProIcon: React.FC<FigmaProIconProps> = ({
  size = 100,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 117 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M45 0L61.8261 22.3043L77.087 0L79.4348 30.913L100.957 14.087L90.7826 42.6522L117 48.5217L94.3043 60.2609L117 75.5217H87.6522L94.3043 99.3913L71.6087 84.913L73.9565 108L55.5652 84.913L40.3043 102.522V75.5217L17.6087 89.6087L28.9565 66.1304L0 58.3043L23.4783 48.5217L2.73913 37.5652H34.0435L23.4783 10.9565L48.913 26.6087L45 0Z" fill="#B3B3B3"/>
    </svg>
  );
};

export default FigmaProIcon;