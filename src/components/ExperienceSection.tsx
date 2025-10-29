import { Star } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Senior UX Designer',
      company: 'TechFlow Solutions',
      period: 'Jan 2022 – Present',
      description: 'Leading design for a B2B SaaS platform used by 50k+ users. Redesigned the core user experience, resulting in 40% increase in user engagement and 25% reduction in support tickets. Mentored junior designers and established design system standards.',
      keyLearning: 'The power of data-driven design decisions combined with user empathy creates the most impactful solutions.'
    },
    {
      role: 'UX/UI Designer',
      company: 'Digital Dynamics',
      period: 'Mar 2020 – Dec 2021',
      description: 'Designed mobile-first experiences for e-commerce clients. Collaborated with cross-functional teams to deliver 15+ projects. Conducted user research and usability testing to validate design decisions.',
      keyLearning: 'Mobile-first thinking isn\'t just about screen size—it\'s about understanding context and prioritizing what truly matters to users.'
    },
    {
      role: 'Junior UI Designer',
      company: 'Creative Minds Agency',
      period: 'Sep 2018 – Feb 2020',
      description: 'Started my UX journey creating websites and digital campaigns for local businesses. Learned the fundamentals of user-centered design while working closely with developers and clients.',
      keyLearning: 'Great design is invisible—when users can accomplish their goals effortlessly, you know you\'ve succeeded.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">What led me to be a UX Designer</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="portfolio-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm bg-white px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="bg-primary-light/50 border-l-4 border-primary rounded-r-lg p-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm mb-1">
                        Most important thing I learned:
                      </p>
                      <p className="text-card-foreground font-medium italic">
                        {exp.keyLearning}
                      </p>
                    </div>
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

export default ExperienceSection;