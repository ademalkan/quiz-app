import React from "react";
import { PlayIcon } from "@/components/icons";

const AnswerVideoButton = () => {
  return (
    <button className="bg-[#1ABC9C] rounded-md flex items-center justify-center p-2 gap-2 text-white font-bold">
      <PlayIcon />
      Çözüm Videosu
    </button>
  );
};

export default AnswerVideoButton;
