import React, { useState } from 'react';
import { User, Copy, Linkedin } from 'lucide-react';

interface ContactLinkProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

interface MobileContactButtonProps {
  href?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = ""
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative inline-block text-text transition-all duration-300 no-underline font-medium text-xl ${className}`}
    >
      {children}
      <svg
        className="absolute left-0 w-full overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        style={{ height: '8px', top: 'calc(100% - 2px)' }}
      >
        <path
          d="M2,4 L98,4"
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
          d: path("M2,4 Q25,1 50,4 T98,4");
        }
      `}</style>
    </a>
  );
};

const MobileContactButton: React.FC<MobileContactButtonProps> = ({
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  children
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center gap-3 px-4 py-3 border-2 border-text rounded-lg text-text hover:bg-text hover:text-white transition-all duration-300 font-medium w-full"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
};

const ContactCard: React.FC = () => {
  const [cardBg, setCardBg] = useState('bg-blush');
  const [copyFeedback, setCopyFeedback] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('khoffmann.design@gmail.com');
      setCopyFeedback('Email copied!');
      setTimeout(() => setCopyFeedback(''), 2000);
    } catch (err) {
      setCopyFeedback('Failed to copy');
      setTimeout(() => setCopyFeedback(''), 2000);
    }
  };

  const handleEmailHover = () => {
    setCardBg('bg-lime');
    setShowTooltip(true);
  };

  const handleLinkedInHover = () => {
    setCardBg('bg-[#FF8B73]');
  };

  const handleResumeHover = () => {
    setCardBg('bg-pink');
  };

  const handleTitleHover = () => {
    setCardBg('bg-riso-purple');
  };

  const handleMouseLeave = () => {
    setCardBg('bg-blush');
    setShowTooltip(false);
  };

  return (
    <div className={`${cardBg} rounded-2xl p-6 md:pt-[72px] md:pl-16 md:pb-[72px] md:pr-16 text-text transition-colors duration-300`}>
      {/* Section Title */}
      <h1
        className="text-4xl md:text-5xl font-sora font-bold text-text mb-32 cursor-pointer transition-all duration-300"
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleMouseLeave}
      >
        Get in touch
      </h1>

      {/* Mobile Contact Buttons */}
      <div className="md:hidden flex flex-col gap-4">
        <MobileContactButton
          href="https://docs.google.com/document/d/1a1HvTLUeWnqcciY6NEE_Kfmp7OAbA702/edit?usp=sharing&ouid=102463870981616514202&rtpof=true&sd=true"
          onMouseEnter={handleResumeHover}
          onMouseLeave={handleMouseLeave}
          icon={<User size={20} />}
        >
          View Resume
        </MobileContactButton>

        <div className="relative">
          <MobileContactButton
            onClick={handleEmailCopy}
            onMouseEnter={handleEmailHover}
            onMouseLeave={handleMouseLeave}
            icon={<Copy size={20} />}
          >
            Copy Email
          </MobileContactButton>
          {showTooltip && !copyFeedback && (
            <div className="absolute -top-10 left-4 bg-riso-white text-riso-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap z-10">
              Copy
            </div>
          )}
          {copyFeedback && (
            <div className="absolute -top-10 left-4 bg-riso-white text-riso-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap z-10">
              {copyFeedback}
            </div>
          )}
        </div>

        <MobileContactButton
          href="https://www.linkedin.com/in/karin-hoffmann/"
          onMouseEnter={handleLinkedInHover}
          onMouseLeave={handleMouseLeave}
          icon={<Linkedin size={20} />}
        >
          LinkedIn
        </MobileContactButton>
      </div>

      {/* Desktop Contact Links */}
      <div className="hidden md:flex flex-row items-end gap-8 md:gap-16">
        <ContactLink
          href="https://docs.google.com/document/d/1a1HvTLUeWnqcciY6NEE_Kfmp7OAbA702/edit?usp=sharing&ouid=102463870981616514202&rtpof=true&sd=true"
          onMouseEnter={handleResumeHover}
          onMouseLeave={handleMouseLeave}
        >
          View Resume
        </ContactLink>

        <div className="relative flex items-end">
          <ContactLink
            onClick={handleEmailCopy}
            onMouseEnter={handleEmailHover}
            onMouseLeave={handleMouseLeave}
          >
            khoffmann.design@gmail.com
          </ContactLink>
          {showTooltip && !copyFeedback && (
            <div className="absolute -top-10 left-0 bg-riso-white text-riso-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Copy
            </div>
          )}
          {copyFeedback && (
            <div className="absolute -top-10 left-0 bg-riso-white text-riso-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              {copyFeedback}
            </div>
          )}
        </div>

        <ContactLink
          href="https://www.linkedin.com/in/karin-hoffmann/"
          onMouseEnter={handleLinkedInHover}
          onMouseLeave={handleMouseLeave}
        >
          LinkedIn
        </ContactLink>
      </div>
    </div>
  );
};

export default ContactCard;