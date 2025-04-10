import React from "react";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const {t} = useTranslation();
  return (
    <div className="fixed inset-0 bg-[#141024]/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-50 h-50">
        <div className="absolute inset-2 rounded-full border-5 border-transparent border-t-[#e6e682] border-r-[#d89e38] animate-spin"></div>
        <div className="absolute inset-5 rounded-full border-5 border-transparent border-b-[#d3ab3d] border-l-[#bbe13e] animate-spin animation-delay-200"></div>
        <div className="absolute inset-8 rounded-full border-5 border-transparent border-t-[#a0ab40] border-r-[#a1e52a] animate-spin animation-delay-400"></div>
        <div className="absolute inset-2 flex items-center justify-center">
          <span className="text-[#009b79] font-medium">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
