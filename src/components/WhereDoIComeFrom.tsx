import React from 'react';
import ExperienceCard from './ExperienceCard';
import WavyUnderlineLink from './WavyUnderlineLink';
import AnimatedElementIcon from './AnimatedElementIcon';
import AnimatedMelloIcon from './AnimatedMelloIcon';
import AnimatedFreelanceIcon from './AnimatedFreelanceIcon';

const WhereDoIComeFrom: React.FC = () => {
  const experiences = [
    {
      title: "Senior UX/UI Designer at Element Insurance AG",
      duration: "2021 - 2025",
      description: [
        "Streamlined the UX-to-Dev handoff, ensuring faster and more accurate Figma file implementation.",
        "Organized and facilitated design sprints with Product Owners and Engineers to generate ideas and wireframes for the initial POC.",
        "Conducted stakeholder interviews to validate and iterate low-fidelity wireframes, enabling a smooth transition to high-fidelity designs and development.",
        "Led the adoption of a unified Design System, enhancing design consistency streamlined designer to developer handoff.",
        "Created prototypes for demos and usability testing, helping stakeholders visualize concepts and refine product ideas."
      ],
      keyLearning: "At Element, I discovered the importance of embracing technical and compliance constraints as creative challenges. I also learned that strong, trusting relationships across teams are the foundation of truly successful products."
    },
    {
      title: "UX/UI Designer at Mello",
      duration: "2020 - 2021",
      description: [
        "Established the user research discipline, resulting in a continuous cycle of user interviews and usability testing to inform product updates and new features.",
        "Designed customer surveys and conducted analysis to support hypotheses with quantitative data.",
        "Conducted competitor analysis to define business goals.",
        "Created wireframes and prototypes for usability testing, improving the user experience, retention, and MAU.",
        "Developed a style library of assets and designed the final UI for handover to developers."
      ],
      keyLearning: "I learned to embrace constructive feedback and guidance from my teammates, which ultimately helped us create a product that genuinely supports parents."
    },
    {
      title: "Freelance UX/UI Designer for a Bulk Merge app",
      duration: "2020",
      description: [
        "Analyzed backend technical constraints and designed an intuitive solution.",
        "Revised copywriting to improve system visibility and user satisfaction.",
        "Created a high-fidelity prototype with clear developer instructions, streamlining the handover process and facilitating rapid deployment."
      ],
      keyLearning: "Technical limitations pushed me to think creatively and design intuitive solutions that balanced great UX with minimal development effort."
    },
    {
      title: "Freelance UX/UI Designer for Apetit (Neighbourhood Foodsharing app)",
      duration: "2020",
      description: [
        "Redesigned a previous iteration of a website and app, focusing on usability, design principles, and UX/UI best practices, resulting in a high-quality prototype for an investment pitch."
      ],
      keyLearning: "Understanding the client's needs and recognizing their stage in the design process taught me how to align my goals as a designer to deliver effectively under tight timelines."
    }
  ];

  return (
    <div className="bg-greige rounded-2xl p-6 md:pt-[72px] md:pl-16 md:pb-[72px] md:pr-16 text-text">
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6">Where do I come from?</h1>

      {/* CV Button */}
      <p className="text-text mb-12">
        <WavyUnderlineLink href="/cv/karin-cv-full.pdf">View CV as PDF</WavyUnderlineLink>
      </p>

      {/* Experience Cards */}
      <div>
        {experiences.map((experience, index) => {
          let icon;
          if (index === 0) icon = <AnimatedElementIcon />;
          else if (index === 1) icon = <AnimatedMelloIcon />;
          else if (index === 2 || index === 3) icon = <AnimatedFreelanceIcon />;

          return (
            <ExperienceCard
              key={index}
              icon={icon}
              title={experience.title}
              duration={experience.duration}
              description={experience.description}
              keyLearning={experience.keyLearning}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhereDoIComeFrom;