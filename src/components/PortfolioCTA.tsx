import { ExternalLink, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-light to-secondary-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Curious? See my full portfolio.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ready to explore how I can help your team create amazing user experiences? 
          Let's connect and discuss your next project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            to="/portfolio"
            className="btn-gradient inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Full Portfolio
          </Link>
          
          <a
            href="mailto:hello@karinhoffmann.design"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/karin-hoffmann" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:hello@karinhoffmann.design"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            hello@karinhoffmann.design
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            Designed with ❤️ using modern web technologies • © 2024 Karin Designer
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;