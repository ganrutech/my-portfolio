import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const initialAnimationState = { x: "-100vw" };

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  let dt1 = new Date(2016, 9, 16);
  let dt2 = new Date();

  function diffYears(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  }

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        x: 0,
        transition: { ease: "easeOut", duration: i * 1 },
      }));
    }
    if (!inView) {
      controls.start(initialAnimationState);
    }
  });

  return (
    <div
      ref={ref}
      className="flex-shrink-0 z-10 w-2/3 h-full flex flex-col justify-between"
    >
      <motion.div
        custom={1}
        initial={initialAnimationState}
        animate={controls}
        className="text-3xl xl:text-5xl font-semibold leading-snug -tracking-wide"
      >
        <p>Hey There,</p>
        <p>I'm Guruprakash</p>
      </motion.div>

      <motion.p
        custom={1.2}
        initial={initialAnimationState}
        animate={controls}
        className="text--orange underline cursor-pointer"
      >
        ganrutech@gmail.com
      </motion.p>

      <motion.div
        custom={1.4}
        initial={initialAnimationState}
        animate={controls}
        className="flex items-center space-x-2"
      >
        <div className="text-4xl font-semibold">{diffYears(dt1, dt2)}</div>
        <div className="font-medium leading-tight uppercase">
          Years
          <br />
          Experience
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
