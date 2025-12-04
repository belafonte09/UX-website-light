import React from 'react';
import ProjectNavigation from '../components/ProjectNavigation';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <ProjectNavigation />
      <main className="min-h-screen bg-riso-black">
        <div className="max-w-[1280px] mx-auto">
          {/* Hero Section with Profile Image */}
          <div className="pt-28 pb-20 flex justify-center md:justify-end md:pr-6">
            {/* Vertical Container - Text above Image, Right Aligned */}
            <div className="flex flex-col items-center gap-[15px]">
              {/* Heading - above image */}
              <div className="flex flex-col items-center w-[248px]">
                <h1 className="text-[16px] font-sora font-bold text-blush leading-tight text-center">
                  HI,
                </h1>
                <h2 className="text-[16px] font-sora font-bold text-blush uppercase tracking-wide text-center">
                  I'M KARIN
                </h2>
              </div>

              {/* Profile Image Container */}
              <div className="w-[330px] h-[242px]">
                <img
                  src="/images/about page/about page photo.png"
                  alt="Karin Hoffmann"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 pt-16 pb-[932px]">
            <div className="max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
              {/* First Paragraph - Larger/Bold */}
              <p className="text-[32px] leading-[40px] font-work-sans font-semibold text-blush mb-[52px]">
                I'm a versatile designer skilled in research, prototyping, and testing. I collaborate across teams and help make UX a core part of product culture.
              </p>

              {/* Second Paragraph - Regular */}
              <p className="text-[25px] leading-[34px] font-work-sans font-normal text-blush mb-[52px]">
                My design journey began with a digital camera and Photoshop, sparking a lifelong curiosity about how visuals can solve problems. After studying Fashion Design, I found my true fit in Product Design—where creativity meets critical thinking. I turn complexity into clarity—whether researching user behavior, running usability tests, designing for launches, or leading design sprints. My biggest impact: embedding UX into product culture so teams think design-first and build better solutions. What's next? I'd love to bring that same energy to your team—as a hands-on designer and advocate for great UX.
              </p>

              {/* Decorative Star - Centered relative to text block */}
              <div className="flex justify-center pt-[52px]">
                <img
                  src="/images/visuals/star.svg"
                  alt="Decorative star"
                  className="w-[111px] h-[103px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
