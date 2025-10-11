import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Instruction = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 font-[SourGummy]">

      <motion.div
        className="p-10 m-4 rounded-br-4xl shadow-2xl max-w-3xl w-full text-center bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 200%", 
        }}
      >
        <h1 className="text-4xl font-extrabold mb-6">Perceived Stress Questionnaire</h1>
        
        <p className="text-lg  leading-relaxed">
          <span className="text-white font-bold">The Perceived Stress Scale (PSS)</span> is a classic stress assessment instrument. 
          The tool, originally developed in 1983, remains widely used for evaluating how different situations impact our stress perception. 
          Answer each question based on how often you felt or thought a certain way in the last month. 
          Try to answer quickly without overanalyzing.
        </p>

        <h2 className="text-xl text-amber-300 font-semibold mt-6">Choose from the following options:</h2>
        <p className="text-lg text-gray-800 mt-2">0 - Never | 1 - Almost Never | 2 - Sometimes | 3 - Fairly Often | 4 - Very Often</p>

        <div className="flex justify-center mt-8">
        <Link to="/test">
        <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-black text-2xl font-bold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            Take Test
          </button>
        </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Instruction;
