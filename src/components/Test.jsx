import { useState, useEffect } from "react";

const questions = [
  "In the last month, how often have you been upset because of something that happened unexpectedly?",
  "In the last month, how often have you felt that you were unable to control the important things in your life?",
  "In the last month, how often have you felt nervous and stressed?",
  "In the last month, how often have you felt confident about your ability to handle your personal problems?",
  "In the last month, how often have you felt that things were going your way?",
  "In the last month, how often have you found that you could not cope with all the things that you had to do?",
  "In the last month, how often have you been able to control irritations in your life?",
  "In the last month, how often have you felt that you were on top of things?",
  "In the last month, how often have you been angered because of things that happened that were outside of your control?",
  "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?"
];

const reverseScoredQuestions = [3, 4, 6, 7];
const options = ["Never", "Almost Never", "Sometimes", "Fairly Often", "Very Often"];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [savedResult, setSavedResult] = useState(null);

  // Load previous test result from localStorage
  useEffect(() => {
    const storedResult = localStorage.getItem("stressResult");
    if (storedResult) {
      setSavedResult(JSON.parse(storedResult));  // Show saved result
      setShowResults(true);
    }
  }, []);

  const handleAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== null) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const resultScore = calculateScore();
        let stressLevel = "";
        if (resultScore <= 13) {
          stressLevel = "Low Stress";
        } else if (resultScore > 13 && resultScore <= 26) {
          stressLevel = "Moderate Stress";
        } else {
          stressLevel = "High Stress";
        }

        // Save test result in localStorage
        const resultData = { resultScore, stressLevel, date: new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}) };
        localStorage.setItem("stressResult", JSON.stringify(resultData));

        setSavedResult(resultData);
        setShowResults(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    answers.forEach((score, index) => {
      if (reverseScoredQuestions.includes(index)) {
        totalScore += 4 - score;
      } else {
        totalScore += score;
      }
    });
    return totalScore;
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setSavedResult(null);
    localStorage.removeItem("stressResult");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#060913] p-4">
      {!showResults ? (
        <div className="bg-[#1d020e] p-6 rounded-xl shadow-lg max-w-md text-center border-2 border-[#db0f6b] text-white">
          <h2 className="text-lg font-semibold mb-4">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{questions[currentQuestion]}</p>
          <p className="mb-4 text-red-700">{answers[currentQuestion] == null ? "Please Answer the question" : " "}</p>
          <div className="flex flex-col gap-2">
            {options.map((option, index) => (
              <button
                key={index}
                className={` px-4 py-2 rounded-lg transition-colors ${answers[currentQuestion] === index ? "bg-blue-500 text-white" : "bg-[#020e1d]"}`}
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-[#041b11] text-white rounded-lg border-1 border-[#0db66a] m-2 cursor-pointer"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#041b11] border-1 border-[#0db66a] text-white rounded-lg m-2 cursor-pointer"
              disabled={answers[currentQuestion] === null}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#1d020e] border-1 border-[#db07a3] p-6 rounded-xl shadow-lg max-w-md text-center">
          <h2 className="text-lg font-semibold mb-4 text-amber-50">Your Stress Level: {savedResult?.stressLevel}</h2>
          <p className="text-gray-300">Last Test Date: {savedResult?.date}</p>
          <button
            onClick={handleRestart}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
