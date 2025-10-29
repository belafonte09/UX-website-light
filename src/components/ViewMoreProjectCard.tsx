import React from 'react';

interface ViewMoreProjectCardProps {
  name: string;
  date: string;
  company: string;
  image?: string;
  pdfUrl?: string;
  onClick?: () => void;
}

const ViewMoreProjectCard: React.FC<ViewMoreProjectCardProps> = ({
  name,
  date,
  company,
  image,
  pdfUrl,
  onClick
}) => {
  // Determine colors and display names based on project
  const getProjectConfig = () => {
    if (company === "mello") {
      return {
        blobColor: "#5556AF", // purple
        displayTitle: "Mobile App Redesign",
        imageSrc: "/images/mockups/mello-mobile-app-first-page.png"
      };
    } else if (name === "Designing a foodsharing experience") {
      return {
        blobColor: "#BFD22D", // lime
        displayTitle: "Designing a foodsharing experience",
        imageSrc: "/images/projects/freelance/appetit-preview.png"
      };
    } else if (name === "UX/UI for a smarter bulk merge app") {
      return {
        blobColor: "#CD9EA1", // rose
        displayTitle: "UX/UI for a smarter bulk merge app",
        imageSrc: "/images/projects/freelance/bulk-merge-preview.png"
      };
    } else {
      return {
        blobColor: "#5556AF", // default purple
        displayTitle: name,
        imageSrc: image || '/placeholder.svg'
      };
    }
  };

  const config = getProjectConfig();

  const handleImageClick = (e: React.MouseEvent) => {
    if (pdfUrl) {
      e.stopPropagation();
      window.open(pdfUrl, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="group cursor-pointer hover:opacity-80 transition-opacity duration-300 w-full"
      onClick={handleImageClick}
    >
      {/* Image Container with horizontal padding */}
      <div className="w-full px-6 md:px-20 lg:px-[148px]">
        <div className="relative bg-butter rounded-4xl overflow-hidden" style={{borderRadius: '32px'}}>
          {/* Base project image */}
          <img
            src={config.imageSrc}
            alt={`${config.displayTitle} mockup`}
            className="w-full h-auto aspect-[620/426] object-cover group-hover:opacity-0 transition-opacity duration-300"
            style={{borderRadius: '32px'}}
          />

          {/* Animated overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{borderRadius: '32px'}}>
            {/* Custom SVG blob that grows from tiny to exact end placement */}
            <svg
              className="project-blob absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform scale-[0.01] group-hover:scale-[120%] transition-all duration-300 ease-out origin-center hidden md:block"
              viewBox="0 0 621 427"
              preserveAspectRatio="none"
            >
              <path
                d="M11.4642 40.7153C50.0943 -75.1752 246.125 -88.8991 339.312 -81.2747C374.045 -81.2747 457.235 -75.6836 512.13 -53.319C580.75 -25.3634 603.623 7.67594 621.413 99.1684C635.645 172.362 529.073 214.381 474.008 226.241C501.964 226.241 603.623 274.529 621.413 327.9C635.645 370.596 627.343 411.768 621.413 427.016C623.446 492.078 485.021 523.592 415.555 531.216C346.936 538.841 184.282 544.94 82.6239 508.343C-19.0344 471.746 -35.9771 408.379 -31.7412 381.27C-45.9733 295.877 63.9871 242.337 120.746 226.241C64.8342 210.993 36.8788 175.412 11.4642 137.29C-8.86748 106.793 2.99265 60.1996 11.4642 40.7153Z"
                fill={config.blobColor}
              />
            </svg>

            {/* Text content overlay */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col h-full">
              {/* Top section - Title and Year */}
              <div>
                {/* Title */}
                <h3 className="project-text text-[26px] font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  {config.displayTitle}
                </h3>

                {/* Year */}
                <p className="project-text text-[26px] font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  {date}
                </p>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1"></div>

              {/* Bottom section - Arrow only */}
              <div className="flex justify-end items-end">
                {/* Arrow - bottom right */}
                <svg
                  className="project-text w-8 h-8 text-black opacity-0 transform translate-y-4 group-hover:translate-x-1 transition-all duration-150 ease-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop hover animations only */
        @media (hover: hover) and (pointer: fine) {
          .group:hover .project-text {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile - no animations, hide text overlay */
        @media (hover: none) and (pointer: coarse) {
          .project-text {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewMoreProjectCard;