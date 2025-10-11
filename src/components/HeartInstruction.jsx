import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeartInstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-amber-50">
          <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">📖 How to Use the Stress Detector</h1>
    
          {/* Step 1 */}
          <div className="bg-[#020e1d] p-6 rounded-2xl shadow-md mb-6 border-4 border-[#0f6bdb]">
            <h2 className="text-2xl font-semibold mb-2">🧑‍💻 Step 1: Sign Up with Google</h2>
            <p className="text-gray-300">
              For a seamless experience, sign up using your Google account. This helps us fetch real-time health data from your Google Fit account linked to your smartwatch or fitness band.
            </p>
          </div>
    
          {/* Step 2 */}
          <div className="bg-[#021d08] p-6 rounded-2xl shadow-md mb-6 border-4 border-green-400">
            <h2 className="text-2xl font-semibold mb-2">⌚ Step 2: Connect Your Smartwatch</h2>
            <p className="text-gray-300">
              Ensure your smartwatch (like Fitbit, Galaxy Watch, Mi Band, etc.) is synced with the <b>Google Fit app</b> on your phone.
              <br />
              Most watches allow you to enable syncing via their native app (like Zepp, Fitbit app, etc.).
            </p>
          </div>
    
          {/* Step 3 */}
          <div className="bg-[#021b1d] p-6 rounded-2xl shadow-md mb-6 border-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-2">📊 Step 3: How Stress is Calculated</h2>
            <p className="text-gray-300">
              Our app uses a machine learning model trained on heart rate data to predict mental stress. Here&lsquo;s the basic logic:
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-300">
              <li><b>Low Heart Rate (60–70 bpm)</b> → Calm/Low Stress 😌</li>
              <li><b>Moderate Heart Rate (70–85 bpm)</b> → Slightly Alert/Medium Stress 😐</li>
              <li><b>High Heart Rate (85+ bpm)</b> → High Stress 😖</li>
            </ul>
            <p className="text-gray-400 mt-3 italic">
              Note: This prediction is based on general trends and may vary based on your activity & body type.
            </p>
          </div>
    
          {/* CTA */}
          <div className="text-center mt-10">
           <Link to="/check-stress">
           <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300 cursor-pointer">
                Start Checking Your Stress 💓
            </button>
           </Link>
          </div>
        </div>
      );
}

export default HeartInstruction
