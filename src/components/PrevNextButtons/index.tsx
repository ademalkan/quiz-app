import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import { useQuestionStore } from "@/features/store/questionStore";

const PrevNextButtons = () => {
  const { nextQuestion, prevQuestion, activeQuestion, length } =
    useQuestionStore();
  const buttonStyle =
    "bg-[#EDF2F4] p-3 rounded-md min-w-[60px] md:min-w-[140px] flex items-center gap-1 font-semibold";
  return (
    <div className="mt-3 w-full  flex items-center justify-between">
      {activeQuestion?.id !== 1 ? (
        <button className={buttonStyle} onClick={prevQuestion}>
          <ChevronLeftIcon />
          Önceki Soru
        </button>
      ) : (
        <div></div>
      )}

      {activeQuestion?.id !== length ? (
        <button className={buttonStyle} onClick={nextQuestion}>
          Sonraki Soru
          <ChevronRightIcon />
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PrevNextButtons;
