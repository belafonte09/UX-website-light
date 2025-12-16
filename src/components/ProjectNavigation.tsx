import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Menu } from 'lucide-react';
import ProjectsDropdownMenu from './ProjectsDropdownMenu';

interface ProjectNavigationProps {
  showHomeLink?: boolean;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-citron w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="h-14 max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo - Left Side */}
        <Link
          to="/"
          className="text-black font-sora font-bold text-4xl leading-[50px] no-underline transition-all duration-300 hover:scale-105 hover:opacity-80 cursor-pointer"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          KH
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            to="/about"
            className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-base uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none cursor-pointer"
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitUserSelect: 'none',
              userSelect: 'none',
            }}
          >
            About
            <svg
              className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              style={{ height: '8px', top: 'calc(100% - 8px)' }}
            >
              <path
                d="M2,4 Q25,1 50,4 T98,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <ProjectsDropdownMenu>
            <button
              className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-base uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none cursor-pointer bg-transparent border-none"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitUserSelect: 'none',
                userSelect: 'none',
              }}
            >
              Projects
              <svg
                className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                style={{ height: '8px', top: 'calc(100% - 8px)' }}
              >
                <path
                  d="M2,4 Q25,1 50,4 T98,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </ProjectsDropdownMenu>

          <a
            href="https://drive.google.com/file/d/1u2e9nv7qHUgXFy9NmQrjfaeL5bdb2IiA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-base uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1 hover:bg-transparent select-none"
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitUserSelect: 'none',
              userSelect: 'none',
            }}
          >
            Resume
            <svg
              className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              style={{ height: '8px', top: 'calc(100% - 8px)' }}
            >
              <path
                d="M2,4 Q25,1 50,4 T98,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>

        {/* LinkedIn Icon - Right Side (Desktop) */}
        <a
          href="https://linkedin.com/in/karin-hoffmann"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-black transition-all duration-300 hover:scale-110 hover:opacity-80 cursor-pointer"
          aria-label="Visit LinkedIn profile"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <Linkedin size={32} strokeWidth={1.5} />
        </a>

        {/* Mobile Menu Button - Right Side */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black focus:outline-none transition-all duration-300 hover:scale-110 hover:opacity-80"
          aria-label="Toggle menu"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-citron border-t border-black/10">
          <div className="flex flex-col items-center gap-6 py-6">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-lg uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1"
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              About
              <svg
                className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                style={{ height: '8px', top: 'calc(100% - 8px)' }}
              >
                <path
                  d="M2,4 Q25,1 50,4 T98,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

            <ProjectsDropdownMenu>
              <button
                className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-lg uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1 bg-transparent border-none"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                Projects
                <svg
                  className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  style={{ height: '8px', top: 'calc(100% - 8px)' }}
                >
                  <path
                    d="M2,4 Q25,1 50,4 T98,4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </ProjectsDropdownMenu>

            <a
              href="https://drive.google.com/file/d/1u2e9nv7qHUgXFy9NmQrjfaeL5bdb2IiA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-lg uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1"
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Resume
              <svg
                className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                style={{ height: '8px', top: 'calc(100% - 8px)' }}
              >
                <path
                  d="M2,4 Q25,1 50,4 T98,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/karin-hoffmann"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="group relative inline-block text-black transition-all duration-300 no-underline font-normal text-lg uppercase tracking-wide focus:outline-none active:text-purple px-2 py-1"
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              LINKEDIN
              <svg
                className="absolute left-0 w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                style={{ height: '8px', top: 'calc(100% - 8px)' }}
              >
                <path
                  d="M2,4 Q25,1 50,4 T98,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ProjectNavigation;
