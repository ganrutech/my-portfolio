import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Components
import UdemyLogo from "../../assets/images/logo-udemy.svg";

const initialAnimationState = { x: "100vw" };

const About = () => {
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
      className="h-full z-10 flex flex-col space-y-8 md:space-y-0 md:justify-around"
    >
      <motion.div
        custom={1}
        initial={initialAnimationState}
        animate={controls}
        className="text--primary text-sm md:text-xl md:text-center"
      >
        <p>Full-Stack</p>
        <p>Web and Mobile Application Developer</p>
      </motion.div>
      <motion.div
        custom={1.2}
        initial={initialAnimationState}
        animate={controls}
        className="md:self-center flex flex-col items-center space-y-2 md:text-center uppercase"
      >
        <img src={UdemyLogo} alt="udemy" width={120} height="auto" />
        <p className="font-medium text-sm md:text-base">
          React JS course certified developer - Associate
        </p>
      </motion.div>
    </div>
  );
};

export default About;
