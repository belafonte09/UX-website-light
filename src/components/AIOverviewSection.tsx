import React from 'react';
import InfoListCard from './InfoListCard';
import ChallengeSolutionCard from './ChallengeSolutionCard';
import AIIntroImpactCard from './AIIntroImpactCard';

const AIOverviewSection: React.FC = () => {
  return (
    <div className="full-width-section py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#F5F0F0' }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-5xl md:text-6xl font-sora font-bold text-foreground leading-tight lg:leading-relaxed">
            How We Used AI to Simplify<br />
            Rule Creation
          </h1>
        </div>

        {/* Role & Stakeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InfoListCard
            title="My Role: Senior UX/UI Designer"
            items={[
              'Discovery',
              'User Research',
              'Testing',
              'Iterating',
              'Component Library updates',
              'Design-Dev Handoff',
              'Quality Assurance'
            ]}
          />
          <InfoListCard
            title="Stakeholders"
            items={[
              'Business Stakeholders',
              'Product Manager',
              'Engineering Team'
            ]}
          />
        </div>

        {/* Challenge & Solution Card */}
        <div className="mb-6">
          <ChallengeSolutionCard
            challenge={{
              title: 'The challenge',
              description: "Our Underwriting team needed a simpler way to manage partner data checks. Setting up these rules was slow and technical. First they had to write them in Excel, then rely on developers to translate everything into code the system could understand. The whole process could take up to two weeks. We set out to build an intuitive tool that made this process easy, fast, and far less dependent on developer time."
            }}
            solution={{
              title: 'The solution',
              description: 'We designed an AI-assisted tool that lets underwriters write rules in plain, natural language, just as they would describe them in conversation. The system then automatically translates those statements into our internal business logic, making rule setup possible for non-technical users.'
            }}
          />
        </div>

        {/* Impact Card */}
        <div>
          <AIIntroImpactCard
            items={[
              'We replaced two systems (Excel and JSON) with a single integrated platform, significantly reducing manual effort and errors.',
              'Empowered underwriters to manage their own rules — reducing developer workload and speeding up delivery.'
            ]}
          />
        </div>

        {/* Transition to Process */}
        <div className="mt-16 lg:mt-32">
          <h2 className="text-5xl md:text-6xl font-sora font-bold text-foreground leading-tight lg:leading-relaxed">
            Here's how we did it...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AIOverviewSection;