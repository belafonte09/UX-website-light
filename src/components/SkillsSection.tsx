import { 
  Lightbulb, 
  Shuffle, 
  MousePointer, 
  Heart, 
  Figma, 
  Palette 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Experience',
      description: '6 years creating digital products',
      color: 'text-primary',
      bgColor: 'bg-primary-light'
    },
    {
      icon: Shuffle,
      title: 'Making complexity easier',
      description: 'Simplifying complex user journeys',
      color: 'text-secondary',
      bgColor: 'bg-secondary-light'
    },
    {
      icon: MousePointer,
      title: 'Love of interaction design',
      description: 'Crafting delightful micro-interactions',
      color: 'text-accent',
      bgColor: 'bg-accent-light'
    },
    {
      icon: Heart,
      title: 'Compassionate colleague',
      description: 'Empathetic team player',
      color: 'text-primary',
      bgColor: 'bg-primary-light'
    },
    {
      icon: Figma,
      title: 'Figma expertise',
      description: 'Advanced prototyping & design systems',
      color: 'text-secondary',
      bgColor: 'bg-secondary-light'
    },
    {
      icon: Palette,
      title: 'Love for Design',
      description: 'Passionate about beautiful experiences',
      color: 'text-accent',
      bgColor: 'bg-accent-light'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Here's what I can bring</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="portfolio-card group hover:scale-105">
              <div className={`w-16 h-16 ${skill.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2 text-lg">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;