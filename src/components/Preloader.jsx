import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const words = ["Breath", "Relax", "Enjoy"];
  const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < words.length - 1) {
    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 1000);
    return () => clearTimeout(timer);
  } else {
    const timer = setTimeout(onFinish, 1000);
    return () => clearTimeout(timer);
  }
}, [index, words.length, onFinish]);


  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <motion.h1
        key={index} 
        className="text-8xl font-extrabold bg-clip-text text-transparent font-[Quicksand]"
        style={{
          background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.h1>
    </div>
  );
};

Preloader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default Preloader;
