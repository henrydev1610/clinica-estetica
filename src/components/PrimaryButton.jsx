import { motion, useReducedMotion } from "framer-motion";

export default function PrimaryButton({
  children,
  variant = "gold",
  href,
  onClick,
  type = "button",
}) {
  const shouldReduceMotion = useReducedMotion();
  const className = `btn ${variant === "outline" ? "btn-outline" : "btn-gold"}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={className}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
