import { useState } from 'react';
import { ChevronDown, ChevronRight, Settings, LogOut, Users, FolderOpen, List, Database, Wrench, UserCog } from 'lucide-react';

const SidebarNavigation = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['partners']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <img
          src="/mga-system-logo.jpg"
          alt="MGA System"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {/* Partners Section */}
          <div>
            <button
              onClick={() => toggleSection('partners')}
              className="flex items-center justify-between w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-3 text-gray-500" />
                <span>Partners</span>
              </div>
              {expandedSections.includes('partners') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.includes('partners') && (
              <div className="ml-7 mt-1 space-y-1">
                <a href="#" className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Manage partners
                </a>
                <a href="#" className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Partner products
                </a>
              </div>
            )}
          </div>

          {/* Master Templates */}
          <div>
            <a href="#" className="flex items-center px-2 py-1 text-sm text-[#024751] bg-[#024751]/10 rounded font-medium">
              <FolderOpen className="w-4 h-4 mr-3 text-[#024751]" />
              <span>Master templates</span>
            </a>
          </div>

          {/* Mapping Lists */}
          <div>
            <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
              <List className="w-4 h-4 mr-3 text-gray-500" />
              <span>Mapping lists</span>
            </a>
          </div>

          {/* BDX Files */}
          <div>
            <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
              <Database className="w-4 h-4 mr-3 text-gray-500" />
              <span>BDX Files</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 p-4 space-y-2">
        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
          Settings
        </div>

        <button className="flex items-center w-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
          <Wrench className="w-4 h-4 mr-3 text-gray-500" />
          <span>Audit informati...</span>
          <ChevronRight className="w-4 h-4 ml-auto" />
        </button>

        <button className="flex items-center w-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
          <UserCog className="w-4 h-4 mr-3 text-gray-500" />
          <span>User administr...</span>
          <ChevronRight className="w-4 h-4 ml-auto" />
        </button>

        {/* User Profile and Sign Out */}
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
          <button className="flex items-center w-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
            <LogOut className="w-4 h-4 mr-3 text-gray-500" />
            <span>Sign out</span>
          </button>

          <div className="flex items-center px-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">K</span>
            </div>
            <span className="text-sm text-gray-700">Karin Hoffmann</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;