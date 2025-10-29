import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ProjectCardProps {
  name: string;
  problem: string;
  solution: string;
  impact: Array<{ metric: string; before: string; after: string; }>;
  image?: string;
}

const ProjectCard = ({ name, problem, solution, impact, image = '/placeholder.svg' }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer mb-24"
      >
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Project Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex justify-end">
              <h3 className="text-2xl font-medium text-foreground">{name}</h3>
            </div>
            <div className="h-px w-full bg-border"></div>
          </div>

          {/* Project Image */}
          <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <div className="space-y-8 p-2">
            <h2 className="text-3xl font-bold text-foreground">{name}</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Problem Statement</h4>
                <p className="text-muted-foreground leading-relaxed">{problem}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Solution</h4>
                <p className="text-muted-foreground leading-relaxed">{solution}</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Impact</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Metric</th>
                      <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Before</th>
                      <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {impact.map((metric, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 px-4 text-base text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{metric.metric}</td>
                        <td className="py-3 px-4 text-base font-normal text-muted-foreground" style={{fontFamily: 'Jost, sans-serif'}}>{metric.before}</td>
                        <td className="py-3 px-4 text-base font-semibold text-primary" style={{fontFamily: 'Jost, sans-serif'}}>{metric.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;