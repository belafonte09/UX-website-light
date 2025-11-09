import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectsDropdownMenu from './ProjectsDropdownMenu';

interface ProjectNavigationProps {
  showHomeLink?: boolean;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ showHomeLink = true }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="bg-greige py-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative px-4">
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center gap-1 mx-auto focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <div className="flex flex-col gap-1">
            <span className="block w-6 h-0.5 bg-foreground transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-foreground transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-foreground transition-all duration-300"></span>
          </div>
          {/* Menu Text */}
          <span className="text-[10px] text-foreground font-work-sans mt-0.5">Menu</span>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-20 mt-6 md:mt-0`}>
        {showHomeLink && (
          <a
            href="/"
            onClick={handleHomeClick}
            className="group relative inline-block text-riso-black transition-all duration-300 no-underline font-medium text-xl focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none cursor-pointer"
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              outline: 'none',
              border: 'none',
              boxShadow: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none'
            }}
          >
            Home
            <svg
              className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              style={{ height: '8px', top: 'calc(100% - 2px)' }}
            >
              <path
                d="M2,4 Q25,1 50,4 T98,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        )}
        <a
          href="https://docs.google.com/document/d/1a1HvTLUeWnqcciY6NEE_Kfmp7OAbA702/edit"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="group relative inline-block text-riso-black transition-all duration-300 no-underline font-medium text-xl focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none"
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          }}
        >
          Resume
          <svg
            className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
            style={{ height: '8px', top: 'calc(100% - 2px)' }}
          >
            <path
              d="M2,4 Q25,1 50,4 T98,4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
        <ProjectsDropdownMenu>
          <button
            className="group relative inline-block text-riso-black transition-all duration-300 no-underline font-medium text-xl focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none cursor-pointer bg-transparent border-none"
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              outline: 'none',
              boxShadow: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none'
            }}
          >
            Projects
            <svg
              className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              style={{ height: '8px', top: 'calc(100% - 2px)' }}
            >
              <path
                d="M2,4 Q25,1 50,4 T98,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </ProjectsDropdownMenu>
        <a
          href="/#about"
          onClick={handleAboutClick}
          className="group relative inline-block text-riso-black transition-all duration-300 no-underline font-medium text-xl focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none cursor-pointer"
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          }}
        >
          About
          <svg
            className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
            style={{ height: '8px', top: 'calc(100% - 2px)' }}
          >
            <path
              d="M2,4 Q25,1 50,4 T98,4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/karin-hoffmann"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="group relative inline-block text-riso-black transition-all duration-300 no-underline font-medium text-xl focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none"
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          }}
        >
          LinkedIn
          <svg
            className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
            style={{ height: '8px', top: 'calc(100% - 2px)' }}
          >
            <path
              d="M2,4 Q25,1 50,4 T98,4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavigation;