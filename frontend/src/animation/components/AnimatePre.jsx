import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatePre = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <motion.button
        layout
        onClick={() => {
          setClick(!click);
        }}
        className="px-5 py-1 mt-8 bg-green-500 text-white"
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {click && (
          <motion.div
            initial={{
              rotate: "0deg",
              backgroundColor: "red",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 4,
              ease: "circInOut",
              times: [0, 1, 1, 1, 0],
            }}
            animate={{
              rotate: "360deg",
              backgroundColor: "pink",
              scale: 1,
              y: [0, 150, -150, 200, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            className="w-[100px] h-[100px] bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatePre;
