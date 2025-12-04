import React from 'react';

interface AIRuleCreationProjectCardProps {
  image: string;
  onClick?: () => void;
}

const AIRuleCreationProjectCard: React.FC<AIRuleCreationProjectCardProps> = ({
  image,
  onClick
}) => {
  return (
    <div className="w-full max-w-[624px] lg:max-w-[662px] xl:max-w-[700px] mx-auto">
      {/* Main Card Container */}
      <div
        className="group cursor-pointer hover:opacity-80 transition-opacity duration-300 w-full"
        onClick={onClick}
      >
        {/* Card - 624×429.06px with butter background */}
        <div className="relative bg-butter overflow-hidden w-full" style={{borderRadius: '40px'}}>
          {/* Base project image */}
          <img
            src={image}
            alt="AI rule creation project mockup"
            className="w-full h-auto aspect-[624/429.06] object-cover group-hover:opacity-0 transition-opacity duration-300"
            style={{borderRadius: '40px'}}
          />

          {/* Animated overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{borderRadius: '40px'}}>
            {/* Custom SVG blob that grows from tiny to exact end placement */}
            <svg
              className="ai-rule-blob absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform scale-[0.01] group-hover:scale-[120%] transition-all duration-300 ease-out origin-center hidden md:block"
              viewBox="0 0 621 427"
              preserveAspectRatio="none"
            >
              <path
                d="M11.4642 40.7153C50.0943 -75.1752 246.125 -88.8991 339.312 -81.2747C374.045 -81.2747 457.235 -75.6836 512.13 -53.319C580.75 -25.3634 603.623 7.67594 621.413 99.1684C635.645 172.362 529.073 214.381 474.008 226.241C501.964 226.241 603.623 274.529 621.413 327.9C635.645 370.596 627.343 411.768 621.413 427.016C623.446 492.078 485.021 523.592 415.555 531.216C346.936 538.841 184.282 544.94 82.6239 508.343C-19.0344 471.746 -35.9771 408.379 -31.7412 381.27C-45.9733 295.877 63.9871 242.337 120.746 226.241C64.8342 210.993 36.8788 175.412 11.4642 137.29C-8.86748 106.793 2.99265 60.1996 11.4642 40.7153Z"
                fill="#FF8B73"
              />
            </svg>

            {/* Text content overlay */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col h-full">
              {/* Top section - Title and Year */}
              <div>
                {/* Title */}
                <h3 className="ai-rule-text text-[26px] font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  Designing a tool that lets you describe complex rules<br />in English, not code.
                </h3>

                {/* Year */}
                <p className="ai-rule-text text-[26px] font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  2025
                </p>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1"></div>

              {/* Bottom section - Arrow only */}
              <div className="flex justify-end items-end">
                {/* Arrow - bottom right */}
                <svg
                  className="ai-rule-text w-8 h-8 text-black opacity-0 transform translate-y-4 group-hover:translate-x-1 transition-all duration-150 ease-out"
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
          How we used AI to simplify rule creation
        </h2>
      </div>

      {/* Impact Card - Desktop only */}
      <div className="mt-4 w-full hidden md:block">
        <div
          className="bg-blush w-[82.69%] lg:max-w-[516px] xl:max-w-[516px] mx-auto"
          style={{borderRadius: '40px', aspectRatio: '516/260'}}
        >
          {/* Inner container with padding - 48px horizontal, 40px vertical */}
          <div className="px-6 md:px-12 pt-6 md:pt-10 pb-6 md:pb-10 h-full">
            {/* Content area - flexible width */}
            <div className="w-full h-full flex items-center">
              {/* Frame 615 - max 396px wide */}
              <div className="w-full max-w-[396px]">
                {/* Frame 613 - Impact items with 16px spacing */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {/* Impact Heading - 396×36 */}
                  <h3 className="text-[16px] md:text-[26px] font-work-sans font-semibold text-riso-black leading-6 md:leading-9">
                    Impact
                  </h3>

                  {/* Item 1 */}
                  <p className="font-work-sans text-riso-black flex flex-wrap md:whitespace-nowrap items-baseline gap-1">
                    <span className="text-[16px] md:text-[24px] font-semibold">80%</span>
                    <span className="text-[14px] md:text-[16px] font-medium">reduction in processing time per file</span>
                  </p>

                  {/* Item 2 */}
                  <p className="font-work-sans text-riso-black flex flex-wrap md:whitespace-nowrap items-baseline gap-1">
                    <span className="text-[16px] md:text-[24px] font-semibold">80%</span>
                    <span className="text-[14px] md:text-[16px] font-medium">less reliance on engineers</span>
                  </p>

                  {/* Item 3 */}
                  <p className="font-work-sans text-riso-black flex flex-wrap md:whitespace-nowrap items-baseline gap-1">
                    <span className="text-[16px] md:text-[24px] font-semibold">One source of truth</span>
                    <span className="text-[14px] md:text-[16px] font-medium">- preventing errors</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Bullets - Mobile only */}
      <div className="mt-4 w-full px-4 md:hidden">
        <ul className="space-y-2 text-blush">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-blush rounded-full flex-shrink-0"></span>
            <span className="text-[14px] font-work-sans">
              <span className="font-semibold">80%</span> reduction in processing time per file
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-blush rounded-full flex-shrink-0"></span>
            <span className="text-[14px] font-work-sans">
              <span className="font-semibold">80%</span> less reliance on engineers
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-blush rounded-full flex-shrink-0"></span>
            <span className="text-[14px] font-work-sans">
              <span className="font-semibold">One source of truth</span> - preventing errors
            </span>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Desktop hover animations only */
        @media (hover: hover) and (pointer: fine) {
          .group:hover .ai-rule-text {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile - no animations, hide text overlay */
        @media (hover: none) and (pointer: coarse) {
          .ai-rule-text {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AIRuleCreationProjectCard;
