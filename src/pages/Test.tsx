import { useStore, questions } from "../store/UseStore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Test() {
  const { answers, currentQuestion, setAnswer, nextQuestion, prevQuestion, score, calculateScore } = useStore();

  const getStressLevel = (): string => {
    if (score === null) return "";
    if (score <= 13) return "Low Stress";
    if (score <= 26) return "Moderate Stress";
    return "High Stress";
  };

  // Prepare data for chart
  const chartData = [
    { name: "Your Score", value: score || 0 },
    { name: "Low Stress", value: 13 },
    { name: "Moderate Stress", value: 26 },
    { name: "High Stress", value: 40 },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-24 text-black">
      <h1 className="text-2xl font-bold text-center mb-4">Perceived Stress Questionnaire</h1>
      
      {/* Rating Scale Legend */}
      <div className="mb-4 p-3 border rounded-lg bg-gray-100 text-sm">
        <p className="font-semibold">Response Scale:</p>
        <ul className="list-none space-y-1">
          <li><strong>0</strong> = Never</li>
          <li><strong>1</strong> = Almost Never</li>
          <li><strong>2</strong> = Sometimes</li>
          <li><strong>3</strong> = Fairly Often</li>
          <li><strong>4</strong> = Very Often</li>
        </ul>
      </div>

      {score === null ? (
        <>
          {/* Question */}
          <p className="font-medium mb-4">{questions[currentQuestion]}</p>

          {/* Answer Options */}
          <div className="flex space-x-4">
            {[0, 1, 2, 3, 4].map((value) => (
              <label key={value} className="flex flex-col items-center space-y-1">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={value}
                  checked={answers[currentQuestion] === value}
                  onChange={() => setAnswer(currentQuestion, value)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{value}</span>
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button onClick={prevQuestion} disabled={currentQuestion === 0} className="px-4 py-2 bg-gray-400 rounded">
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button onClick={nextQuestion} className="px-4 py-2 bg-blue-500 text-white rounded">
                Next
              </button>
            ) : (
              <button onClick={calculateScore} className="px-4 py-2 bg-green-500 text-white rounded">
                Calculate Score
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Show stress level */}
          <h2 className="text-xl font-bold text-center mt-6">Your Stress Level: {getStressLevel()}</h2>

          {/* Bar Chart Visualization */}
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Restart Button */}
          <button
            onClick={() => window.location.reload()} // Simple reload to restart
            className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded"
          >
            Retake Test
          </button>
        </>
      )}
    </div>
  );
}
