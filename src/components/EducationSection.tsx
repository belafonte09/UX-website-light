import { BookOpen, Star } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      title: 'UX Design Bootcamp',
      provider: 'Designlab',
      description: 'Intensive 6-month program covering user research, wireframing, prototyping, and usability testing. Completed 4 real-world projects with industry mentorship.',
      keyLearning: 'User research is the foundation of great design—assumptions are the enemy of good UX.'
    },
    {
      title: 'Advanced Figma Masterclass',
      provider: 'Design+Code',
      description: 'Deep dive into advanced Figma features including auto-layout, components, variants, and collaborative workflows. Built comprehensive design systems.',
      keyLearning: 'A well-organized design system isn\'t just about consistency—it\'s about empowering your entire team to create better experiences.'
    },
    {
      title: 'Design Thinking Workshop',
      provider: 'IDEO',
      description: 'Two-day intensive workshop on human-centered design methodology. Learned to approach problems with empathy and systematic creative thinking.',
      keyLearning: 'The best solutions come from truly understanding the human behind the user persona.'
    },
    {
      title: 'UX Conference Berlin 2023',
      provider: 'UXBerlin',
      description: 'Attended talks on emerging UX trends, accessibility, and ethical design. Networked with 500+ design professionals from across Europe.',
      keyLearning: 'Accessibility isn\'t a constraint—it\'s a creativity catalyst that makes experiences better for everyone.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Events and Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div key={index} className="portfolio-card group hover:scale-105">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {item.provider}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="bg-secondary-light/50 border-l-4 border-secondary rounded-r-lg p-3">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary text-xs mb-1">
                      Key Learning:
                    </p>
                    <p className="text-card-foreground text-sm font-medium italic">
                      {item.keyLearning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;