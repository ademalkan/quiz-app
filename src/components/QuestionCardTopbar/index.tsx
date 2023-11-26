import React from "react";
import { Badge } from "@/components";
import { topbarOptions } from "./topbarOptions";
import { useQuestionStore } from "@/features/store/questionStore";

const QuestionCardTopbar = () => {
  const getOptions = () => {
    const allOptions = topbarOptions.map((option, index) => (
      <div
        key={index}
        className="bg-[#EDF2F4] w-12 h-12 flex items-center justify-center rounded-md hover:cursor-pointer"
        onClick={option.onClick}
      >
        {option.icon}
      </div>
    ));
    return <div className="flex items-center gap-2">{allOptions}</div>;
  };

  const { activeQuestion } = useQuestionStore();

  return (
    <div className="flex items-start justify-between">
      <div>
        <div>
          <Badge text={`Soru: Türkçe #${activeQuestion?.id}`} />
        </div>
      </div>
      <div className="hidden md:flex">{getOptions()}</div>
    </div>
  );
};

export default QuestionCardTopbar;
