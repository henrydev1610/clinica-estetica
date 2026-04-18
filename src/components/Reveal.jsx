import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  distance = 24,
  amount = 0.2,
  margin = "0px 0px -14% 0px",
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount, margin });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    if (inView) {
      controls.start("visible");
      return;
    }

    controls.start("hidden");
  }, [controls, inView, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: distance,
          filter: "blur(2px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
