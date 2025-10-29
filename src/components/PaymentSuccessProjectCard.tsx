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
    <div
      className="group cursor-pointer hover:opacity-80 transition-opacity duration-300 w-full"
      onClick={onClick}
    >
      {/* Image Container with horizontal padding */}
      <div className="w-full px-6 md:px-20 lg:px-[148px]">
        <div className="relative bg-butter rounded-4xl overflow-hidden" style={{borderRadius: '32px'}}>
          {/* Base project image */}
          <img
            src={image}
            alt="Payment success project mockup"
            className="w-full h-auto aspect-[620/426] object-cover group-hover:opacity-0 transition-opacity duration-300 rounded-4xl"
            style={{borderRadius: '32px'}}
          />

          {/* Animated overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-4xl overflow-hidden" style={{borderRadius: '32px'}}>
            {/* Custom SVG blob that grows from tiny to exact end placement */}
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
                <h3 className="payment-success-text text-[26px] font-sora font-normal text-black leading-tight mb-4 opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  Boosting payment success
                </h3>

                {/* Year */}
                <p className="payment-success-text text-[26px] font-sora font-normal text-black opacity-0 transform translate-y-4 transition-all duration-150 ease-out">
                  2024
                </p>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1"></div>

              {/* Bottom section - Arrow only */}
              <div className="flex justify-end items-end">
                {/* Arrow - bottom right */}
                <svg
                  className="payment-success-text w-8 h-8 text-black opacity-0 transform translate-y-4 group-hover:translate-x-1 transition-all duration-150 ease-out"
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
          .group:hover .payment-success-text {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile - no animations, hide text overlay */
        @media (hover: none) and (pointer: coarse) {
          .payment-success-text {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccessProjectCard;