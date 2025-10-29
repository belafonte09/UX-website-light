import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import SidebarNavigation from './SidebarNavigation';
import PolicyHeader from './PolicyHeader';
import RuleGenerationCard from './RuleGenerationCard';
import ValidationRulesCard from './ValidationRulesCard';
import TestRunCard from './TestRunCard';

export interface GeneratedRule {
  id: string;
  condition: string;
  description: string;
  isNew?: boolean;
}

interface RuleCreationPrototypeProps {
  onAnyInteraction?: () => void;
}

const RuleCreationPrototype = ({ onAnyInteraction }: RuleCreationPrototypeProps) => {
  const [activeTab, setActiveTab] = useState<'fields' | 'validation'>('validation');
  const [valGTPExpanded, setValGTPExpanded] = useState(true);
  const [showExampleText, setShowExampleText] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [exampleClicked, setExampleClicked] = useState(false);
  const [generateClicked, setGenerateClicked] = useState(false);
  const [generatedRule, setGeneratedRule] = useState<string>('');
  const [addRuleEnabled, setAddRuleEnabled] = useState(false);
  const [validationRules, setValidationRules] = useState<GeneratedRule[]>([
    {
      id: '1',
      condition: 'product_variant = "Basic"',
      description: 'IF product_variant = "Basic" THEN coverage_sum_overall < 10000'
    },
    {
      id: '2',
      condition: 'DURATION(...)',
      description: 'DURATION("birth_date_pet","reporting_date","year") > 10 THEN mixed_breed = FALSE'
    },
    {
      id: '3',
      condition: 'EXISTS(...)',
      description: 'EXISTS(last_name)'
    }
  ]);


  const handleExampleFieldClick = () => {
    setShowCursor(false);
    setShowExampleText(true);
    setExampleClicked(true); // Immediately activate generate button
    onAnyInteraction?.(); // Hide the arrow prompt
  };

  const handleExampleTextClick = () => {
    // Text click no longer needed for activation
  };

  const handleGenerateClick = () => {
    setGenerateClicked(true);
    setGeneratedRule('IF DURATION("birth_date_pet","reporting_date","year") > 10 THEN "mixed_breed" = FALSE');
    setAddRuleEnabled(true);
  };

  const handleAddRuleClick = () => {
    const newRule: GeneratedRule = {
      id: Date.now().toString(),
      condition: 'DURATION("birth_date_pet","reporting_date","year") > 10',
      description: 'IF DURATION("birth_date_pet","reporting_date","year") > 10 THEN "mixed_breed" = FALSE',
      isNew: true
    };

    setValidationRules([newRule, ...validationRules]);

    // Stop animation after 3 seconds
    setTimeout(() => {
      setValidationRules(prevRules =>
        prevRules.map(rule =>
          rule.id === newRule.id ? { ...rule, isNew: false } : rule
        )
      );
    }, 3000);

    // Reset the generation flow
    setShowExampleText(false);
    setShowCursor(true);
    setExampleClicked(false);
    setGenerateClicked(false);
    setGeneratedRule('');
    setAddRuleEnabled(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-system" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Left Sidebar */}
      <SidebarNavigation />

      {/* Main Content */}
      <div className="flex-1 p-6 max-w-6xl">
          {/* Header */}
          <PolicyHeader />

          {/* Tab Navigation */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('fields')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'fields'
                      ? 'border-[#024751] text-[#024751]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Select fields
                </button>
                <button
                  onClick={() => setActiveTab('validation')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'validation'
                      ? 'border-[#024751] text-[#024751]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Validation rules
                </button>
              </nav>
            </div>
          </div>

          {/* ValGTP Collapsible Card */}
          {activeTab === 'validation' && (
            <div className="mb-6">
              <div className="bg-white rounded-lg border border-gray-200">
                {/* ValGTP Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setValGTPExpanded(!valGTPExpanded)}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      {valGTPExpanded ? (
                        <ChevronDown className="w-4 h-4 mr-1" />
                      ) : (
                        <ChevronRight className="w-4 h-4 mr-1" />
                      )}
                      <span className="font-medium">ValGTP</span>
                    </button>
                    <div className="flex items-center">
                      <button className="flex items-center text-[#024751] hover:text-[#024751]/80 text-sm">
                        <HelpCircle className="w-4 h-4 mr-1" />
                        <span>Help</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ValGTP Content */}
                {valGTPExpanded && (
                  <div className="p-6">
                    <RuleGenerationCard
                      showCursor={showCursor}
                      showExampleText={showExampleText}
                      exampleClicked={exampleClicked}
                      generateClicked={generateClicked}
                      generatedRule={generatedRule}
                      addRuleEnabled={addRuleEnabled}
                      onExampleFieldClick={handleExampleFieldClick}
                      onExampleTextClick={handleExampleTextClick}
                      onGenerateClick={handleGenerateClick}
                      onAddRuleClick={handleAddRuleClick}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Content based on active tab */}
          {activeTab === 'validation' && (
            <div className="space-y-6">
              {/* Validation Rules Card */}
              <ValidationRulesCard rules={validationRules} />

              {/* Test Run Card */}
              <TestRunCard />
            </div>
          )}
        </div>
    </div>
  );
};

export default RuleCreationPrototype;