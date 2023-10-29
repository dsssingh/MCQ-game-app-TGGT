import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  console.log(props);
  const { score, totalQuestions } = props;
  // score, totalQuestions, course

  useEffect(() => {
    // Fetch data from the API
    fetch("https://spoken-english-server-xi.vercel.app/courses")
      .then((response) => response.json())

      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const percentage = ((score / totalQuestions) * 100).toFixed(2);
  return (
    <div className="bg-white p-4 rounded-md changebg">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-4">Quiz Result</h2>
        <p className="">Your scored </p>
        <p className="text-4xl mb-4">
          <span className={`${score >= 5 ? "text-green-500" : "text-red-600"}`}>
            {score}
          </span>
          /{totalQuestions}
        </p>

      
          <div className="flex flex-col justify-center items-center border-t-2">
            <p className="text-red-600 mb-3 pt-2">
              <button className="py-2 px-3 font-bold"><Link to={"/"}>Try Again</Link></button>
            </p>
            
          </div>
       
      </div>
    </div>
  );
};

export default Results;
