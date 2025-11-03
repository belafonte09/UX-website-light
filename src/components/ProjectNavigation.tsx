import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectNavigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="bg-greige py-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-20 px-4">
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
        <a
          href="https://docs.google.com/document/d/1a1HvTLUeWnqcciY6NEE_Kfmp7OAbA702/edit"
          target="_blank"
          rel="noopener noreferrer"
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
        <a
          href="/#projects"
          onClick={handleProjectsClick}
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
        </a>
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
    </nav>
  );
};

export default ProjectNavigation;