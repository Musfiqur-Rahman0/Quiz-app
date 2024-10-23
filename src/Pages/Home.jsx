import React, { useContext } from "react";
import QuizHome from "../Components/QuizHome";
import { QuizContext } from "../ContextAp/QuizContext";

const Home = () => {
  const { score, setScore } = useContext(QuizContext);

  console.log(score);

  return (
    <div>
      <QuizHome />
    </div>
  );
};

export default Home;
