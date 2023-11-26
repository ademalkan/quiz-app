import React from "react";
import { QuestionCardTopbar, Question,Options } from "@/components";

const QuestionCard = () => {
  return (
    <div className="w-full px-4 py-6 bg-white rounded-md shadow-sm max-h-full md:max-h-[480px] overflow-y-auto">
      <QuestionCardTopbar />
      <Question />
      <Options/>
    </div>
  );
};

export default QuestionCard;
