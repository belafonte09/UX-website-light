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
    <div className="w-full max-w-[624px] lg:max-w-[662px] xl:max-w-[700px] mx-auto">
      <div
        className="group cursor-pointer w-full"
        onClick={handleImageClick}
      >
        {/* Image Container */}
        <div className="w-full">
        <div className="relative bg-butter rounded-4xl overflow-hidden" style={{borderRadius: '32px'}}>
          {/* Base project image */}
          <img
            src={config.imageSrc}
            alt={`${config.displayTitle} mockup`}
            className="w-full h-auto object-cover group-hover:opacity-0 transition-opacity duration-300"
            style={{borderRadius: '32px'}}
          />

          {/* Animated overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{borderRadius: '32px'}}>
            {/* Custom SVG blob that grows from tiny to exact end placement */}
            <svg
              className="project-blob absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform scale-[0.01] group-hover:scale-[120%] transition-all duration-300 ease-out origin-center hidden md:block"
              viewBox="0 0 715 670"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="viewMoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E4F86D" />
                  <stop offset="100%" stopColor="#FAF9EF" />
                </linearGradient>
              </defs>
              <path
                d="M48.0043 133.692C89.7101 8.45582 301.349 -6.37482 401.955 1.86442C439.453 1.86442 529.266 7.90645 588.533 32.0746C662.615 62.2847 687.309 97.9885 706.516 196.859C721.881 275.956 606.825 321.364 547.375 334.18C577.557 334.18 687.309 386.362 706.516 444.037C721.881 490.176 712.918 534.668 706.516 551.147C708.711 621.455 559.265 655.511 484.268 663.75C410.185 671.989 234.582 678.581 124.83 639.032C15.0775 599.484 -3.21413 531.006 1.35906 501.711C-14.0062 409.432 104.709 351.574 165.987 334.18C105.624 317.702 75.4424 279.252 48.0043 238.056C26.0539 205.099 38.8583 154.748 48.0043 133.692Z"
                fill="url(#viewMoreGradient)"
              />
            </svg>

            {/* Text content overlay */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 xl:p-12 2xl:p-16 flex flex-col h-full">
              {/* Top section - Title and Year */}
              <div>
                {/* Title */}
                <h3 className="project-text text-base md:text-lg lg:text-2xl xl:text-2xl 2xl:text-3xl font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  {config.displayTitle}
                </h3>

                {/* Year */}
                <p className="project-text text-base md:text-lg lg:text-2xl xl:text-2xl 2xl:text-3xl font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
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