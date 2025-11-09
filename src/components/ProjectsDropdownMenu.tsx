import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { projects } from '@/data/projects';

interface Project {
  name: string;
  pdfUrl?: string;
  [key: string]: unknown;
}

interface ProjectsDropdownMenuProps {
  children: React.ReactNode;
}

const ProjectsDropdownMenu: React.FC<ProjectsDropdownMenuProps> = ({ children }) => {
  const navigate = useNavigate();

  const selectedProjects = [
    { name: 'Simplifying Compliance Through Better Data Visibility', company: 'element', displayName: 'Designing a Dashboard for instant insights' },
    { name: 'Boosting Payment Success', company: 'element', displayName: 'Simplifying customer payments' },
    { name: 'How we used AI to simplify Rule Creation', company: 'element', displayName: 'How we used AI to simplify Rule Creation' },
    { name: 'How We Fixed our Design-Dev Communication Gap', company: 'element', displayName: 'Optimizing our Design-Dev communication' },
  ];

  const moreProjects = [
    { name: 'Mobile App Redesign', company: 'mello', displayName: 'Mobile App Redesign' },
    { name: 'UX/UI for a smarter bulk merge app', company: 'freelance', displayName: 'UX/UI for a smarter bulk merge app' },
    { name: 'Designing a foodsharing experience', company: 'freelance', displayName: 'Designing a foodsharing experience' },
  ];

  const handleProjectClick = (company: string, projectName: string) => {
    navigate(`/portfolio/${company}/${encodeURIComponent(projectName)}`);
  };

  const handleMoreWorkProjectClick = (company: string, projectName: string) => {
    const projectList = projects[company as keyof typeof projects];
    const project = projectList.find((p: Project) => p.name === projectName);
    if (project?.pdfUrl) {
      window.open(project.pdfUrl, '_blank');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white rounded-2xl border border-stroke shadow-md p-4 md:p-6 w-[calc(100vw-2rem)] md:w-auto md:min-w-[320px]"
        align="center"
      >
        <DropdownMenuLabel className="text-xs md:text-sm font-sora font-semibold text-foreground mb-2">
          Selected Projects
        </DropdownMenuLabel>
        {selectedProjects.map((project, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleProjectClick(project.company, project.name)}
            className="py-2.5 md:py-3 px-2 text-sm md:text-base font-work-sans text-foreground cursor-pointer hover:bg-blush hover:pl-3 transition-all duration-200 rounded-lg"
          >
            {project.displayName}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="my-4 bg-stroke" />

        <DropdownMenuLabel className="text-xs md:text-sm font-sora font-semibold text-foreground mb-2">
          More Work
        </DropdownMenuLabel>
        {moreProjects.map((project, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleMoreWorkProjectClick(project.company, project.name)}
            className="py-2.5 md:py-3 px-2 text-sm md:text-base font-work-sans text-foreground cursor-pointer hover:bg-blush hover:pl-3 transition-all duration-200 rounded-lg"
          >
            {project.displayName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectsDropdownMenu;
