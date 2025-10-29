import { useState } from 'react';
import { ChevronDown, ChevronRight, Trash2 } from 'lucide-react';
import { GeneratedRule } from './RuleCreationPrototype';

interface ValidationRulesCardProps {
  rules: GeneratedRule[];
}

const ValidationRulesCard = ({ rules }: ValidationRulesCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1" />
          )}
          <span className="font-medium">Validation rules</span>
        </button>
      </div>

      {/* Rules List */}
      {isExpanded && (
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div
              key={rule.id}
              className={`border border-gray-200 rounded-lg p-4 transition-all duration-300 ${
                rule.isNew ? 'bg-[#024751]/5 border-[#024751]/20 animate-pulse-fast' : 'bg-white'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      IF
                    </span>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded font-mono">
                      {rule.condition}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      THEN
                    </span>
                    {rule.isNew && (
                      <span className="text-xs bg-[#024751] text-white px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
                    {rule.description}
                  </div>
                </div>
                <button className="ml-4 p-1 transition-colors" style={{ color: '#024751' }}>
                  <Trash2 className="w-4 h-4 hover:opacity-80" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ValidationRulesCard;