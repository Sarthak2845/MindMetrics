import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center text-center p-6 mt-16 font-[SourGummy]">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-amber-500 to-pink-500 py-12 px-4 sm:px-8 md:px-12 rounded-bl-4xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Measure Your Stress, Manage Your Well-Being</h1>
        <p className="mt-4 text-base sm:text-lg">Take a scientifically-backed stress test and receive personalized insights to help you manage stress effectively.</p>
      </div>

      {/* CTA Button */}
      <Link to="/instructions" className="mt-8">
        <button className="bg-gradient-to-r from-amber-500 to-pink-500 px-6 py-3 rounded shadow-lg text-lg sm:text-xl hover:from-amber-600 hover:to-pink-600 cursor-pointer">Take the test</button>
      </Link>

      {/* How It Works Section */}
      <section className="mt-12 max-w-4xl text-gray-300 px-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="mt-3">Understanding your stress levels can help you take control of your mental health. Here’s how the test works:</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["📝 Answer 10 Questions", "📊 Get Your Score", "💡 Receive Guidance"].map((title, index) => (
            <div key={index} className="p-4 bg-[#061a12] rounded-lg shadow-md border-2 border-[#0fdb80]">
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm mt-2">{[
                "Quickly respond to simple questions about your stress levels in the past month.",
                "Your answers will generate a stress score from 0-40, categorized as low, moderate, or high stress.",
                "Based on your score, get expert-backed tips on how to manage and reduce stress effectively."
              ][index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Google Fit API Section */}
      <section className="mt-12 max-w-4xl text-gray-300 px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">📡 Integrating Google Fit API</h2>
        <p className="mt-3">
          To enhance stress measurement accuracy, we use the 
          <span className="text-blue-400"> Google Fit API</span> to fetch your heart rate variability (HRV) data from a smartwatch. 
          HRV is a strong indicator of stress levels.
        </p>
        <div className="mt-6 flex justify-center items-center flex-col gap-6 ">
          {["📥 Fetch Heart Rate Data", "📉 Analyze HRV"].map((title, index) => (
            <div key={index} className="p-4 bg-[#020e1d] rounded-lg shadow-md border-2 border-[#0f6bdb]">
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm mt-2">{[
                "Securely connect to Google Fit to fetch real-time heart rate data for better stress assessment.",
                "Higher HRV generally indicates lower stress, while lower HRV suggests higher stress levels."
              ][index]}</p>
            </div>
          ))}
              <Link to="/heart-instruction" className="mt-8">
        <button className="bg-gradient-to-r from-amber-500 to-pink-500 px-6 py-3 rounded shadow-lg text-lg sm:text-xl hover:from-amber-600 hover:to-pink-600 cursor-pointer">Calculate Using Heart Rate</button>
      </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
