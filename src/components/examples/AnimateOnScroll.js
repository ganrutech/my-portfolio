import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateOnScroll = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start((i) => ({
        x: 0,
        transition: {
          type: "spring",
          duration: i * 1,
          bounce: 0.2,
        },
      }));
    }
    if (!inView) {
      animate.start({
        x: "-100vw",
      });
    }
  });

  return (
    <div
      ref={ref}
      className="w-full h-[600px] bg-white p-10 flex flex-col space-y-4"
    >
      <motion.div
        custom={1}
        animate={animate}
        className="p-10 border-2 border-gray-600 rounded-xl bg-emerald-200"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        error exercitationem esse doloremque. Libero tenetur explicabo adipisci
        quae. A quae deleniti deserunt itaque repudiandae cum, temporibus
        mollitia similique at molestiae?
      </motion.div>

      <motion.div
        custom={2}
        animate={animate}
        className="p-10 border-2 border-gray-600 rounded-xl bg-emerald-200"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        error exercitationem esse doloremque. Libero tenetur explicabo adipisci
        quae. A quae deleniti deserunt itaque repudiandae cum, temporibus
        mollitia similique at molestiae?
      </motion.div>
    </div>
  );
};

export default AnimateOnScroll;
