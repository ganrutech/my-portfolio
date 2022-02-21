import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Profile from "../../assets/images/profile.png";
import Paint from "../../assets/images/paint.png";

const initialAnimationState = { y: -200 };

const ProfilePicture = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        y: 0,
        transition: { ease: "easeOut", duration: i * 1 },
      }));
    }
    if (!inView) {
      controls.start(initialAnimationState);
    }
  });

  return (
    <div ref={ref}>
      <motion.div
        custom={1.6}
        initial={initialAnimationState}
        animate={controls}
        className="w-[400px] xl:w-[450px]"
      >
        <img src={Paint} alt="bg" className="opacity-90" />
      </motion.div>
      <motion.div
        custom={1}
        initial={initialAnimationState}
        animate={controls}
        className="w-[350px] xl:w-[400px] absolute bottom-0"
      >
        <img src={Profile} alt="profile" />
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
