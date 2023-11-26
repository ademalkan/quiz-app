import React, { useState } from "react";
import { QuestionOption } from "@/@types/question";
import { useQuestionStore } from "@/features/store/questionStore";
import { PlayIcon } from "../icons";
import useRadioOption from "./options.hook";

interface RadioOptionProps {
  optionKey: string;
  optionValue: string;
  userAnswer: keyof QuestionOption | undefined;
  correctAnswer: keyof QuestionOption | undefined;
  showAnswers: boolean;
  onChange: (optionKey: string) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  optionKey,
  optionValue,
  userAnswer,
  correctAnswer,
  showAnswers,
  onChange,
}) => {
  const { isHovering, handleMouseEnter, handleMouseLeave } = useRadioOption();

  const isChecked = userAnswer === optionKey;
  const isCorrect = correctAnswer === optionKey && userAnswer;

  const isShowAnswerVideo = showAnswers && isCorrect && !isChecked;

  const getBackgroundColor = () => {
    if (showAnswers) {
      if (isCorrect) {
        return "bg-[#EDF2F4] border  border-[#1ABC9C]  text-[#1ABC9C] font-semibold";
      } else if (isChecked && !isCorrect) {
        return "bg-[#F85050] text-white";
      } else if (!isChecked && isCorrect) {
        return "bg-[#F85050] text-white";
      }
    }
    return "bg-[#EDF2F4] hover:bg-[#607B96] hover:bg-opacity-50";
  };

  return (
    <div
      className="w-full flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label
        className={`relative p-3 mb-2  flex  justify-between items-center  rounded-md min-w-full  ${getBackgroundColor()}`}
      >
        <div className="flex justify-between items-center gap-2">
          <input
            type="radio"
            name="options"
            value={optionKey}
            checked={isChecked}
            onChange={() => onChange(optionKey)}
          />
          <span>
            {optionKey}) {optionValue}
          </span>
        </div>
        {!isShowAnswerVideo && !isChecked && isHovering ? (
          <button
            onClick={() => onChange(optionKey)}
            className="text-white bg-[#1ABC9C] flex items-center justify-between px-3 py-1 gap-2 rounded-md"
          >
            Cevapla
          </button>
        ) : null}
        {isShowAnswerVideo && userAnswer ? (
          <button className="z-10 text-white bg-[#1ABC9C] flex items-center justify-between p-1 gap-2 rounded-md">
            <PlayIcon /> Çözüm Videosu
          </button>
        ) : null}
      </label>
    </div>
  );
};

const Options: React.FC = () => {
  const { activeQuestion, setUserAnswer, showAnswers } = useQuestionStore();

  const handleOptionChange = (optionKey: string) => {
    setUserAnswer(optionKey as keyof QuestionOption);
  };

  return (
    <>
      {activeQuestion && (
        <div className="w-full">
          {Object.entries(activeQuestion.options).map(([key, value]) => (
            <RadioOption
              key={key}
              optionKey={key}
              optionValue={value}
              userAnswer={activeQuestion.userAnswer}
              correctAnswer={activeQuestion.correctAnswer}
              showAnswers={showAnswers}
              onChange={handleOptionChange}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Options;
