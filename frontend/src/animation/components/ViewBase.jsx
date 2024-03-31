import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useInView,
} from "framer-motion";

const ViewBase = () => {
  const ref = useRef(null);
  const isView = useInView(ref);
  useEffect(() => {
    console.log(isView);
  }, [isView]);
  return (
    <>
      <div className=" h-[150vh] "></div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 5,
        }}
        className="h-[150vh] bg-black"
      >
        <AnimatePresence>
          <motion.img
            initial={{
              //   scale: 0,
              translateX: -100,
            }}
            whileInView={{
              //   scale: 1,
              translateX: 100,
            }}
            exit={{
              //   scale: 0,
              translateX: -100,
            }}
            transition={{
              duration: 3,
            }}
            src="https://i.pinimg.com/564x/03/9d/d9/039dd9d5714ea8cf4cb473176c30493e.jpg"
            alt="randomImage"
            className="w-[230px] h-[400px] object-contain mx-auto"
          />
        </AnimatePresence>
      </motion.div>
      <motion.div
        ref={ref}
        className={`h-[150vh] ${isView ? "bg-red-500" : "bg-blue-500"}`}
      ></motion.div>
    </>
  );
};

export default ViewBase;
