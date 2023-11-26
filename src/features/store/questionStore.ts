import { Question, QuestionOption } from "@/@types/question";
import { questionsTemp } from "@/temp/questions";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type QuestionStore = {
  questions: Question[];
  length: number;
  showAnswers: boolean;
  activeQuestion?: Question;
  nextQuestion: () => void;
  prevQuestion: () => void;
  setShowAnswers: (showAnswers: boolean) => void;
  setUserAnswer: (userAnswer: keyof QuestionOption) => void;
};

export const useQuestionStore = create<QuestionStore>()(
  persist(
    (set) => ({
      questions: questionsTemp,
      length: questionsTemp.length,
      showAnswers: false,
      activeQuestion: questionsTemp.find((question) => question.show === true),
      nextQuestion: () => {
        set((state: Partial<QuestionStore>) => {
          return navigation({ state, type: "NEXT" });
        });
      },
      prevQuestion: () => {
        set((state: Partial<QuestionStore>) => {
          return navigation({ state, type: "PREV" });
        });
      },
      setShowAnswers: (showAnswers: boolean) => {
        set({ showAnswers });
      },
      setUserAnswer: (userAnswer: keyof QuestionOption) => {
        set((state: any) => {
          const questions = state.questions!.map((question: Question) => {
            if (question.id === state?.activeQuestion?.id) {
              return {
                ...question,
                userAnswer,
              };
            }
            return question;
          });
          return {
            ...state,
            questions,
            activeQuestion: {
              ...state?.activeQuestion,
              userAnswer,
            },
          };
        });
      },
    }),
    {
      name: "questions",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

type Navigation = {
  state: Partial<QuestionStore>;
  type: "NEXT" | "PREV";
};

const navigation = ({ state, type }: Navigation) => {
  const activeQuestionIndex = state.questions?.findIndex(
    (question) => question.id === state?.activeQuestion?.id!
  );
  const navigationQuestionIndex =
    type === "NEXT" ? activeQuestionIndex! + 1 : activeQuestionIndex! - 1;
  const navigationQuestion = state.questions![navigationQuestionIndex];
  const questions = state.questions!.map((question) => {
    if (question.id === navigationQuestion.id) {
      return {
        ...question,
        show: true,
      };
    }
    return question;
  });
  return {
    questions,
    activeQuestion: navigationQuestion,
  };
};
