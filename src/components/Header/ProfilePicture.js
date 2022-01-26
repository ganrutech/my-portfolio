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
        className="absolute left-1/3 bottom-0"
      >
        <img src={Paint} alt="bg" className="w-[530px] opacity-90" />
      </motion.div>
      <motion.div
        custom={1}
        initial={initialAnimationState}
        animate={controls}
        className="absolute z-10 left-1/3 bottom-0"
      >
        <div className="w-1/2">
          <img src={Profile} alt="profile" className="w-[800px]" />
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
