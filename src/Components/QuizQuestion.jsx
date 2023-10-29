import React, { useState } from "react";
const QuizQuestion = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {timeLeft,setCurrentIndex,currentIndex,setTimeLeft,onAnswer}=props
  const { question, options, correctAnswer } = props.question;
  console.log(options)
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  if (timeLeft == 0) {
    if (timeLeft == 0) {
       setCurrentIndex(currentIndex + 1);
       setTimeLeft(10);
    }
  }

  const handleSubmit = () => {
    setTimeLeft(10);
    if (selectedOption === correctAnswer) {
        onAnswer(true);
    } else {
        onAnswer(false);
    }
  };
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">{question}</h1>
      <ul className="mt-4">
        {options.map((option, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer ${
              selectedOption === option ? "bg-blue-400 text-white" : "changebg"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default QuizQuestion;
