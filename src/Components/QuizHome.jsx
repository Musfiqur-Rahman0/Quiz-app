import React from "react";
import heroImg from "../assets/istockphoto-1616906708-612x612-removebg-preview.png";
import { Link } from "react-router-dom";

const QuizHome = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center  flex-col gap-32 bg-[#ffb703]">
      <div className="h-[30vh] w-full">
        <img src={heroImg} alt="" className="h-full w-full object-contain" />
      </div>
      <div>
        <Link to="quiz">
          <button className="px-10 py-1 rounded-lg bg-white text-2xl font-semibold tracking-wide">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizHome;
