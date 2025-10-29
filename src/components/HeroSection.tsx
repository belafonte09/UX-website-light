import profileImage from '@/assets/lisa-profile.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src={profileImage} 
            alt="Karin - UX/UI Designer" 
            className="hero-profile w-48 h-48 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            I would love to be a Designer at{' '}
            <span className="text-primary underline decoration-2 underline-offset-4">
              [Company Name]
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;