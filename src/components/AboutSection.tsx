const AboutSection = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--riso-background))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-family-sora)',
                color: 'hsl(var(--riso-white))'
              }}
            >
              HI,<br />I'M KARIN
            </h1>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{
                fontFamily: 'var(--font-family-jost)',
                color: 'hsl(var(--riso-white))'
              }}
            >
              and I would love to bring my design skills to your company!
            </p>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex-shrink-0">
            <img
              src="/images/visuals/karin-profile-picture.png"
              alt="Karin's profile picture with decorative starburst design"
              className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;