import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const SelectedFieldsPanel = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['meta-data', 'claim-details', 'financial-details']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronDown className="w-4 h-4 mr-1" />
          <span className="font-medium">Selected Fields</span>
        </button>
        <HelpCircle className="w-4 h-4 text-gray-400" />
      </div>

      {/* Mandatory Fields */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">mandatory</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="text-sm text-gray-600">• obligation_rule_joined</div>
        </div>
      </div>

      {/* Meta Data Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Meta data</span>
        </div>
        <button
          onClick={() => toggleSection('meta-data')}
          className="flex items-center w-full ml-4 text-left"
        >
          {expandedSections.includes('meta-data') ? (
            <ChevronDown className="w-3 h-3 mr-1" />
          ) : (
            <ChevronRight className="w-3 h-3 mr-1" />
          )}
          <span className="text-sm text-gray-600">• reporting_health</span>
        </button>
        {expandedSections.includes('meta-data') && (
          <div className="ml-8 mt-1 space-y-1">
            <div className="text-xs text-gray-500">- record_type</div>
          </div>
        )}
      </div>

      {/* Claim Details Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Claim details</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="text-sm text-gray-600">• claim_id</div>
          <div className="text-sm text-gray-600">• policy_number</div>
          <div className="text-sm text-gray-600">• product_category</div>
          <div className="text-sm text-gray-600">• incident_date</div>
          <div className="text-sm text-gray-600">• incident_date_receivable</div>
        </div>
      </div>

      {/* Financial Details Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Financial details</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="text-sm text-gray-600">• comprehensive_premium_amount</div>
          <div className="text-sm text-gray-600">• comprehensive_revenue_currency</div>
          <div className="text-sm text-gray-600">• comprehensive_payout_date</div>
          <div className="text-sm text-gray-600">• comprehensive_payout_amount</div>
          <div className="text-sm text-gray-600">• comprehensive_payout_detail_lost_reason</div>
          <div className="text-sm text-gray-600">• inception_date</div>
          <div className="text-sm text-gray-600">• validation</div>
          <div className="text-sm text-gray-600">• dog_report</div>
          <div className="text-sm text-gray-600">• rejection_reason</div>
        </div>
      </div>

      {/* Additional collapsed sections */}
      <div className="space-y-2 text-sm text-gray-600">
        <div>• dog_product_main_amount</div>
        <div>• dog_payout_amount</div>
        <div>• inception_date</div>
        <div>• product_life_id</div>
        <div>• risk_category</div>
        <div>• risk_subcategory</div>
        <div>• policy_coverage_detail</div>
        <div>• comprehensive_payout_detail_lost_reason</div>
      </div>
    </div>
  );
};

export default SelectedFieldsPanel;