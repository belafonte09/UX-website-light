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

          <div className="space-y-8">
            {!project.modernLayout && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-sora">
                  {project.name}
                </h1>
                {project.date && (
                  <p className="text-muted-foreground text-lg mb-6">{project.date}</p>
                )}
              </div>
            )}

            {project.comingSoon ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Coming soon!</h2>
                <p className="text-muted-foreground">This case study is currently in development. Check back soon for more details!</p>
              </div>
            ) : project.modernLayout ? (
              // Modern Layout for Data Visualization Platform
              <>
              <div className="space-y-16 lg:space-y-32">
                {/* New Clean Layout matching screenshot */}
                {project.overview && (
                  <div className="max-w-4xl mx-auto">
                    {/* Main Title */}
                    <div className="mb-16">
                      <h1 className="text-5xl md:text-6xl font-sora font-bold text-foreground leading-tight lg:leading-relaxed mb-8">
                        {project.name === "Simplifying Compliance Through Better Data Visibility" ? (
                          <>Simplifying Compliance<br />Through Better Data Visibility</>
                        ) : project.overview.title && project.overview.subtitle ? (
                          <>{project.overview.title}<br /><span className="text-4xl md:text-5xl">{project.overview.subtitle}</span></>
                        ) : (
                          project.overview.title || project.name
                        )}
                      </h1>
                    </div>

                    {/* Overview Section */}
                    <div className="mb-16">
                      <h2 className="text-3xl font-sora font-bold text-foreground mb-8 lg:mb-16">
                        Overview
                      </h2>

                      <div className="space-y-8 lg:space-y-16">
                        <p className="text-lg font-work-sans text-foreground leading-relaxed">
                          {project.name === "Simplifying Compliance Through Better Data Visibility" ? (
                            <>
                              In the world of insurance, compliance is everything. Our company works with{' '}
                              <span className="font-bold">many distribution partners</span> — each selling policies to customers on our behalf.
                              To ensure every policy sold follows strict rules and regulations, our underwriting
                              team must review a document called a <span className="font-bold">BDX file (Bordereaux file)</span>.
                            </>
                          ) : (
                            project.overview.description
                          )}
                        </p>

                        {/* Info Card Component */}
                        <div className="w-full">
                          <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                            <h3 className="text-card-heading text-purple mb-6">
                              {project.name === "Simplifying Compliance Through Better Data Visibility"
                                ? "What is a BDX file?"
                                : "Key Challenge"}
                            </h3>
                            <p className="text-card-body text-foreground leading-relaxed">
                              {project.name === "Simplifying Compliance Through Better Data Visibility" ? (
                                <>
                                  Think of it as a giant spreadsheet sent by each partner every month. It
                                  lists every policy they sold, who bought it, when, for how much, and under
                                  what terms.
                                </>
                              ) : (
                                <>
                                  {project.overview.keyPoints && project.overview.keyPoints.map((point, index) => (
                                    <div key={index} className="mb-3 last:mb-0">
                                      <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                                        <span className="text-card-body text-foreground">{point}</span>
                                      </div>
                                    </div>
                                  ))}
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* The Challenge Section */}
                {project.challenge && (
                  <div className="full-width-section bg-blush py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <div className="max-w-4xl mx-auto px-4">
                      <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                        {project.challenge.title}
                      </h2>

                      <div className="space-y-12 lg:space-y-24">
                        <p className="text-lg font-work-sans text-foreground leading-relaxed">
                          {project.challenge.description}
                        </p>

                        {/* Pain Points card */}
                        {project.challenge.painPoints && (
                          <div className="w-full">
                            <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                              <h3 className="text-card-heading text-pink mb-6">
                                Pain Points
                              </h3>
                              <div className="space-y-4">
                                {project.challenge.painPoints.map((painPoint, index) => (
                                  <div key={index} className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-pink rounded-full flex-shrink-0 mt-2.5"></div>
                                    <div className="text-card-body text-foreground">
                                      <span className="font-semibold">{painPoint.title}:</span> {painPoint.description}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Success Metrics card */}
                        {project.challenge.successMetrics && (
                          <div className="w-full">
                            <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                              <h3 className="text-card-heading text-blue-600 mb-6">
                                Success Metrics
                              </h3>
                              <div className="space-y-4">
                                {project.challenge.successMetrics.map((metric, index) => (
                                  <div key={index} className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2.5"></div>
                                    <span className="text-card-body text-foreground">{metric}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Quote - different for each project */}
                        <div className="w-full">
                          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
                            <p className={`text-quote ${project.name === "Simplifying Compliance Through Better Data Visibility" ? "text-pink" : "text-blue-600"} italic max-w-5xl mx-auto`}>
                              <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>
                              {project.name === "Simplifying Compliance Through Better Data Visibility" ? (
                                <>Our underwriting (UW) team, the people responsible for assessing
                                and approving insurance risks, needed a <span className="font-bold text-pink">BETTER</span> way to handle this</>
                              ) : project.challenge.quote ? (
                                <>We keep getting emails from customers saying they don't understand what they owe or how to pay. These reminders are <span className="font-bold text-blue-600">confusing</span>, and we end up handling a lot of avoidable support tickets.</>
                              ) : (
                                <>Our customers needed a <span className="font-bold text-pink">clearer</span> and more <span className="font-bold text-pink">actionable</span> way to understand their payment obligations</>
                              )}
                              <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Research Section */}
                {project.research && (
                  <div className="full-width-section bg-white py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <div className="max-w-4xl mx-auto px-4">
                      <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                        {project.research.title}
                      </h2>

                      <div className="space-y-16 lg:space-y-20">
                        <p className="text-lg md:text-[22px] font-work-sans text-foreground leading-relaxed">
                          {project.research.description}
                        </p>

                        {/* Email Research Section */}
                        {project.research.emailResearch && (
                          <>
                            {/* Email Research Image 1 */}
                            <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
                              <img
                                src={project.research.emailResearch.images[0]}
                                alt="Email Research Analysis 1"
                                className="w-full h-auto"
                              />
                            </div>

                            {/* Email Research Image 2 */}
                            <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
                              <img
                                src={project.research.emailResearch.images[1]}
                                alt="Email Research Analysis 2"
                                className="w-full h-auto"
                              />
                            </div>

                            {/* Key Findings */}
                            <div className="w-full">
                              <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                                <h3 className="text-card-heading text-blue-600 mb-6">
                                  Key Findings
                                </h3>
                                <div className="space-y-4">
                                  {project.research.emailResearch.findings.map((finding, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2.5"></div>
                                      <span className="text-card-body text-foreground">{finding}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        )}


                        {/* UX/UI Audit of Current Email */}
                        {project.research.uxuiAudit && (
                          <div className="mb-16">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                              {project.research.uxuiAudit.title}
                            </h4>

                            {/* UX/UI Audit Image - same size as email research images */}
                            <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[350px]">
                              <img
                                src={project.research.uxuiAudit.image}
                                alt="UX/UI Audit of Current Email"
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        )}

                        {/* Qualitative Interviews */}
                        {project.research.qualitativeInterviews && (
                          <div className="mb-16">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                              {project.research.qualitativeInterviews.title}
                            </h4>

                            {/* Individual Interview Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {project.research.qualitativeInterviews.insights.map((insight, index) => {
                                const avatarImages = [
                                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
                                  "https://images.unsplash.com/photo-1494790108755-2616b612b64c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
                                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                                ];
                                return (
                                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                                      <img
                                        src={avatarImages[index]}
                                        alt={`${insight.author} portrait`}
                                        className="w-full h-full object-cover object-center"
                                      />
                                    </div>
                                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                                      "{insight.quote}"
                                    </blockquote>
                                    <cite className="text-sm text-gray-600 font-medium text-center block">
                                      - {insight.author}
                                    </cite>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Key Insights */}
                        {project.research.keyInsightCards && (
                          <div className="space-y-8">
                            {project.research.keyInsightCards.map((insightCard, index) => (
                              <KeyInsightCard
                                key={index}
                                insight={insightCard.insight}
                                update={insightCard.update}
                                className="mb-8"
                              />
                            ))}
                          </div>
                        )}

                        {/* User Journey Map */}
                        {project.research.userJourney && (
                          <div className="mb-16">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                              {project.research.userJourney.title}
                            </h4>

                            {/* User Journey Map Carousel */}
                            <div className="mb-6">
                              <div className="relative max-w-4xl mx-auto">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src={`/Case Studies/Boosting Payment Success/Journey map ${currentImageIndex + 1}.png`}
                                    alt={`User Journey Map ${currentImageIndex + 1}`}
                                    className="w-full h-auto transition-opacity duration-500"
                                  />
                                </div>
                                {/* Dots indicator */}
                                <div className="flex justify-center mt-4 space-x-2">
                                  {[0, 1].map((index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentImageIndex(index)}
                                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                        currentImageIndex === index
                                          ? 'bg-gray-300 hover:bg-gray-400'
                                          : 'bg-gray-300 hover:bg-gray-400'
                                      }`}
                                      style={currentImageIndex === index ? { backgroundColor: '#E36785' } : {}}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                              {project.research.userJourney.description}
                            </p>
                          </div>
                        )}

                        {/* Impact vs Effort */}
                        {project.research.impactVsEffort && (
                          <div className="mb-16">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                              {project.research.impactVsEffort.title}
                            </h4>

                            <p className="text-muted-foreground leading-relaxed mb-8">
                              {project.research.impactVsEffort.description}
                            </p>

                            <div className="max-w-4xl mx-auto">
                              <img
                                src="/Case Studies/Boosting Payment Success/Opportunity areas.jpg"
                                alt="Impact vs Effort Analysis - Opportunity Areas"
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Email Updates Section */}
                {project.emailUpdates && (
                  <div className="full-width-section py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#ECF1F9' }}>
                    <div className="max-w-4xl mx-auto px-4">
                      <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                        {project.emailUpdates.title}
                      </h2>

                      <div className="space-y-16 lg:space-y-20">
                        <p className="text-lg md:text-[22px] font-work-sans text-foreground leading-relaxed">
                          {project.emailUpdates.description}
                        </p>

                        {/* Email Wireframe Image */}
                        <div className="w-full">
                          <img
                            src={project.emailUpdates.image}
                            alt="Email Updates Wireframe"
                            className="w-full h-auto"
                          />
                        </div>

                        {/* Key Updates Card - same style as Key Findings */}
                        {project.emailUpdates.keyUpdates && (
                          <div className="w-full">
                            <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                              <h3 className="text-card-heading text-blue-600 mb-6">
                                Key updates
                              </h3>
                              <div className="space-y-4">
                                {project.emailUpdates.keyUpdates.insight.map((point, index) => (
                                  <div key={index} className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2.5"></div>
                                    <span className="text-card-body text-foreground">{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}



                {/* Impact Summary Section */}
                {project.impactSummary && (
                  <div className="full-width-section bg-white py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <div className="max-w-4xl mx-auto px-4">
                      <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                        {project.impactSummary.title}
                      </h2>

                      <div className="space-y-16 lg:space-y-20">
                        {/* Description */}
                        <p className="text-lg md:text-[22px] font-work-sans text-foreground leading-relaxed">
                          {project.impactSummary.description.split('significantly easier').map((part, index) =>
                            index === 0 ? part : (
                              <span key={index}>
                                <strong>significantly easier</strong>{part}
                              </span>
                            )
                          )}
                        </p>

                        {/* Number Impact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                          {project.impactSummary.highlightCards.map((card, index) => (
                            <NumberImpactCard
                              key={index}
                              percentage={card.percentage}
                              description={card.description}
                            />
                          ))}
                        </div>

                        {/* KPI Table */}
                        <div className="w-full">
                          <div className="bg-white border border-riso-blue rounded-2xl p-8 overflow-hidden">
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b border-riso-blue">
                                    <th className="text-left py-4 px-2 text-[20px] font-mono text-riso-blue font-bold">
                                      KPI
                                    </th>
                                    <th className="text-left py-4 px-2 text-[20px] font-mono text-riso-blue font-bold">
                                      Before
                                    </th>
                                    <th className="text-left py-4 px-2 text-[20px] font-mono text-riso-blue font-bold">
                                      After
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {project.impactSummary.kpiTable.map((row, index) => (
                                    <tr key={index} className="border-b border-riso-blue last:border-b-0">
                                      <td className="py-4 px-2 text-base font-work-sans text-foreground">
                                        {row.kpi}
                                      </td>
                                      <td className="py-4 px-2 text-base font-work-sans text-foreground">
                                        {row.before}
                                      </td>
                                      <td className="py-4 px-2 text-base font-work-sans text-foreground">
                                        {row.after}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="text-center space-y-6">
                          <blockquote className="text-quote text-riso-blue italic max-w-5xl mx-auto">
                            <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>{project.impactSummary.testimonial.quote}<span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
                          </blockquote>
                          <cite className="text-2xl font-work-sans text-riso-blue text-center block">
                            {project.impactSummary.testimonial.author}
                          </cite>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

{/* Market Research Section (for Compliance) */}
                {project.name === "Simplifying Compliance Through Better Data Visibility" && (
                <div className="py-8 lg:pb-32">
                  <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                    Market Research
                  </h2>

                  <div className="space-y-12 lg:space-y-24">
                    <p className="text-lg font-work-sans text-foreground leading-relaxed">
                      Our first step was to see if existing software could solve this for us. We
                      explored several compliance and data-validation tools available in the
                      insurance industry.
                    </p>

                    {/* Findings card */}
                    <div className="w-full">
                      <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                        <h3 className="text-card-heading text-purple mb-6">
                          But here's what we found
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                            <span className="text-card-body text-foreground leading-relaxed">They required heavy technical setup and maintenance</span>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                            <span className="text-card-body text-foreground leading-relaxed">The user experience was not built for underwriters, it was built for IT people</span>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                            <span className="text-card-body text-foreground leading-relaxed">It would be more expensive than building our own tool</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Market Research Visual */}
                    <div className="w-full">
                      <div className="bg-blush rounded-2xl p-12 text-center">
                        <div className="max-w-3xl mx-auto">
                          <img
                            src="/Case Studies/Compliance/case-study-compliance-visual-market.png"
                            alt="Market research tools comparison showing existing solutions"
                            className="w-full h-auto rounded-lg shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Conclusion quote */}
                    <div className="w-full">
                      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
                        <p className="text-quote text-purple italic max-w-5xl mx-auto">
                          <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>We decided to build our own internal solution, one that fit our exact
                          workflow and made data validation as straightforward as possible.<span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                )}

                {/* User Journey Section */}
                {project.name !== "Boosting Payment Success" && (
                <div className="full-width-section bg-blush py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                      User Journey
                    </h2>

                    <div className="space-y-12 lg:space-y-24">
                      <p className="text-lg font-work-sans text-foreground leading-relaxed">
                        Sitting together with the Underwriter and Product Owner, we drafted a User
                        Journey Map and discovered together the categories we would need in the
                        Compliance Reporting Table.
                      </p>

                      {/* User Journey Visual */}
                      <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[250px]">
                        <img
                          src="/Case Studies/Compliance/case-study-visuals-compliance-user-journey.png"
                          alt="User journey map showing the compliance workflow from start to finish"
                          className="w-full h-auto rounded-lg shadow-sm"
                        />
                      </div>

                      {/* How Might We Card */}
                      <div className="w-full">
                        <div className="bg-white border border-stroke rounded-2xl p-8 shadow-sm">
                          <h3 className="text-card-heading text-purple mb-6">
                            How Might We...
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                              <span className="text-card-body text-foreground leading-relaxed">...decide which columns from the Bordereaux (BDX) should be visible to give underwriters the right context without overwhelming them?</span>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                              <span className="text-card-body text-foreground leading-relaxed">...allow underwriters to view the full policy line when needed without cluttering the main interface?</span>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                              <span className="text-card-body text-foreground leading-relaxed">...highlight errors and violations clearly so they can be identified and acted on quickly?</span>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0 mt-2.5"></div>
                              <span className="text-card-body text-foreground leading-relaxed">...integrate CRM-like features thoughtfully to help users manage, assign, or follow up on violations efficiently?</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wireframes Subsection */}
                      <div className="w-full">
                        <h3 className="text-2xl font-sora font-bold text-foreground mb-8 lg:mb-12">
                          Wireframes
                        </h3>

                        <div className="space-y-8 lg:space-y-12">
                          <p className="text-lg font-work-sans text-foreground leading-relaxed">
                            I began with low-fidelity wireframes to define what information and
                            interactions mattered most. My focus was on clarity and usability.
                          </p>

                          {/* Wireframe Visual */}
                          <div className="w-full">
                            <img
                              src="/Case Studies/Compliance/Wireframe-1.png?v=2"
                              alt="Low-fidelity wireframe showing the main compliance interface layout"
                              className="w-full h-auto rounded-lg shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Conclusion Quote */}
                      <div className="w-full">
                        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
                          <p className="text-quote text-pink italic max-w-5xl mx-auto">
                            <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>These explorations set the foundation for testing and refining the
                            user experience.<span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}







                {/* Testing & Iteration Section */}
                {project.name !== "Boosting Payment Success" && (
                <div className="full-width-section bg-butter py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                      Testing & Iteration
                    </h2>

                    <div className="space-y-16 lg:space-y-20">
                      {/* Introduction paragraph */}
                      <p className="text-[22px] font-work-sans font-normal text-foreground leading-relaxed">
                        In my experience, testing with extremely <span className="font-bold">low-fidelity wireframes</span> works
                        best. It helps users focus on the right tone — users immediately understand that what
                        they're seeing is a work in progress. They <span className="font-bold">feel comfortable giving honest
                        feedback</span>, suggesting changes, and exploring new ideas.
                      </p>

                      <p className="text-[22px] font-work-sans font-normal text-foreground leading-relaxed">
                        For this project, I used <span className="font-bold">Balsamiq</span> to create quick, sketch-style wireframes
                        that looked <span className="font-bold">intentionally rough</span>. This made the sessions feel more
                        collaborative and focused on the flow and logic, rather than visual design.
                      </p>

                      {/* Key Insight Card 1 */}
                      <KeyInsightCard
                        insight='Stakeholders realized they needed a way to view the full policy "line" while checking violations <strong>to understand the context</strong> behind each issue.'
                        update='I added a "View Line" button that opens the entire policy and highlights the affected fields for quick review.'
                      />

                      {/* Key Insight Image 1 */}
                      <div className="w-full">
                        <img
                          src="/Case Studies/Compliance/key insight visual 1.png"
                          alt="Key Insight Visual 1"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      {/* Separator line */}
                      <div className="border-t border-stroke"></div>

                      {/* Key Insight Card 2 */}
                      <KeyInsightCard
                        insight='Users wanted to <strong>see patterns</strong> in violations across different policies to identify systemic issues rather than just individual violations.'
                        update='I designed a dashboard view that groups violations by type and frequency, allowing users to spot trends and recurring problems quickly.'
                      />

                      {/* Key Insight Image 2 */}
                      <div className="w-full">
                        <img
                          src="/Case Studies/Compliance/Key insight visual 2.png"
                          alt="Key Insight Visual 2"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      {/* Separator line */}
                      <div className="border-t border-stroke"></div>

                      {/* Key Insight Card 3 */}
                      <KeyInsightCard
                        insight='Compliance officers needed <strong>quick filtering</strong> capabilities to focus on high-priority violations during time-sensitive reviews.'
                        update='I implemented smart filters with severity levels and priority tags, plus a quick-access toolbar for the most common filter combinations.'
                      />

                      {/* Key Insight Image 3 */}
                      <div className="w-full">
                        <img
                          src="/Case Studies/Compliance/Key insight visual 3.png"
                          alt="Key Insight Visual 3"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      {/* Final Quote - Full width spillover */}
                      <div className="w-full">
                        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 lg:px-16 py-8 text-center">
                          <p className="text-quote text-pink italic max-w-5xl mx-auto">
                            <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>Each round of feedback led to refinements in navigation, filters, and
                            table layouts. We also introduced visual cues like color-coded
                            statuses (orange = warning) to make complex data instantly readable.<span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {/* Final UI Section */}
                {project.name !== "Boosting Payment Success" && (
                <div className="full-width-section bg-white py-8 lg:pt-32 lg:pb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-sora font-bold text-foreground mb-12 lg:mb-24">
                      Final UI
                    </h2>

                    <div className="space-y-16 lg:space-y-20">
                      {/* Introduction paragraph */}
                      <p className="text-lg md:text-[22px] font-work-sans text-foreground leading-relaxed">
                        Through continuous testing and iteration, the final UI evolved into a tool that
                        truly supports how underwriters work. They can see the violations, the policy
                        line related to it, and assign a task to a team member.
                      </p>

                      {/* Final UI Video */}
                      <div className="w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:px-[250px]">
                        <div className="bg-white rounded-lg p-4 md:p-6">
                          <div className="bg-card rounded-lg overflow-hidden">
                            <video
                              controls
                              preload="metadata"
                              className="w-full h-auto aspect-video object-contain p-4"
                              playsInline
                            >
                              <source src="/videos/compliance-validation-final-ui.mov" type="video/quicktime" />
                              <source src="/videos/compliance-validation-final-ui.mov" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div>

                      {/* Impact Section */}
                      <div className="space-y-12">
                        <h3 className="text-3xl font-sora font-bold text-foreground">
                          Impact
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ImpactCard variant="reduced-work" />
                          <ImpactCard variant="faster-close" />
                          <ImpactCard variant="data-accuracy" />
                          <ImpactCard variant="empowered-users" />
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="text-center space-y-6">
                        <blockquote className="text-quote text-purple italic max-w-5xl mx-auto">
                          <span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&ldquo;' }}></span>Before, I had to wait for IT to clean and upload data before I could
                          even start reviewing. Now, the file is uploaded automatically and I
                          get the results in minutes.<span className="text-[1.2em]" dangerouslySetInnerHTML={{ __html: '&rdquo;' }}></span>
                        </blockquote>
                        <cite className="text-2xl font-work-sans text-purple text-center block">
                          - Senior Underwriter
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
              </>
            ) : (
              <div className="space-y-16 lg:space-y-32">
                <div>
                  <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                    Problem Statement
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Project Details Section */}
                {project.projectDetails && (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
                    {/* My Role */}
                    <div className="pt-4 md:pt-0 md:pr-4">
                      <h5 className="font-bold text-sm text-riso-fuschia uppercase tracking-wide mb-3">
                        My Role
                      </h5>
                      <ul className="space-y-1">
                        {project.projectDetails.myRole.map((role, index) => (
                          <li key={index} className="text-muted-foreground text-sm">
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stakeholders */}
                    <div className="pt-4 md:pt-0 md:pl-4 md:pr-4">
                      <h5 className="font-bold text-sm text-riso-fuschia uppercase tracking-wide mb-3">
                        Stakeholders
                      </h5>
                      <ul className="space-y-1">
                        {project.projectDetails.stakeholders.map((stakeholder, index) => (
                          <li key={index} className="text-muted-foreground text-sm">
                            {stakeholder}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Methodologies */}
                    <div className="pt-4 md:pt-0 md:pl-4 md:pr-4">
                      <h5 className="font-bold text-sm text-riso-fuschia uppercase tracking-wide mb-3">
                        Methodologies
                      </h5>
                      <ul className="space-y-1">
                        {project.projectDetails.methodologies.map((methodology, index) => (
                          <li key={index} className="text-muted-foreground text-sm whitespace-nowrap">
                            {methodology}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="pt-4 md:pt-0 md:pl-4 md:pr-4">
                      <h5 className="font-bold text-sm text-riso-fuschia uppercase tracking-wide mb-3">
                        Tools
                      </h5>
                      <ul className="space-y-1">
                        {project.projectDetails.tools.map((tool, index) => (
                          <li key={index} className="text-muted-foreground text-sm">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Duration */}
                    <div className="pt-4 md:pt-0 md:pl-4">
                      <h5 className="font-bold text-sm text-riso-fuschia uppercase tracking-wide mb-3">
                        Duration
                      </h5>
                      <ul className="space-y-1">
                        {project.projectDetails.duration.map((duration, index) => (
                          <li key={index} className="text-muted-foreground text-sm">
                            {duration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Solution Section */}
                {project.solution && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.solution}
                    </p>

                    {/* Business Outcomes Image for Boosting Payment Success */}
                    {project.name === "Boosting Payment Success" && (
                      <div className="mt-8">
                        <img
                          src="/Case Studies/Boosting Payment Success/Business Outcomes Dunning.jpg"
                          alt="Business Outcomes - Efficiency and Self-service focus areas"
                          className="w-full mx-auto rounded-lg "
                        />

                        {/* Research Section */}
                        <div className="mt-16 bg-gray-50" style={{marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)', paddingRight: 'calc(50vw - 50%)', paddingTop: '3rem', paddingBottom: '3rem'}}>
                          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-sora text-center">
                              <span className="border-b-4 border-riso-fuschia pb-2">Research</span>
                            </h3>

                            {/* Competitor Analysis */}
                            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-6">
                              Competitor Analysis
                            </h4>

                            {/* Competitor Analysis Images Carousel */}
                            <div className="mb-6">
                              <div className="relative max-w-4xl mx-auto">
                                <div className="relative overflow-hidden rounded-lg ">
                                  <img
                                    src={`/Case Studies/Boosting Payment Success/competitor analysis ${currentImageIndex + 1}.png`}
                                    alt={`Competitor Analysis ${currentImageIndex + 1}`}
                                    className="w-full h-auto transition-opacity duration-500"
                                  />
                                </div>

                                {/* Dots indicator */}
                                <div className="flex justify-center mt-4 space-x-2">
                                  {[0, 1].map((index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentImageIndex(index)}
                                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                        currentImageIndex === index
                                          ? 'bg-riso-fuschia'
                                          : 'bg-gray-300 hover:bg-gray-400'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                              Looking at multiple dunning letters from big companies, I collected recurring design patterns for example:
                            </p>
                            <ul className="space-y-2 text-muted-foreground leading-relaxed ml-6 list-small-bullets">
                              <li className="list-disc">Clear Call To Action button in brand colour or accent colour</li>
                              <li className="list-disc">Subject line that explain what the customer should do</li>
                              <li className="list-disc">Short, clear, personal message</li>
                              <li className="list-disc">Payment due date</li>
                              <li className="list-disc">Due amount highlighted in big bold numbers</li>
                              <li className="list-disc">Hyperlink to pay</li>
                              <li className="list-disc">Payment methods available</li>
                            </ul>
                          </div>

                            {/* UX/UI Audit Section */}
                            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-6">
                              UX/UI Audit
                            </h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              Current email customers receive
                            </p>
                            <div className="max-w-4xl mx-auto">
                              <img
                                src="/Case Studies/Boosting Payment Success/dunning letter before.png?v=3"
                                alt="UX/UI Audit - Dunning Letter Before Analysis"
                                className="w-full h-auto rounded-lg "
                              />
                            </div>
                          </div>

                            {/* Qualitative Interviews Section */}
                            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-6">
                              Qualitative interviews
                            </h4>

                            {/* User Quotes Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {/* Quote 1 */}
                              <div className="text-center">
                                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                                  <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                                    alt="User portrait"
                                    className="w-full h-full object-cover object-center"
                                  />
                                </div>
                                <blockquote className="text-muted-foreground text-base leading-relaxed mb-4 italic">
                                  "I did not know you could scan the invoice."
                                </blockquote>
                                <cite className="text-sm text-muted-foreground font-medium text-center block">
                                  - Marcus Chen
                                </cite>
                              </div>

                              {/* Quote 2 */}
                              <div className="text-center">
                                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                                  <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                                    alt="User portrait"
                                    className="w-full h-full object-cover object-center"
                                  />
                                </div>
                                <blockquote className="text-muted-foreground text-base leading-relaxed mb-4 italic">
                                  "With insurance it is very important to be informed about non-payment because my coverage is at stake."
                                </blockquote>
                                <cite className="text-sm text-muted-foreground font-medium text-center block">
                                  - Sarah Rodriguez
                                </cite>
                              </div>

                              {/* Quote 3 */}
                              <div className="text-center">
                                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                                  <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                                    alt="User portrait"
                                    className="w-full h-full object-cover object-center"
                                  />
                                </div>
                                <blockquote className="text-muted-foreground text-base leading-relaxed mb-4 italic">
                                  "I forgot about it, until I received the dunning letter."
                                </blockquote>
                                <cite className="text-sm text-muted-foreground font-medium text-center block">
                                  - David Thompson
                                </cite>
                              </div>
                            </div>

                          </div>

                            {/* Top Insights Section */}
                            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
                            <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                              Top insights
                            </h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Insight Card 1 */}
                                <div className="bg-gray-200 rounded-lg p-8 min-h-[200px]">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                      <Check className="w-5 h-5 text-teal-500" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                      Users value convenience and accessibility when receiving notifications. They prefer channels like email or in-app messages that allow them to read and respond directly from their phones.
                                    </p>
                                  </div>
                                </div>

                                {/* Insight Card 2 */}
                                <div className="bg-gray-200 rounded-lg p-8 min-h-[200px]">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                      <Check className="w-5 h-5 text-teal-500" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                      Users expect payment details, such as the amount due and due date, to be immediately visible and easy to find. When this information isn't clear, they revert to email or the customer portal, and if that fails, they contact customer support, increasing manual workload and frustration.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* User Journey Map Section */}
                            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
                              <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                                User Journey Map
                              </h4>

                              {/* User Journey Map Carousel */}
                              <div className="mb-6">
                                <div className="relative max-w-4xl mx-auto">
                                  <div className="relative overflow-hidden rounded-lg ">
                                    <img
                                      src={`/Case Studies/Boosting Payment Success/Journey map ${currentImageIndex + 1}.png`}
                                      alt={`User Journey Map ${currentImageIndex + 1}`}
                                      className="w-full h-auto transition-opacity duration-500"
                                    />
                                  </div>

                                  {/* Dots indicator */}
                                  <div className="flex justify-center mt-4 space-x-2">
                                    {[0, 1].map((index) => (
                                      <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                          currentImageIndex === index
                                            ? 'bg-riso-fuschia'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Impact vs Effort Section */}
                            <div className="mb-16 bg-white rounded-xl p-8 shadow-sm">
                              <h4 className="text-lg font-semibold text-foreground font-sora mb-6">
                                Impact vs Effort
                              </h4>
                              <p className="text-muted-foreground leading-relaxed mb-8">
                                Based on insights from user interviews, the journey map, and feedback from our Customer Service team, we identified the key pain points and opportunities with the highest potential impact. These findings informed our impact vs. effort analysis to guide prioritization.
                              </p>
                              <div className="max-w-4xl mx-auto">
                                <img
                                  src="/Case Studies/Boosting Payment Success/Opportunity areas.jpg"
                                  alt="Impact vs Effort Analysis - Opportunity Areas"
                                  className="w-full h-auto rounded-lg "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Challenges Section */}
                {project.challenges && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      Challenges
                    </h4>
                    <ul className="list-disc space-y-2 text-muted-foreground ml-6 list-small-bullets">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="pl-2">
                          <span className="-ml-2 block">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Workshop Section */}
                {project.workshop && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      {project.workshop.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      {project.workshop.description}
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">Our goals were simple:</h5>
                      <ul className="list-disc space-y-2 text-muted-foreground ml-6 list-small-bullets">
                        {project.workshop.goals.map((goal, index) => (
                          <li key={index} className="pl-2">
                            <span className="-ml-2 block">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Market Research Section */}
                {project.marketResearch && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      Market Research
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.marketResearch}
                    </p>
                  </div>
                )}

                {/* Design Sprint Section */}
                {project.designSprint && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      {project.designSprint.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      {project.designSprint.description}
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">After one day in the room together:</h5>
                      <ul className="list-disc space-y-2 text-muted-foreground ml-6 list-small-bullets">
                        {project.designSprint.outcomes.map((outcome, index) => (
                          <li key={index} className="pl-2">
                            <span className="-ml-2 block">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visuals Section */}
                    {project.name === "How we used AI to simplify Rule Creation" && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Visuals</h4>
                        <div className="bg-card rounded-lg p-6">
                          <div className="flex items-center justify-center min-h-[250px]">
                            <img
                              src="/images/visuals/visual ai rule creator.png"
                              alt="AI Rule Creator Visual"
                              className="max-w-full max-h-full object-contain rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Testing and Results Section */}
                {project.testingResults && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                      {project.testingResults.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      {project.testingResults.description}
                    </p>
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-8">Usability Issues:</h5>
                      <div className="overflow-x-auto mb-8">
                        <table className="w-full border border-border">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>Topic</th>
                              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>Insight</th>
                              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.testingResults.usabilityIssues.map((issue, index) => (
                              <tr key={index} className="border-b border-border/50">
                                <td className="py-3 px-4 text-sm text-muted-foreground font-normal border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>{issue.topic}</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground font-normal border-r border-border" style={{fontFamily: 'Jost, sans-serif'}}>{issue.insight}</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{issue.action}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">Out of Scope → Next iteration:</h5>
                      <p className="text-muted-foreground">{project.testingResults.outOfScope}</p>
                    </div>
                  </div>
                )}

                {/* Solutions & Improvements Section */}
                {project.solutions && (
                  <div>
                    {/* Handle object-type solutions (complex structure) */}
                    {typeof project.solutions === 'object' && !Array.isArray(project.solutions) && (
                      <>
                        <h4 className="text-lg font-semibold text-foreground font-sora mb-8">
                          {project.solutions.title}
                        </h4>

                        {/* Figma Improvements */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-3">{project.solutions.figmaImprovements.title}</h5>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            {project.solutions.figmaImprovements.description}
                          </p>
                          <p className="text-muted-foreground font-medium">
                            {project.solutions.figmaImprovements.highlight}
                          </p>
                        </div>

                        {/* Handover Best Practices */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-3">{project.solutions.handoverPractices.title}</h5>
                          <ul className="list-disc space-y-2 text-muted-foreground ml-6 list-small-bullets">
                            {project.solutions.handoverPractices.rules.map((rule, index) => (
                              <li key={index} className="pl-2">
                                <span className="-ml-2 block">{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Updated Process Steps */}
                        {project.solutions.processSteps && (
                          <div className="mb-10">
                            <h5 className="font-semibold text-foreground mb-3">{project.solutions.processSteps.title}</h5>
                            <p className="text-sm text-muted-foreground mb-4 italic">{project.solutions.processSteps.note}</p>
                            <div className="bg-white rounded-lg p-6">
                              <ol className="list-decimal space-y-3 text-muted-foreground ml-6">
                                {project.solutions.processSteps.steps.map((step, index) => (
                                  <li key={index} className="pl-2">
                                    <span className="-ml-2 block">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        )}

                        {/* Updated Process */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-8">Updated Process</h5>
                        </div>

                        {/* Cross Functional Swimlane Visual */}
                        <div className="my-8 -mx-8 md:-mx-24 lg:-mx-32">
                          <img
                            src="/images/visuals/Cross Functional Swimlane.jpg"
                            alt="Cross Functional Swimlane Process Diagram"
                            className="w-full h-auto rounded-lg "
                          />
                        </div>

                        {/* Additional Agreements */}
                        <div className="mb-10">
                          <h5 className="font-semibold text-foreground mb-3">Additional agreements:</h5>
                          <ul className="list-disc space-y-2 text-muted-foreground ml-6 list-small-bullets">
                            {project.solutions.additionalAgreements.map((agreement, index) => (
                              <li key={index} className="pl-2">
                                <span className="-ml-2 block">{agreement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {project.name === "How we used AI to simplify Rule Creation" ? (
                  <div className="-mx-4 md:-mx-16 lg:-mx-24 xl:-mx-32">
                    <div className="px-4 md:px-16 lg:px-24 xl:px-32 mb-8">
                      <h4 className="text-lg font-semibold text-foreground font-sora mb-3">
                        Updated Prototype <span className="text-riso-pink">(Click to begin)</span>
                      </h4>
                    </div>
                    <div className="mx-4 md:mx-8 mb-8 overflow-hidden">
                      <div className="bg-white rounded-lg  overflow-hidden">
                        <div className="transform scale-90 origin-top-left w-[111.11%] h-[111.11%]">
                          <RuleCreationPrototype onAnyInteraction={hidePrototypePrompt} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.prototypeVideoUrl ? (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Prototype</h4>
                    <div className="bg-white rounded-lg p-4 md:p-6 mb-8">
                      <div className="bg-card rounded-lg  overflow-hidden">
                        <video
                          controls
                          preload="metadata"
                          className="w-full h-[580px] object-contain p-4"
                          playsInline
                        >
                          <source src={project.prototypeVideoUrl} type="video/quicktime" />
                          <source src={project.prototypeVideoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Email Recommendations Section - Only for Boosting Payment Success */}
                {project.name === "Boosting Payment Success" && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-6">Email recommendations</h4>
                    <div className="max-w-4xl mx-auto">
                      <img
                        src="/Case Studies/Boosting Payment Success/Email recommendations.png?v=2"
                        alt="Email Recommendations"
                        className="w-full h-auto rounded-lg "
                      />
                    </div>
                  </div>
                )}

                {/* Out of Scope Section */}
                {project.outOfScope && (
                  <div className="bg-white rounded-lg p-6 mb-10">
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Out of Scope</h4>
                    <ul className="list-disc space-y-2 text-muted-foreground ml-6 list-small-bullets">
                      {project.outOfScope.map((item, index) => (
                        <li key={index} className="pl-2">
                          <span className="-ml-2 block">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-32">
                  <h4 className="text-lg font-semibold text-foreground font-sora mb-6">Impact</h4>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    By implementing the design changes to the emails being sent out to customers, we made it significantly easier for the customer to find the information that they needed to complete the payment.
                  </p>
                  <div className="bg-white rounded-lg p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>KPI</th>
                            <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Before</th>
                            <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>After</th>
                            <th className="text-left py-3 px-4 text-base font-semibold text-foreground" style={{fontFamily: 'Jost, sans-serif'}}>Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.impact.map((metric, index) => (
                            <tr key={index} className="border-b border-border/50">
                              <td className="py-3 px-4 text-base text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{metric.metric}</td>
                              <td className="py-3 px-4 text-base font-normal text-muted-foreground" style={{fontFamily: 'Jost, sans-serif'}}>{metric.before}</td>
                              <td className="py-3 px-4 text-base font-semibold text-primary" style={{fontFamily: 'Jost, sans-serif'}}>{metric.after}</td>
                              <td className="py-3 px-4 text-base text-muted-foreground font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{metric.description || ''}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* Learnings Section */}
                {project.learnings && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Key Learnings</h4>
                    <ul className="list-disc space-y-3 text-muted-foreground ml-6 mb-10 list-small-bullets">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="pl-2">
                          <span className="-ml-2 block">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.relatedProjects && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground font-sora mb-3">Related Case Studies</h4>
                    <div className="space-y-4">
                      {project.relatedProjects.map((relatedProject, index) => (
                        <Link
                          key={index}
                          to={`/portfolio/${relatedProject.company}/${encodeURIComponent(relatedProject.name)}`}
                          className="group flex items-start gap-4 p-4 rounded-lg hover:bg-riso-background hover:text-riso-white transition-all duration-300"
                        >
                          {/* Small Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 bg-riso-background rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={relatedProject.name === "Boosting Payment Success"
                                ? "/images/icons/boosting-payment.png"
                                : "/images/icons/design-dev-logo.png"
                              }
                              alt={relatedProject.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Project Title */}
                          <div className="flex-1">
                            <h5 className="font-semibold text-foreground group-hover:text-riso-white transition-colors text-left font-sora">
                              {relatedProject.name}
                            </h5>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;