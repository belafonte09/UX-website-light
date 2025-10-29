import { ChevronRight } from 'lucide-react';

interface RuleGenerationCardProps {
  showCursor: boolean;
  showExampleText: boolean;
  exampleClicked: boolean;
  generateClicked: boolean;
  generatedRule: string;
  addRuleEnabled: boolean;
  onExampleFieldClick: () => void;
  onExampleTextClick: () => void;
  onGenerateClick: () => void;
  onAddRuleClick: () => void;
}

const RuleGenerationCard = ({
  showCursor,
  showExampleText,
  exampleClicked,
  generateClicked,
  generatedRule,
  addRuleEnabled,
  onExampleFieldClick,
  onExampleTextClick,
  onGenerateClick,
  onAddRuleClick,
}: RuleGenerationCardProps) => {
  return (
    <div>
      {/* Examples Section */}
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <ChevronRight className="w-4 h-4 mr-1" />
          <span className="font-medium">Examples</span>
        </button>

        {/* Descriptive Text */}
        <p className="text-sm text-gray-600 mb-4">
          Generate validation rules using natural language.
        </p>

        {/* Interactive Example Field */}
        <div
          onClick={!showExampleText ? onExampleFieldClick : undefined}
          className={`w-full p-4 border-2 border-dashed rounded-lg min-h-[60px] transition-all duration-200 ${
            !showExampleText
              ? 'border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer'
              : 'border-gray-200 bg-white'
          }`}
        >
          {showCursor && !showExampleText && (
            <div className="flex items-center h-6">
              <div className="w-0.5 h-5 bg-gray-800 animate-pulse"></div>
            </div>
          )}

          {showExampleText && (
            <button
              onClick={onExampleTextClick}
              className={`text-left w-full text-gray-700 hover:text-[#024751] transition-colors ${
                exampleClicked ? 'text-[#024751] font-medium' : ''
              }`}
            >
              If the pet is older than 10 years, it cannot be a mixed breed
            </button>
          )}
        </div>

        {/* Generate Button */}
        <div className="mt-4">
          <button
            onClick={onGenerateClick}
            disabled={!exampleClicked}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              exampleClicked
                ? 'bg-[#024751] text-white hover:bg-[#024751]/90 cursor-pointer'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Generate
          </button>
        </div>
      </div>

      {/* Generated Rule Section - Always Visible */}
      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-4">Generated Rule</h4>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          {generateClicked ? (
            <code className="text-sm font-mono text-gray-800 break-all">
              {generatedRule}
            </code>
          ) : (
            <div className="text-sm text-gray-500 italic">
              Generated rule will appear here...
            </div>
          )}
        </div>

        {/* Add as Rule Button */}
        <button
          onClick={onAddRuleClick}
          disabled={!addRuleEnabled}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            addRuleEnabled
              ? 'bg-[#024751] text-white hover:bg-[#024751]/90 cursor-pointer'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Add as rule
        </button>
      </div>
    </div>
  );
};

export default RuleGenerationCard;