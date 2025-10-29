import React from 'react';

interface WavyUnderlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const WavyUnderlineLink: React.FC<WavyUnderlineLinkProps> = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`relative inline-block text-riso-white hover:text-riso-pink transition-colors no-underline font-bold ${className}`}
    >
      {children}
      <svg
        className="absolute left-0 w-full overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        style={{ height: '8px', top: 'calc(100% - 2px)' }}
      >
        <path
          d="M0,4 L100,4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="underline-path"
        />
      </svg>

      <style jsx>{`
        .underline-path {
          transition: d 0.2s ease;
        }

        a:hover .underline-path {
          d: path("M0,4 Q25,1 50,4 T100,4");
        }
      `}</style>
    </a>
  );
};

export default WavyUnderlineLink;