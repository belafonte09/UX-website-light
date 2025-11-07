import React from 'react';

interface DesignDevProjectCardProps {
  image: string;
  onClick?: () => void;
}

const DesignDevProjectCard: React.FC<DesignDevProjectCardProps> = ({
  image,
  onClick
}) => {
  return (
    <div
      className="group cursor-pointer hover:opacity-80 transition-opacity duration-300 w-full"
      onClick={onClick}
    >
      {/* Image Container with horizontal padding */}
      <div className="w-full px-0 md:px-0 lg:px-8 xl:px-16">
        <div className="relative bg-butter rounded-4xl overflow-hidden" style={{borderRadius: '32px'}}>
          {/* Base project image */}
          <img
            src={image}
            alt="Design-Dev project mockup"
            className="w-full h-auto aspect-[620/426] object-cover group-hover:opacity-0 transition-opacity duration-300 rounded-4xl"
            style={{borderRadius: '32px'}}
          />

          {/* Animated overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-4xl overflow-hidden" style={{borderRadius: '32px'}}>
            {/* Custom SVG blob that grows from tiny to exact end placement */}
            <svg
              className="design-dev-blob absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform scale-[0.01] group-hover:scale-[120%] transition-all duration-300 ease-out origin-center hidden md:block"
              viewBox="0 0 698 644"
              preserveAspectRatio="none"
            >
              <path
                d="M0 356.856V515.28C0 530.132 3.41029 567.263 17.0514 596.968C30.6926 626.672 61.7099 640.699 75.5135 644H119.36C191.463 640.039 214.361 556.536 216.797 515.28C223.292 442.669 236.771 295.961 238.72 290.02C240.669 284.079 247.652 282.594 250.9 282.594C270.387 284.574 263.891 375.833 258.207 421.215C251.712 473.198 245.053 584.096 270.387 611.82C295.72 639.544 331.285 639.874 345.9 636.574C421.901 634.594 449.021 528.482 453.081 475.674C470.619 344.974 483.124 325.501 487.184 332.102C508.62 312.298 507.483 388.21 504.235 428.642C492.543 543.499 522.098 595.317 538.338 606.869L589.492 624.197C673.288 624.197 695.861 503.728 696.673 443.494C706.416 296.951 660.134 186.054 635.775 148.923C609.791 111.792 528.594 32.0851 411.67 10.3017C265.515 -16.9275 248.464 12.7771 136.411 64.7602C46.7696 106.347 8.11973 276.818 0 356.856Z"
                fill="#BFD22D"
              />
            </svg>

            {/* Text content overlay */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col h-full">
              {/* Top section - Title and Year */}
              <div>
                {/* Title */}
                <h3 className="design-dev-text text-base md:text-lg lg:text-xl font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  Fixing the Design-Dev<br />communication gap
                </h3>

                {/* Year */}
                <p className="design-dev-text text-base md:text-lg lg:text-xl font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  2024
                </p>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1"></div>

              {/* Bottom section - Arrow only */}
              <div className="flex justify-end items-end">
                {/* Arrow - bottom right */}
                <svg
                  className="design-dev-text w-8 h-8 text-black opacity-0 transform translate-y-4 group-hover:translate-x-1 transition-all duration-150 ease-out"
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

      <style jsx>{`
        /* Desktop hover animations only */
        @media (hover: hover) and (pointer: fine) {
          .group:hover .design-dev-text {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile - no animations, hide text overlay */
        @media (hover: none) and (pointer: coarse) {
          .design-dev-text {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DesignDevProjectCard;