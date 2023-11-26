import { Breadcrumb, PrevNextButtons, QuestionCard } from "@/components";
import QuizLayout from "@/layouts/quiz-layout";
import React from "react";
const QuizPage = () => {
  return (
    <QuizLayout>
      <Breadcrumb title="Konu Tarama Testi #1" />
      <QuestionCard />
      <PrevNextButtons />
    </QuizLayout>
  );
};

export default QuizPage;
