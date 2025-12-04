import React from 'react';
import { FileStack, Users, Gem } from 'lucide-react';

interface ComplianceProjectCardProps {
  image: string;
  onClick?: () => void;
}

const ComplianceProjectCard: React.FC<ComplianceProjectCardProps> = ({
  image,
  onClick
}) => {
  return (
    <div className="w-full">
      {/* Container with responsive padding */}
      <div className="w-full px-0 md:px-0 lg:px-8 xl:px-16 2xl:px-[164px]">
        {/* Main card */}
        <div className="flex flex-col gap-4">
          {/* Top Section - MacBook Mockup */}
          <div
            className="relative w-full rounded-[40px] overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: '#FDF970',
              aspectRatio: '624/429'
            }}
          >
            <img
              src={image}
              alt="Compliance dashboard mockup"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom Section - Impact Metrics */}
          <div
            className="rounded-[40px] p-12"
            style={{ backgroundColor: '#F5F0F0' }}
          >
            {/* Impact heading */}
            <h3 className="text-3xl font-sora font-semibold mb-8" style={{ color: '#131313' }}>
              Impact
            </h3>

            {/* Metrics List */}
            <div className="space-y-8 mb-8">
              {/* Metric 1 */}
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#BFD22D' }}
                >
                  <FileStack size={24} style={{ color: '#131313' }} />
                </div>
                <p className="text-lg font-work-sans" style={{ color: '#131313' }}>
                  90% reduction in processing time per file
                </p>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#BFD22D' }}
                >
                  <Users size={24} style={{ color: '#131313' }} />
                </div>
                <p className="text-lg font-work-sans" style={{ color: '#131313' }}>
                  80% less reliance on engineers
                </p>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#BFD22D' }}
                >
                  <Gem size={24} style={{ color: '#131313' }} />
                </div>
                <p className="text-lg font-work-sans" style={{ color: '#131313' }}>
                  95% Higher data accuracy
                </p>
              </div>
            </div>

            {/* Case Study Button */}
            <button
              onClick={onClick}
              className="px-8 py-3 rounded-full font-work-sans text-base font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: '#131313',
                color: '#F5F0F0'
              }}
            >
              Case study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceProjectCard;
