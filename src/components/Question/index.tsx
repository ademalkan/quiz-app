import { useQuestionStore } from "@/features/store/questionStore";
import React from "react";

const Question = () => {
  const { activeQuestion } = useQuestionStore();
  return (
    <div className="text-[#2C3E50] flex flex-col gap-6 mt-3 mb-12">
      <p>{activeQuestion?.excerpt}</p>
      <p className="font-bold ">{activeQuestion?.question}</p>
    </div>
  );
};

export default Question;
