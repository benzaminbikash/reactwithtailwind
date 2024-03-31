import React from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

const FlipC = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <motion.button
        onClick={handleClick}
        className="px-5 w-[100px] py-1 mb-8 bg-green-500 text-white"
      >
        Flip It
      </motion.button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
          exit: {
            rotate: "0deg",
          },
        }}
        // whileHover="flip"
        initial="initial"
        animate={controls}
        transition={{
          duration: 4,
        }}
        className="w-[100px] h-[100px] bg-black"
      ></motion.div>
    </div>
  );
};

export default FlipC;
