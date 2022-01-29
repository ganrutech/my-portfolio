import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimationIcon = (props) => {
  const { children, position, inView } = props;
  const initial = { x: position, scale: 0.1 };
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        x: 0,
        scale: 1,
        transition: { ease: "easeOut", duration: 1 },
      }));
    }
    if (!inView) {
      controls.start(initial);
    }
  });

  return (
    <motion.div custom={1} initial={initial} animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimationIcon;
