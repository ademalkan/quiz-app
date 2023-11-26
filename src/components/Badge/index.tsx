import React from "react";

const Badge = ({ text }: { text: string }): React.ReactNode => {
  return (
    <span className="bg-[#2C3E50] text-white px-3 py-2 rounded-lg text-xs font-bold">
      {text}
    </span>
  );
};

export default Badge;
