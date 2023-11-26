import React from "react";
import { AbcIcon } from "@/components/icons";
import { useQuestionStore } from "@/features/store/questionStore";
import clsx from "clsx";

const Optic = () => {
  const { questions, length, showAnswers, setActiveQuestion } =
    useQuestionStore();

  const getQuestionOptic = () => {
    return questions.map((question, index) => (
      <div
        onClick={() => {
          setActiveQuestion(index + 1);
        }}
        key={index}
        className="bg-[#03A9F1] bg-opacity-10 rounded-md p-2 flex items-center gap-2"
      >
        <span className="font-semibold mr-2">{question.id}. Soru</span>
        {["A", "B", "C", "D", "E"].map((item, index) => (
          <div
            key={index}
            className={clsx(
              "border border-[#4993B1] rounded-full w-[40px] h-[40px]  flex items-center justify-center",
              {
                "bg-[#03A9F1] text-white":
                  question.userAnswer === item && !showAnswers,
                "bg-red-600 text-white":
                  question.correctAnswer !== item &&
                  question.userAnswer === item &&
                  question.userAnswer &&
                  showAnswers,
                "bg-green-600 text-white":
                  question.correctAnswer == item &&
                  question.userAnswer &&
                  showAnswers,
              }
            )}
          >
            {item}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="w-full px-2 py-3 bg-white rounded-md shadow-sm max-h-60 md:max-h-[480px] overflow-y-auto">
      <div className="flex items-center gap-2">
        <AbcIcon />
        <div>
          <h3 className="font-semibold  text-[#1E2029]">Türkçe</h3>
          <small className="text-[#607B96]">{length} Soru</small>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-1">{getQuestionOptic()}</div>
      </div>
    </div>
  );
};

export default Optic;
