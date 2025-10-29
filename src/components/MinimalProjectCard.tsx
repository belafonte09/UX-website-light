import { useNavigate } from 'react-router-dom';
import DunningLetterVisual from './prototype/DunningLetterVisual';
import RuleCreationMacVisual from './prototype/RuleCreationMacVisual';

interface ProjectCardProps {
  name: string;
  date: string;
  problem: string;
  solution?: string;
  impact: Array<{ metric: string; before: string; after: string; }>;
  image?: string;
  videoUrl?: string;
  videoType?: string;
  problems?: string[];
  solutions?: string[];
  company: string;
  pdfUrl?: string;
}

const MinimalProjectCard = ({
  name,
  date,
  image = '/placeholder.svg',
  company,
  pdfUrl
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleImageClick = (e: React.MouseEvent) => {
    if (pdfUrl) {
      e.stopPropagation();
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <div
      onClick={() => window.open(`/portfolio/${company}/${encodeURIComponent(name)}`, '_blank')}
      className="group cursor-pointer mb-24 hover:opacity-80 transition-opacity duration-300"
    >
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Project Info */}
        <div className="w-full md:w-2/5">
          <div className="group inline-block">
            <h3 className={`text-3xl font-semibold tracking-tight mb-2 text-riso-white transition-colors max-w-[310px] ${
              name === "How we used AI to simplify Rule Creation"
                ? "group-hover:text-riso-green"
                : name === "How We Fixed our Design-Dev Communication Gap"
                ? "group-hover:text-riso-purple"
                : name === "Mobile App Redesign"
                ? "group-hover:text-riso-green"
                : name === "UX/UI for a smarter bulk merge app"
                ? "group-hover:text-riso-pink"
                : name === "Designing a foodsharing experience"
                ? "group-hover:text-riso-green"
                : name === "Boosting Payment Success"
                ? "group-hover:text-riso-pink"
                : name === "Data Visualization Platform"
                ? "group-hover:text-riso-blue"
                : "group-hover:text-riso-blue"
            }`}>{name}</h3>
            <p className="text-sm text-riso-white mb-4">{date}</p>
            <div className="relative w-32 h-2">
              <svg
                className="absolute left-0 top-0 w-full overflow-visible"
                viewBox="0 0 128 8"
                preserveAspectRatio="none"
                style={{ height: '8px' }}
              >
                <path
                  d="M0,4 L128,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className={`project-underline text-riso-white transition-all duration-200 ease-in-out ${
                    name === "UX/UI for a smarter bulk merge app" ? "bulk-merge-line" : ""
                  }`}
                  style={{
                    '--wavy-path': 'path("M0,4 Q32,1 64,4 T128,4")',
                    '--wavy-color': name === "How we used AI to simplify Rule Creation"
                      ? "hsl(var(--riso-green))"
                      : name === "How We Fixed our Design-Dev Communication Gap"
                      ? "hsl(var(--riso-purple))"
                      : name === "Mobile App Redesign"
                      ? "hsl(var(--riso-green))"
                      : name === "UX/UI for a smarter bulk merge app"
                      ? "hsl(var(--riso-pink))"
                      : name === "Designing a foodsharing experience"
                      ? "hsl(var(--riso-green))"
                      : name === "Boosting Payment Success"
                      ? "hsl(var(--riso-pink))"
                      : name === "Data Visualization Platform"
                      ? "hsl(var(--riso-blue))"
                      : "hsl(var(--riso-blue))"
                  } as React.CSSProperties}
                />
              </svg>

              <style jsx>{`
                .group:hover .project-underline {
                  d: var(--wavy-path);
                  stroke: var(--wavy-color);
                }
                .group:hover .bulk-merge-line {
                  d: path("M0,4 Q32,1 64,4 T128,4");
                  stroke: hsl(var(--riso-pink)) !important;
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="w-full md:w-[652px] h-[280px] md:h-[405px] relative overflow-hidden bg-riso-background rounded-lg">
          {name === "Boosting Payment Success" ? (
            <>
              <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/mockups/mockup-payment.png"
                  alt="Payment success mockup showing the improved solution"
                  className="w-full h-full object-cover rounded-lg"
                  key="payment-mockup-high-res"
                />
              </div>
              <img
                src="/images/mockups/Figma icon.png"
                alt="Figma"
                className="absolute top-4 right-4 w-6 h-6 z-10 hidden md:block"
              />
            </>
          ) : name === "How we used AI to simplify Rule Creation" ? (
            <>
              <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/mockups/mockup-ai.png"
                  alt="AI Rule Creation mockup showing the simplified interface"
                  className="w-full h-full object-cover rounded-lg"
                  key="ai-mockup-high-res"
                />
              </div>
              <img
                src="/images/mockups/Figma icon.png"
                alt="Figma"
                className="absolute top-4 right-4 w-6 h-6 z-10 hidden md:block"
              />
            </>
          ) : name === "How We Fixed our Design-Dev Communication Gap" ? (
            <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/mockups/mockup-dev process.png"
                alt="Design-Dev Communication Gap mockup showing the improved process"
                className="w-full h-full object-cover rounded-lg"
                key="dev-process-mockup-high-res"
              />
            </div>
          ) : name === "Mobile App Redesign" ? (
            <div
              className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onClick={handleImageClick}
              title="Click to view PDF"
            >
              <img
                src="/images/mockups/mello-mobile-app-first-page.png"
                alt="Mobile App Redesign - Click to view PDF"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ) : company === "freelance" && pdfUrl ? (
            <div
              className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onClick={handleImageClick}
              title="Click to view PDF"
            >
              <img
                src={name === "UX/UI for a smarter bulk merge app"
                  ? "/images/projects/freelance/bulk-merge-preview.png"
                  : name === "Designing a foodsharing experience"
                  ? "/images/projects/freelance/appetit-preview.png"
                  : image}
                alt={`${name} - Click to view PDF`}
                className="w-full h-full object-cover rounded-lg"
                key={name} // Force re-render when image changes
              />
            </div>
          ) : name === "Data Visualization Platform" ? (
            <>
              <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/mockups/mockup-validation dashboard.png"
                  alt="Data Visualization Platform dashboard mockup"
                  className="w-full h-full object-cover rounded-lg"
                  key="dashboard-mockup-high-res"
                />
              </div>
              <img
                src="/images/mockups/Figma icon.png"
                alt="Figma"
                className="absolute top-4 right-4 w-6 h-6 z-10 hidden md:block"
              />
            </>
          ) : (
            <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <img
                src={image}
                alt={name}
                width={652}
                height={405}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalProjectCard;