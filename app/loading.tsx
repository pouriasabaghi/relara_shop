import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-gray-700 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
