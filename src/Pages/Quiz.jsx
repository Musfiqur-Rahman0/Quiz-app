import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchQuestionData } from "../api/Api";
import Option from "../Components/Option";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const fetechQuestion = async () => {
      try {
        const response = await fetchQuestionData();
        setQuestions(response.results);
      } catch (error) {
        console.error("Error Fetching Data : ", error);
      }
    };
    fetechQuestion();
  }, []);

  if (questions.length === 0) {
    return (
      <div className="h-screen w-screen flex items-center justify-center ">
        <h2>Loading...</h2>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prevIdx) => prevIdx + 1);
    } else {
      return <h2> No question left</h2>;
    }
  };

  const question = currentQuestion.question;

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-[#ffb703] ">
      <div className="h-1/2 w-full px-10">
        <h2 className="text-xl font-bold mb-4 w-full">{question}</h2>
        <Option
          questions={questions}
          currentIdx={currentIdx}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </div>
  );
};

export default Quiz;
