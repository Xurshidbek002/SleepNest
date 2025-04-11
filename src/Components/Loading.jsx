import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#ffffff] backdrop-blur-sm z-500000 flex items-center justify-center">
      <div className="relative w-50 h-50">
        <div className="absolute inset-2 rounded-full border-7 border-transparent border-t-[#e6e682] border-r-[#d89e38] animate-spin"></div>
        <div className="absolute inset-5 rounded-full border-7 border-transparent border-b-[#d3ab3d] border-l-[#bbe13e] animate-spin animation-delay-200"></div>
        <div className="absolute inset-8 rounded-full border-7 border-transparent border-t-[#a0ab40] border-r-[#a1e52a] animate-spin animation-delay-400"></div>
        <div className="absolute inset-2 flex items-center justify-center">
          <span className="text-[#8f9f00] font-medium">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
