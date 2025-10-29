import { ChevronDown, HelpCircle } from 'lucide-react';

const PolicyHeader = () => {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span>Master templates &gt; Pet Health &gt; Policy &gt; </span>
        <span className="text-[#024751] font-medium">Validation rules</span>
      </nav>

      {/* Main Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value="Pet_Health"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#024751] focus:border-[#024751] text-sm"
              readOnly
            />
          </div>

          {/* Copy From Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Copy from
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#024751] focus:border-[#024751] text-sm appearance-none bg-white">
                <option>Select</option>
                <option>Pet Health Template</option>
                <option>Auto Insurance Template</option>
                <option>Home Insurance Template</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#024751] focus:border-[#024751] text-sm appearance-none bg-white">
                <option>Draft</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending Review</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PolicyHeader;