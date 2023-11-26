export type QuestionOption = {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
};

export type Question = {
  id: number;
  question: string;
  excerpt: string;
  options: QuestionOption;
  correctAnswer: keyof QuestionOption;
  userAnswer?: keyof QuestionOption;
  show: boolean;
};
