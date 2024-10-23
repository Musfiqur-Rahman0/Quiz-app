import React, { useEffect, useState } from "react";

import Quiz from "./Pages/Quiz";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResultPage from "./Pages/ResultPage";
import { QuizProvider } from "./ContextAp/QuizContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "quiz",
      element: <Quiz />,
    },
    {
      path: "result",
      element: <ResultPage />,
    },
  ]);

  return (
    <QuizProvider>
      <RouterProvider router={router}></RouterProvider>
    </QuizProvider>
  );
};

export default App;
