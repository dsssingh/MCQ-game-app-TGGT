import { useEffect, useState } from "react";
import { quizData } from "./QuizData";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./Results";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = quizData.length;
  
  const [timeLeft, setTimeLeft] = useState(10);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const sharedProps = {
    question: quizData[currentQuestionIndex],
    onAnswer: handleAnswer,
    timeLeft: timeLeft,
    setTimeLeft: setTimeLeft,
    currentIndex: currentQuestionIndex,
    setCurrentIndex: setCurrentQuestionIndex,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Decrement the timer
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }

      // If time is up, submit the current question
    }, 1000);

    // Clean up the timer on unmount or when the quiz is complete
    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestionIndex]);

 
 

  return (
    <div className="mt-[80px] pt-16 flex items-center justify-center ">
      <div className=" p-6 rounded-lg shadow-2xl w-[90%] md:w-[50%] border changebg">
        {currentQuestionIndex < quizData.length ? (
          <div className="">
            <div className="flex justify-between items-center  border-b-2 pb-3">
              <p className="  font-bold text-2xl ">
                {currentQuestionIndex + 1} of {totalQuestions}
              </p>
              <p
                className={`${
                  timeLeft >= 4 ? "darkText" : "text-red-600"
                } font-bold text-3xl `}
              >
                {timeLeft}
              </p>
            </div>
            <QuizQuestion
             {...sharedProps}
            />
          </div>
        ) : (
          <QuizResult
            score={score}
            totalQuestions={totalQuestions}
          ></QuizResult>
        )}
      </div>
    </div>
  );
};

export default Questions;
