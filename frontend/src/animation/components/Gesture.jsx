import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const GestureA = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <motion.button
        // whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 1.15, rotate: "4deg" }}
        transition={{
          duration: 1,
        }}
        className="px-5 py-1 mt-8 bg-green-500 text-white"
      >
        Show/Hide
      </motion.button>
    </div>
  );
};

export default GestureA;
