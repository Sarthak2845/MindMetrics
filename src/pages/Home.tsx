import { motion } from "framer-motion";
import { Link } from "react-router";

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen text-white flex flex-col items-center text-center p-6 mt-16"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="w-full bg-gradient-to-r from-amber-500 to-pink-500 py-16 px-6 rounded-bl-4xl shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-white">Measure Your Stress, Manage Your Well-Being</h1>
        <p className="mt-4 text-lg">Take a scientifically-backed stress test and receive personalized insights to help you manage stress effectively.</p>
      </motion.div>
      
      {/* CTA Button */}
      <Link to="/test">
      <motion.button 
        type="button" 
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start the Test
      </motion.button>
      </Link>
      
      {/* How It Works Section */}
      <section className="mt-12 max-w-3xl text-gray-300">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="mt-3">Understanding your stress levels can help you take control of your mental health. Here’s how the test works:</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "📝 Answer 10 Questions", text: "Quickly respond to simple questions about your stress levels in the past month." },
            { title: "📊 Get Your Score", text: "Your answers will generate a stress score from 0-40, categorized as low, moderate, or high stress." },
            { title: "💡 Receive Guidance", text: "Based on your score, get expert-backed tips on how to manage and reduce stress effectively." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-[#061a12] rounded-lg shadow-md border-2 border-[#0fdb80]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Google Fit API Section */}
      <section className="mt-12 max-w-3xl text-gray-300">
        <h2 className="text-2xl font-semibold">📡 Integrating Google Fit API</h2>
        <p className="mt-3">To enhance stress measurement accuracy, we use the <span className="text-blue-400">Google Fit API</span> to fetch your heart rate variability (HRV) data from a smartwatch. HRV is a strong indicator of stress levels.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "📥 Fetch Heart Rate Data", text: "Securely connect to Google Fit to fetch real-time heart rate data for better stress assessment." },
            { title: "📉 Analyze HRV", text: "Higher HRV generally indicates lower stress, while lower HRV suggests higher stress levels." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-[#020e1d] rounded-lg shadow-md border-2 border-[#0f6bdb]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

