import { createBrowserRouter } from "react-router-dom";
import QuizPage from "../pages/quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizPage />,
  },
]);
