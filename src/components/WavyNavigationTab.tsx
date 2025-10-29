import React from 'react';

interface WavyNavigationTabProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const WavyNavigationTab: React.FC<WavyNavigationTabProps> = ({ children, isActive, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block ${isActive ? 'text-riso-green' : 'text-riso-white hover:text-riso-green'} transition-colors no-underline font-bold ${className}`}
    >
      {children}
      <svg
        className="absolute left-0 w-full overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        style={{ height: '8px', top: 'calc(100% - 2px)' }}
      >
        {isActive && (
          <path
            d="M0,4 Q25,1 50,4 T100,4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="underline-path"
          />
        )}
      </svg>

      <style jsx>{`
        .underline-path {
          transition: d 0.2s ease;
        }
      `}</style>
    </button>
  );
};

export default WavyNavigationTab;