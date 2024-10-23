import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [userSelect, setUserSelect] = useState(null);

  return (
    <QuizContext.Provider
      value={{ score, setScore, userSelect, setUserSelect }}
    >
      {children}
    </QuizContext.Provider>
  );
};
