import React from 'react';

interface PaymentSuccessProjectCardProps {
  image: string;
  onClick?: () => void;
}

const PaymentSuccessProjectCard: React.FC<PaymentSuccessProjectCardProps> = ({
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
        {/* Card - 624×429.06px with greige background */}
        <div className="relative bg-greige overflow-hidden w-full" style={{borderRadius: '40px'}}>
          {/* Base project image */}
          <img
            src={image}
            alt="Payment Success project mockup"
            className="w-full h-auto aspect-[624/429.06] object-cover group-hover:opacity-0 transition-opacity duration-300"
            style={{borderRadius: '40px'}}
          />

          {/* Animated overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{borderRadius: '40px'}}>
            {/* Custom SVG "b shaped" blob that grows from tiny to exact end placement */}
            <svg
              className="payment-success-blob absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform scale-[0.01] group-hover:scale-[120%] transition-all duration-300 ease-out origin-center hidden md:block"
              viewBox="0 0 642 704"
              preserveAspectRatio="none"
            >
              <path
                d="M4.23744e-05 426.908L13.8587 14.309L374.183 0.46341C482.835 -3.96718 548.802 24.4625 568.204 39.2311C652.465 90.183 647.66 185.995 634.726 227.532C614.769 325.005 532.172 347.527 493.367 346.604C406.889 353.25 385.27 364.142 385.27 368.757C385.27 382.049 473.965 392.756 518.313 396.448C609.226 423.032 624.563 505.367 620.867 543.212C618.65 678.345 486.9 706.59 421.303 703.821L3.02702e-05 703.821L4.23744e-05 426.908Z"
                fill="#E36785"
              />
            </svg>

            {/* Text content overlay */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col h-full">
              {/* Top section - Title and Year */}
              <div>
                {/* Title */}
                <h3 className="payment-text text-[26px] font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  Designing an email experience that drives faster,<br />easier customer payment
                </h3>

                {/* Year */}
                <p className="payment-text text-[26px] font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  2024
                </p>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1"></div>

              {/* Bottom section - Arrow only */}
              <div className="flex justify-end items-end">
                {/* Arrow - bottom right */}
                <svg
                  className="payment-text w-8 h-8 text-black opacity-0 transform translate-y-4 group-hover:translate-x-1 transition-all duration-150 ease-out"
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
          Simplifying customer payments
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
                    <span className="text-[16px] md:text-[24px] font-semibold">75%</span>
                    <span className="text-[14px] md:text-[16px] font-medium">reduction in weekly Helpdesk tickets</span>
                  </p>

                  {/* Item 2 */}
                  <p className="font-work-sans text-riso-black flex flex-wrap md:whitespace-nowrap items-baseline gap-1">
                    <span className="text-[16px] md:text-[24px] font-semibold">60%</span>
                    <span className="text-[14px] md:text-[16px] font-medium">increase of on time payments</span>
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
              <span className="font-semibold">75%</span> reduction in weekly Helpdesk tickets
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-blush rounded-full flex-shrink-0"></span>
            <span className="text-[14px] font-work-sans">
              <span className="font-semibold">60%</span> increase of on time payments
            </span>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Desktop hover animations only */
        @media (hover: hover) and (pointer: fine) {
          .group:hover .payment-text {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile - no animations, hide text overlay */
        @media (hover: none) and (pointer: coarse) {
          .payment-text {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccessProjectCard;
