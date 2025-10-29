import { Calendar, MapPin, Home, Flower } from 'lucide-react';

const FactsSection = () => {
  const facts = [
    {
      icon: Calendar,
      label: 'Age',
      value: '29',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Born in',
      value: 'Munich',
      color: 'text-secondary'
    },
    {
      icon: Home,
      label: 'Lived in',
      value: 'Berlin',
      color: 'text-accent'
    },
    {
      icon: Flower,
      label: 'Hobby',
      value: 'Gardening & Ceramics',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Facts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div key={index} className="portfolio-card text-center group hover:scale-105">
              <div className="mb-4">
                <fact.icon className={`w-8 h-8 mx-auto ${fact.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{fact.label}</h3>
              <p className="text-muted-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;