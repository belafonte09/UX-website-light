import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MinimalProjectCard from '@/components/MinimalProjectCard';
import WavyNavigationTab from '@/components/WavyNavigationTab';
import { projects } from '@/data/projects';

const Portfolio = () => {
  const [selectedCompany, setSelectedCompany] = useState<keyof typeof projects>('element');
  const companies = [
    { key: 'element', label: 'Element' },
    { key: 'mello', label: 'Mello' },
    { key: 'freelance', label: 'Freelance' }
  ] as const;

  return (
    <div className="min-h-screen bg-riso-background">
      {/* Header */}
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-riso-white hover:text-riso-fuschia transition-colors duration-300 mb-12">
            <ArrowLeft className="w-8 h-8" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-riso-white mb-16 tracking-tight">
            Project Portfolio
          </h1>

          {/* Company Navigation Tabs */}
          <div className="flex justify-start gap-12 mb-16">
            {companies.map((company) => (
              <WavyNavigationTab
                key={company.key}
                isActive={selectedCompany === company.key}
                onClick={() => setSelectedCompany(company.key)}
                className="text-lg"
              >
                {company.label}
              </WavyNavigationTab>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Company Projects */}
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-32">
            {projects[selectedCompany].map((project, index) => (
              <MinimalProjectCard
                key={index}
                {...project}
                company={selectedCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;