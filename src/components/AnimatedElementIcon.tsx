import React from 'react';

const AnimatedElementIcon: React.FC = () => {
  return (
    <div className="relative w-16 h-16 group">
      {/* White background square - gently slides further away on hover */}
      <div className="absolute w-16 h-16 bg-riso-white rounded-xl -top-1.5 -left-1.5 transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5" />

      {/* Static Element logo - stays on top and stationary */}
      <img
        src="/images/icons/element-logo-static.png"
        alt="Element Logo"
        className="relative w-16 h-16 z-10"
      />
    </div>
  );
};

export default AnimatedElementIcon;