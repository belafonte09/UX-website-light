import { ArrowLeft, Check } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import RuleCreationPrototype from '@/components/prototype/RuleCreationPrototype';
import DunningLetterBeforeInteractive from '@/components/prototype/DunningLetterBeforeInteractive';
import DunningLetterAfterInteractive from '@/components/prototype/DunningLetterAfterInteractive';
import DunningLetterVisual from '@/components/prototype/DunningLetterVisual';
import SimpleArrowPrompt from '@/components/SimpleArrowPrompt';
import KeyInsightCard from '@/components/KeyInsightCard';
import NumberImpactCard from '@/components/NumberImpactCard';
import GoalCard from '@/components/GoalCard';
import ImpactCard from '@/components/ImpactCard';
import AIOverviewSection from '@/components/AIOverviewSection';
import AIChallengeSection from '@/components/AIChallengeSection';
import AIMarketResearchSection from '@/components/AIMarketResearchSection';
import AIIdeationSection from '@/components/AIIdeationSection';
import AIWireframesSection from '@/components/AIWireframesSection';
import AIUsabilityTestingSection from '@/components/AIUsabilityTestingSection';
import AIFinalUISection from '@/components/AIFinalUISection';
import AIImpactSection from '@/components/AIImpactSection';

interface ProjectDetailProps {
  projects: {
    [key: string]: Array<{
      name: string;
      date: string;
      problem: string;
      projectDetails?: {
        myRole: string[];
        stakeholders: string[];
        methodologies: string[];
        tools: string[];
        duration: string[];
      };
      solution?: string;
      impact: Array<{ metric: string; before: string; after: string; description?: string; }>;
      videoUrl?: string;
      hasInteractivePrototype?: boolean;
      hasAfterPrototype?: boolean;
      problems?: string[];
      solutions?: string[] | {
        title: string;
        figmaImprovements: {
          title: string;
          description: string;
          highlight: string;
        };
        handoverPractices: {
          title: string;
          rules: string[];
        };
        processSteps: {
          title: string;
          note: string;
          steps: string[];
        };
        additionalAgreements: string[];
      };
      challenges?: string[];
      marketResearch?: string | {
        title: string;
        description: string;
        findings: Array<{
          issue: string;
          description: string;
        }>;
        conclusion: string;
      };
      designSprint?: {
        title: string;
        description: string;
        outcomes: string[];
      };
      testingResults?: {
        title: string;
        description: string;
        usabilityIssues: Array<{
          topic: string;
          insight: string;
          action: string;
        }>;
        outOfScope: string;
      };
      prototypeVideoUrl?: string;
      visuals?: Array<{
        type: string;
        title: string;
        url: string;
      }>;
      relatedProjects?: Array<{
        name: string;
        company: string;
      }>;
      workshop?: {
        title: string;
        description: string;
        goals: string[];
      };
      outOfScope?: string[];
      learnings?: string[];
      image?: string;
      comingSoon?: boolean;
      // New modern layout properties
      overview?: {
        title: string;
        subtitle: string;
        description: string;
        keyPoints: string[];
        challenges: string[];
      };
      challenge?: {
        title: string;
        description: string;
        painPoints: Array<{
          title: string;
          description: string;
        }>;
      };
      goals?: {
        title: string;
        description: string;
        objectives: Array<{
          title: string;
          description: string;
        }>;
        success: string[];
      };
      myRole?: {
        title: string;
        description: string;
        responsibilities: string[];
        focus: string;
      };
      wireframes?: {
        title: string;
        description: string;
        explorations: string[];
        insights: string;
        imagePlaceholder: string;
      };
      testing?: {
        title: string;
        description: string;
        insights: Array<{
          finding: string;
          description: string;
        }>;
        improvements: string;
      };
      finalUI?: {
        title: string;
        description: string;
        features: string[];
        handoff: string;
        imagePlaceholder: string;
      };
      keyTakeaway?: {
        title: string;
        message: string;
        conclusion: string;
      };
      modernLayout?: boolean;
      abstractGraphics?: boolean;
      research?: {
        title: string;
        description: string;
        emailResearch?: {
          findings: string[];
          images: string[];
        };
        uxuiAudit?: {
          title: string;
          findings: string[];
          image: string;
        };
        qualitativeInterviews?: {
          title: string;
          insights: Array<{
            quote: string;
            author: string;
          }>;
        };
        keyInsightCards?: Array<{
          insight: string;
          update: string;
        }>;
        userJourney?: {
          title: string;
          description: string;
        };
        impactVsEffort?: {
          title: string;
          description: string;
        };
      };
      goals?: {
        title: string;
        description: string;
        objectives: Array<{
          title: string;
          description: string;
        }>;
      };
      emailUpdates?: {
        title: string;
        description: string;
        image: string;
        keyUpdates: {
          insight: string[];
          update: string;
        };
      };
      impactSummary?: {
        title: string;
        description: string;
        highlightCards: Array<{
          percentage: string;
          description: string;
        }>;
        kpiTable: Array<{
          kpi: string;
          before: string;
          after: string;
        }>;
        testimonial: {
          quote: string;
          author: string;
        };
      };
      finalSolution?: {
        title: string;
        description: string;
        improvements: string[];
      };
    }>;
  };
}

const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { company, projectName } = useParams();
  const navigate = useNavigate();
  const [showPrototypePrompt, setShowPrototypePrompt] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hidePrototypePrompt = () => {
    setShowPrototypePrompt(false);
  };

  // Auto-switch carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Find the project
  const project = company && projects[company]?.find(p => p.name === decodeURIComponent(projectName || ''));

  if (!project) {
    navigate('/404');
    return null;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-auto">
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 pt-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-riso-fuschia transition-colors duration-300 mb-12">
            <ArrowLeft className="w-8 h-8" />
            Back to Home
          </Link>

          {/* AI Project Sections - Modern Layout */}
          {project.name === "How we used AI to simplify Rule Creation" && (
            <div className="space-y-16 lg:space-y-32 -mx-4 md:-mx-16 lg:-mx-24 xl:-mx-32">
              <AIOverviewSection />
              <AIChallengeSection />
              <AIMarketResearchSection />
              <AIIdeationSection />
              <AIWireframesSection />
              <AIUsabilityTestingSection />
              <AIFinalUISection onAnyInteraction={hidePrototypePrompt} />
              <AIImpactSection />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;