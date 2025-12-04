import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Settings, Users, FileSpreadsheet, List, AlertCircle, LogOut, User, Download } from 'lucide-react';

interface TableRow {
  id: string;
  policyId: string;
  validationMessage: string[];
  sourceLine: string;
  severity: 'Critical' | null;
  status: 'Not started' | 'In progress' | 'Resolved';
  comments: number;
  assignedTo: string | null;
  assignedColor?: string;
}

const ComplianceDashboardPrototype: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'detail'>('dashboard');
  const [selectedRecord, setSelectedRecord] = useState<TableRow | null>(null);
  const [partnersExpanded, setPartnersExpanded] = useState(true);
  const [settingsExpanded, setSettingsExpanded] = useState(true);

  const tableData: TableRow[] = [
    {
      id: '1',
      policyId: '123ABCD',
      validationMessage: [
        "'coverage_sum' [120,000] exceeds MAX range for value [100,000]",
        "IF 'product_variant' = \"Basis\" THEN 'coverage_sum' < 100,000"
      ],
      sourceLine: 'View record',
      severity: 'Critical',
      status: 'Not started',
      comments: 0,
      assignedTo: null
    },
    {
      id: '2',
      policyId: '123ABCD',
      validationMessage: [
        "'coverStartDate' [2024-02-21] exceeds MIN range for value [2024-04-17]",
        "coverStartDate has to be at least 1 day after sign date"
      ],
      sourceLine: 'View record',
      severity: 'Critical',
      status: 'In progress',
      comments: 3,
      assignedTo: 'MB',
      assignedColor: 'blue'
    },
    {
      id: '3',
      policyId: 'JH83638',
      validationMessage: [
        "'pet_birthday' [2014-02-04] exceeds MAX range for value [2024-04-01]",
        "Pet must be younger than 10 years old"
      ],
      sourceLine: 'View record',
      severity: null,
      status: 'Not started',
      comments: 0,
      assignedTo: null
    },
    {
      id: '4',
      policyId: 'TI83659',
      validationMessage: [
        "'dog_breed' [French Bulldog] IS NOT in the list",
        "dog_breed is in risk_list [Dogs Breeds]"
      ],
      sourceLine: 'View record',
      severity: 'Critical',
      status: 'Resolved',
      comments: 2,
      assignedTo: 'JS',
      assignedColor: 'purple'
    }
  ];

  const handleViewRecord = (row: TableRow) => {
    setSelectedRecord(row);
    setCurrentScreen('detail');
  };

  const handleBackToList = () => {
    setCurrentScreen('dashboard');
    setSelectedRecord(null);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden mx-auto" style={{ aspectRatio: '16/10', maxWidth: '1440px', fontFamily: 'Inter, Roboto, system-ui, -apple-system, sans-serif' }}>
      <div className="flex h-full">
        {/* Sidebar - Light Gray Background */}
        <div className="w-52 flex-shrink-0 flex flex-col" style={{ backgroundColor: '#E8EAED' }}>
          {/* Logo/Title */}
          <div className="px-5 py-6">
            <h2 className="text-lg font-semibold" style={{ color: '#333333' }}>MGA System</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-1">
            {/* Partners Section */}
            <div>
              <button
                onClick={() => setPartnersExpanded(!partnersExpanded)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200"
                style={{ color: '#333333' }}
              >
                <div className="flex items-center gap-2">
                  <Users size={16} style={{ color: '#666666' }} />
                  <span>Partners</span>
                </div>
                {partnersExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {partnersExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  <button className="w-full text-left px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-white" style={{ color: '#333333' }}>
                    Manage partners
                  </button>
                  <button className="w-full text-left px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-white" style={{ color: '#333333' }}>
                    Partner products
                  </button>
                </div>
              )}
            </div>

            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-white" style={{ color: '#333333' }}>
              <FileText size={16} style={{ color: '#666666' }} />
              <span>Master templates</span>
            </button>

            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-white" style={{ color: '#333333' }}>
              <List size={16} style={{ color: '#666666' }} />
              <span>Risk lists</span>
            </button>

            {/* BDX Files - Active State */}
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md" style={{ backgroundColor: '#B8D4E6', color: '#024751' }}>
              <FileSpreadsheet size={16} />
              <span className="font-medium">BDX Files</span>
            </button>

            {/* Settings Section */}
            <div className="pt-4">
              <div className="px-3 py-1 text-xs font-medium" style={{ color: '#666666' }}>
                Settings
              </div>

              <button
                onClick={() => setSettingsExpanded(!settingsExpanded)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-white"
                style={{ color: '#333333' }}
              >
                <div className="flex items-center gap-2">
                  <Settings size={16} style={{ color: '#666666' }} />
                  <span>Settings</span>
                </div>
                {settingsExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {settingsExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  <button className="w-full text-left px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-white truncate" style={{ color: '#333333' }}>
                    Audit informati...
                  </button>
                  <button className="w-full text-left px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-white truncate" style={{ color: '#333333' }}>
                    User administr...
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t" style={{ borderColor: '#D0D0D0' }}>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-white mb-3" style={{ color: '#333333' }}>
              <LogOut size={16} style={{ color: '#666666' }} />
              <span>Sign out</span>
            </button>
            <div className="flex items-center gap-2 px-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ backgroundColor: '#E91E63' }}>
                KH
              </div>
              <span className="text-xs" style={{ color: '#333333' }}>Karin Hoffmann</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
          {currentScreen === 'dashboard' ? (
            <>
              {/* Breadcrumbs */}
              <div className="bg-white" style={{ padding: '16px 60px' }}>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                  <button className="hover:underline">Partners</button>
                  <span>/</span>
                  <button className="hover:underline">BDX Files</button>
                  <span>/</span>
                  <span style={{ color: '#1A1A1A' }}>Business validations</span>
                </div>
              </div>

              {/* Header Section */}
              <div className="bg-white" style={{ padding: '0 60px 24px 60px' }}>
                <h1 className="text-xl font-bold mb-1" style={{ color: '#1A1A1A' }}>Partner Name</h1>
                <div className="flex items-center gap-3 text-sm" style={{ color: '#666666' }}>
                  <span className="font-medium" style={{ color: '#1A1A1A' }}>Pet Health, DE + AT</span>
                  <span>Period: 1 Apr 2024 – 31 Apr 2024</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white" style={{ padding: '0 60px 20px 60px' }}>
                <div className="flex gap-6">
                  <button className="px-1 py-3 text-sm font-medium border-b-2 transition-colors" style={{ borderColor: '#024751', color: '#024751' }}>
                    Business validations
                  </button>
                  <button className="px-1 py-3 text-sm border-b-2 border-transparent transition-colors" style={{ color: '#666666' }}>
                    Data validations
                  </button>
                </div>
              </div>

              {/* Filters and Download */}
              <div className="bg-white" style={{ padding: '0 60px 20px 60px' }}>
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    {/* Filter 1 */}
                    <div>
                      <label className="block text-xs mb-2" style={{ color: '#999999' }}>Filter by errors</label>
                      <div className="relative">
                        <select className="appearance-none bg-gray-50 border rounded px-3 py-2 pr-8 text-sm" style={{ borderColor: '#E0E0E0', color: '#333333', width: '130px' }}>
                          <option>All</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown size={14} style={{ color: '#999999' }} />
                        </div>
                      </div>
                    </div>

                    {/* Filter 2 */}
                    <div>
                      <label className="block text-xs mb-2" style={{ color: '#999999' }}>Filter by status</label>
                      <div className="relative">
                        <select className="appearance-none bg-gray-50 border rounded px-3 py-2 pr-8 text-sm" style={{ borderColor: '#E0E0E0', color: '#333333', width: '130px' }}>
                          <option>All</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown size={14} style={{ color: '#999999' }} />
                        </div>
                      </div>
                    </div>

                    {/* Filter 3 */}
                    <div>
                      <label className="block text-xs mb-2" style={{ color: '#999999' }}>Filter by Policy ID</label>
                      <div className="relative">
                        <select className="appearance-none bg-gray-50 border rounded px-3 py-2 pr-8 text-sm" style={{ borderColor: '#E0E0E0', color: '#333333', width: '150px' }}>
                          <option>All</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown size={14} style={{ color: '#999999' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded mt-6" style={{ backgroundColor: '#024751' }}>
                    <Download size={14} />
                    <span>Download as .csv</span>
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto" style={{ padding: '20px 60px' }}>
                <div className="bg-white rounded border" style={{ borderColor: '#E0E0E0' }}>
                  <table className="w-full text-sm">
                    <thead style={{ backgroundColor: '#F7F8FA' }}>
                      <tr>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '110px' }}>Policy ID</th>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '600px' }}>Validation message</th>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '120px' }}>Source line</th>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '110px' }}>Severity</th>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '130px' }}>Status</th>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '110px' }}>Comments</th>
                        <th className="px-4 py-3 text-left font-medium" style={{ color: '#666666', width: '110px' }}>Assigned to</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={row.id} className="border-t hover:bg-gray-50 transition-colors" style={{ borderColor: '#E8E8E8' }}>
                          <td className="px-4 py-4 font-medium" style={{ color: '#1A1A1A' }}>{row.policyId}</td>
                          <td className="px-4 py-4">
                            <div className="space-y-0.5">
                              <div className="text-sm whitespace-nowrap" style={{ color: '#D32F2F' }}>{row.validationMessage[0]}</div>
                              <div className="text-sm whitespace-nowrap" style={{ color: '#1976D2' }}>{row.validationMessage[1]}</div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <button
                              onClick={() => handleViewRecord(row)}
                              className="text-sm font-medium underline hover:no-underline whitespace-nowrap"
                              style={{ color: '#1976D2' }}
                            >
                              View record
                            </button>
                          </td>
                          <td className="px-4 py-4">
                            {row.severity && (
                              <div className="flex items-center gap-1.5">
                                <AlertCircle size={16} style={{ color: '#FF9800' }} />
                                <span className="text-sm" style={{ color: '#FF9800' }}>{row.severity}</span>
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap`}
                              style={
                                row.status === 'Not started' ? { backgroundColor: '#E0E0E0', color: '#666666' } :
                                row.status === 'In progress' ? { backgroundColor: '#FF9800', color: '#FFFFFF' } :
                                { backgroundColor: '#4CAF50', color: '#FFFFFF' }
                              }
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                              style={{ backgroundColor: '#024751', color: '#FFFFFF' }}
                            >
                              <span>💬</span>
                              <span>({row.comments})</span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            {row.assignedTo ? (
                              <div
                                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                                style={{
                                  backgroundColor: row.assignedColor === 'blue' ? '#2196F3' :
                                                   row.assignedColor === 'purple' ? '#9C27B0' : '#999999'
                                }}
                              >
                                {row.assignedTo}
                              </div>
                            ) : (
                              <User size={18} style={{ color: '#CCCCCC' }} />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Record Detail View */}
              <div className="flex-1 overflow-auto" style={{ padding: '24px 60px' }}>
                <button
                  onClick={handleBackToList}
                  className="mb-6 text-sm font-medium hover:underline whitespace-nowrap"
                  style={{ color: '#1976D2' }}
                >
                  ← Back to list
                </button>

                <div className="bg-white rounded border p-8" style={{ borderColor: '#E0E0E0' }}>
                  <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Record Details</h2>

                  {selectedRecord && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>Policy ID</label>
                        <p className="text-base" style={{ color: '#1A1A1A' }}>{selectedRecord.policyId}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>Validation Messages</label>
                        <div className="space-y-2">
                          <p className="text-sm" style={{ color: '#D32F2F' }}>{selectedRecord.validationMessage[0]}</p>
                          <p className="text-sm" style={{ color: '#1976D2' }}>{selectedRecord.validationMessage[1]}</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>Severity</label>
                        {selectedRecord.severity ? (
                          <div className="flex items-center gap-2">
                            <AlertCircle size={18} style={{ color: '#FF9800' }} />
                            <span className="text-base" style={{ color: '#FF9800' }}>{selectedRecord.severity}</span>
                          </div>
                        ) : (
                          <p className="text-sm" style={{ color: '#999999' }}>No severity assigned</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>Status</label>
                        <span
                          className="inline-flex items-center px-3 py-1 rounded text-sm font-medium"
                          style={
                            selectedRecord.status === 'Not started' ? { backgroundColor: '#E0E0E0', color: '#666666' } :
                            selectedRecord.status === 'In progress' ? { backgroundColor: '#FF9800', color: '#FFFFFF' } :
                            { backgroundColor: '#4CAF50', color: '#FFFFFF' }
                          }
                        >
                          {selectedRecord.status}
                        </span>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>Comments</label>
                        <p className="text-base" style={{ color: '#1A1A1A' }}>{selectedRecord.comments} comment{selectedRecord.comments !== 1 ? 's' : ''}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>Assigned To</label>
                        {selectedRecord.assignedTo ? (
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                              style={{
                                backgroundColor: selectedRecord.assignedColor === 'blue' ? '#2196F3' :
                                               selectedRecord.assignedColor === 'purple' ? '#9C27B0' : '#999999'
                              }}
                            >
                              {selectedRecord.assignedTo}
                            </div>
                            <span className="text-base" style={{ color: '#1A1A1A' }}>{selectedRecord.assignedTo}</span>
                          </div>
                        ) : (
                          <p className="text-sm" style={{ color: '#999999' }}>Not assigned</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplianceDashboardPrototype;
