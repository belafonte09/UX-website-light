import React from 'react';

interface CouplesSchedulerProjectCardProps {
  image: string;
  onClick?: () => void;
}

const CouplesSchedulerProjectCard: React.FC<CouplesSchedulerProjectCardProps> = ({
  image,
  onClick
}) => {
  return (
    <div className="w-full max-w-[624px] lg:max-w-[662px] xl:max-w-[700px] mx-auto">
      {/* Main Card Container */}
      <div
        className="group cursor-pointer w-full"
        onClick={onClick}
      >
        {/* Card - match compliance/payment sizing and behaviour */}
        <div
          className="relative bg-greige overflow-hidden w-full"
          style={{ borderRadius: '40px', aspectRatio: '624/429.06' }}
        >
          {/* Base project image */}
          <img
            src={image}
            alt="Couple's scheduler project mockup"
            className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
            style={{ borderRadius: '40px' }}
          />

          {/* Animated overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ borderRadius: '40px' }}
          >
            {/* Custom SVG blob that grows from tiny to exact end placement */}
            <svg
              className="couples-blob absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform scale-[0.01] group-hover:scale-[120%] transition-all duration-300 ease-out origin-center hidden md:block"
              viewBox="0 0 715 491"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="couplesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E4F86D" />
                  <stop offset="100%" stopColor="#FAF9EF" />
                </linearGradient>
              </defs>
              <path
                d="M48.0043 133.692C89.7101 8.45582 301.349 -6.37482 401.955 1.86442C439.453 1.86442 529.266 7.90645 588.533 32.0746C662.615 62.2847 687.309 97.9885 706.516 196.859C721.881 275.956 606.825 321.364 547.375 334.18C577.557 334.18 687.309 386.362 706.516 444.037C721.881 490.176 712.918 534.668 706.516 551.147C708.711 621.455 559.265 655.511 484.268 663.75C410.185 671.989 234.582 678.581 124.83 639.032C15.0775 599.484 -3.21413 531.006 1.35906 501.711C-14.0062 409.432 104.709 351.574 165.987 334.18C105.624 317.702 75.4424 279.252 48.0043 238.056C26.0539 205.099 38.8583 154.748 48.0043 133.692Z"
                fill="url(#couplesGradient)"
              />
            </svg>

            {/* Text content overlay */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col h-full">
              {/* Top section - Title and Year */}
              <div>
                {/* Title */}
                <h3 className="couples-text text-[26px] font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  Couple&apos;s scheduler — mobile family planner
                </h3>

                {/* Year */}
                <p className="couples-text text-[26px] font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  2024
                </p>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1" />

              {/* Bottom section - Arrow only */}
              <div className="flex justify-end items-end">
                <svg
                  className="couples-text w-8 h-8 text-black opacity-0 transform translate-y-4 group-hover:translate-x-1 transition-all duration-150 ease-out"
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

      {/* Heading Section - 16px spacing below card */}
      <div className="mt-4 w-full">
        <h2 className="text-[24px] font-work-sans font-semibold text-blush text-center">
          Couple&apos;s scheduler
        </h2>
      </div>

      {/* Impact Card - Desktop only */}
      <div className="mt-4 w-full hidden md:block">
        <div
          className="border border-[#F6F5F1] w-full"
          style={{ borderRadius: '24px' }}
        >
          {/* Inner container with padding - reduced vertical padding */}
          <div className="px-6 md:px-12 py-10">
            {/* Content area - flexible width */}
            <div className="w-full flex">
              {/* Frame 615 - max 396px wide */}
              <div className="w-full max-w-[396px]">
                {/* Frame 613 - Impact items with 16px spacing */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {/* Overview Heading - 396×36 */}
                  <h3 className="text-[16px] md:text-[26px] font-work-sans font-semibold text-[#F6F5F1] leading-6 md:leading-9">
                    Overview
                  </h3>

                  {/* Item 1 */}
                  <p className="font-work-sans text-[#F6F5F1] text-[14px] md:text-[16px] font-medium">
                    Daily family schedule at a glance
                  </p>

                  {/* Item 2 */}
                  <p className="font-work-sans text-[#F6F5F1] text-[14px] md:text-[16px] font-medium">
                    One click task re-assignment
                  </p>

                  {/* Item 3 */}
                  <p className="font-work-sans text-[#F6F5F1] text-[14px] md:text-[16px] font-medium">
                    On-the-go: update any time, anywhere, on mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Bullets - Mobile only */}
      <div className="mt-4 w-full px-4 md:hidden">
        <ul className="space-y-2 text-[#F6F5F1]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-[#F6F5F1] rounded-full flex-shrink-0" />
            <span className="text-[14px] font-work-sans">
              Daily family schedule at a glance
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-[#F6F5F1] rounded-full flex-shrink-0" />
            <span className="text-[14px] font-work-sans">
              One click task re-assignment
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-[#F6F5F1] rounded-full flex-shrink-0" />
            <span className="text-[14px] font-work-sans">
              On-the-go: update any time, anywhere, on mobile
            </span>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Desktop hover animations only */
        @media (hover: hover) and (pointer: fine) {
          .couples-text {
            transition-delay: 0ms;
          }

          .group:hover .couples-text {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 250ms;
          }
        }

        /* Mobile - no animations, hide text overlay */
        @media (hover: none) and (pointer: coarse) {
          .couples-text {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CouplesSchedulerProjectCard;


