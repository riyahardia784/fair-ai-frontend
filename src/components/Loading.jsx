import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-xl font-semibold text-gray-600">
        Analyzing dataset...
      </p>

      <p className="text-sm text-gray-400 mt-1">
        Please wait while we detect bias and generate insights
      </p>
    </div>
  );
}

export default Loading;