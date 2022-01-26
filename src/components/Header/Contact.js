import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const initialAnimationState = { x: "-100vw" };

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();

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
        className="text-5xl font-semibold leading-snug -tracking-wide"
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
        <div className="text-4xl font-semibold">5.5</div>
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
