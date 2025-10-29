import { useState } from 'react';
import { ChevronDown, ChevronRight, Upload, FileText } from 'lucide-react';

const TestRunCard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const sampleData = [
    { errors: '#', reporting_date: '2024-01-01', product_variant: 'Basic', coverage_sum_overall: '2000' },
    { errors: '1', reporting_date: '2024-01-01', product_variant: 'Basic', coverage_sum_overall: '3000' },
    { errors: '2', reporting_date: '2024-01-01', product_variant: 'null = false', coverage_sum_overall: '100000.0 = 100000.0' },
    { errors: '3', reporting_date: '2024-01-01', product_variant: 'Basic', coverage_sum_overall: '3000' },
    { errors: '4', reporting_date: '2024-01-01', product_variant: 'Basic', coverage_sum_overall: '3000' },
    { errors: '5', reporting_date: '2024-01-01', product_variant: 'Basic', coverage_sum_overall: '3000' },
  ];

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
          <span className="font-medium">Test Run</span>
        </button>
      </div>

      {/* Content */}
      {isExpanded && (
        <>
          {/* Upload Section */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">Upload BDX Template</p>

            <div className="flex items-center gap-4 mb-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Upload className="w-4 h-4" />
                Upload files...
              </button>

              <span className="text-sm text-gray-500">or drop files here</span>
            </div>

            {/* Uploaded File */}
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Demo_sdit_example.csv</span>
            </div>
          </div>

          {/* Options */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300 text-[#024751] focus:ring-[#024751]" />
              <span className="text-gray-700">Show only error fields</span>
            </label>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50" style={{fontFamily: 'Jost, sans-serif'}}>#</th>
                  <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50" style={{fontFamily: 'Jost, sans-serif'}}>Errors</th>
                  <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50" style={{fontFamily: 'Jost, sans-serif'}}>reporting_date</th>
                  <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50" style={{fontFamily: 'Jost, sans-serif'}}>product_variant</th>
                  <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50" style={{fontFamily: 'Jost, sans-serif'}}>coverage_sum_overall</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => {
                  // Rows 2 & 3 (index 1 & 2) should be light red (errors)
                  // Other rows should be light green (success)
                  const isError = index === 1 || index === 2;
                  const rowClass = isError
                    ? "border-b border-gray-100"
                    : "border-b border-gray-100";
                  const bgStyle = isError
                    ? { backgroundColor: '#FDEAE8' }
                    : { backgroundColor: '#E9F2EC' };

                  return (
                    <tr key={index} className={rowClass} style={bgStyle}>
                      <td className="py-2 px-3 text-sm text-gray-900 font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{index + 1}</td>
                      <td className="py-2 px-3 text-sm text-gray-600 font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{row.errors}</td>
                      <td className="py-2 px-3 text-sm text-gray-600 font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{row.reporting_date}</td>
                      <td className="py-2 px-3 text-sm text-gray-600 font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{row.product_variant}</td>
                      <td className="py-2 px-3 text-sm text-gray-600 font-normal" style={{fontFamily: 'Jost, sans-serif'}}>{row.coverage_sum_overall}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TestRunCard;