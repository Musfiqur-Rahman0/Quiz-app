import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../ContextAp/QuizContext";

const Option = ({ questions, currentIdx, handleNextQuestion }) => {
  const [suffledAnswers, setSuffledAnswers] = useState([]);

  const { setScore, userSelect, setUserSelect } = useContext(QuizContext);

  useEffect(() => {
    const currentQuestion = questions[currentIdx];

    if (questions.length !== 0) {
      const answers = [
        { text: currentQuestion.correct_answer, isCorrect: true },
        ...currentQuestion.incorrect_answers.map((answer) => ({
          text: answer,
          isCorrect: false,
        })),
      ];
      const suffleAnswers = answers.sort(() => Math.random() - 0.5);
      setSuffledAnswers(suffleAnswers);
    }
  }, [questions, currentIdx]);

  const handleUserSelect = (answer) => {
    const currentQuestion = questions[currentIdx];

    if (currentQuestion) {
      if (userSelect === null) {
        setUserSelect(answer);
      }
    }
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 0.5);
    }
  };

  useEffect(() => {
    setUserSelect(null);
  }, [currentIdx, questions]);

  return (
    <div>
      <ul>
        {suffledAnswers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleUserSelect(answer)}
            className={`list-decimal ml-5 px-5 rounded-md whitespace-nowrap ${
              userSelect === answer
                ? answer.isCorrect
                  ? "bg-blue-500 text-white"
                  : "bg-red-500 text-white"
                : ""
            }`}
          >
            {answer.text}
          </li>
        ))}
      </ul>
      {currentIdx === questions.length - 1 ? (
        <Link to="/result">
          <button className="bg-[#023047] text-white p-3 rounded-lg mt-4">
            Show Result
          </button>
        </Link>
      ) : (
        <button
          onClick={handleNextQuestion}
          className="bg-[#023047] text-white px-2 py-1 text-sm  rounded-lg mt-4"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Option;
