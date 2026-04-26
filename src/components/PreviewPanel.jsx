import React from 'react';

function PreviewPanel({ previewData, onClose }) {
  if (!previewData || previewData.length === 0) return null;

  return (
    <div className="w-[400px] h-[400px] bg-white rounded-lg shadow-lg p-4 overflow-auto noScroll">

      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-[#2563EB]">
          Dataset Preview
        </h2>

        <button
          onClick={onClose}
          className="text-red-500 text-sm"
        >
          ✕
        </button>
      </div>

      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Selected</th>
          </tr>
        </thead>

        <tbody>
          {previewData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{row.Gender}</td>
              <td
                className={`p-2 border ${
                  row.Selected === "1"
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {row.Selected === "1" ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PreviewPanel;