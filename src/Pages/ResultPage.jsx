import React, { useContext } from "react";
import { QuizContext } from "../ContextAp/QuizContext";
import { Link } from "react-router-dom";
import resultContainer from "../assets/png-clipart-empty-chathead-illustration-car-black-and-white-square-speech-bubble-angle-white-removebg-preview.png";

const ResultPage = () => {
  const { score, setScore } = useContext(QuizContext);
  console.log(score);
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5  bg-[#ffb703]">
      <div className="h-[40vh] w-full relative">
        <img
          src={resultContainer}
          alt=""
          className="h-full w-full object-contain "
        />
        <div className="absolute top-[50px] left-[100px]  md:top-[140px] md:left-[360px] lg:top-[50px] lg:left-[430px]">
          <h2 className="text-blue-600 font-bold text-3xl ">Your Score</h2>
          <p className="text-center text-2xl md:text-3xl mt-5 font-bold  text-red-600">
            {score}
          </p>
        </div>
      </div>
      <Link to="/">
        <button
          className="px-5 py-1 rounded-lg bg-white text-2xl font-semibold tracking-wide"
          onClick={() => setScore(0)}
        >
          {" "}
          Play Again!
        </button>
      </Link>
    </div>
  );
};

export default ResultPage;
