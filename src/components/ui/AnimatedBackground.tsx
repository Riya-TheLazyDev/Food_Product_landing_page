import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Repeating fine grain paper texture overlay */}
      <div className="noise-overlay" />

      {/* Slowly moving, morphing ambient mesh gradients */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full bg-accent-peach/25 blur-[100px]"
        initial={{ x: "-10%", y: "15%", scale: 1 }}
        animate={shouldReduceMotion ? {} : {
          x: ["-10%", "20%", "-10%"],
          y: ["15%", "40%", "15%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[55vw] h-[55vw] rounded-full bg-accent-yellow/15 blur-[120px] right-0 top-[-10%]"
        initial={{ x: "10%", y: "-10%", scale: 1 }}
        animate={shouldReduceMotion ? {} : {
          x: ["10%", "-15%", "10%"],
          y: ["-10%", "20%", "-10%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[45vw] h-[45vw] rounded-full bg-accent-botanical/30 blur-[90px] bottom-[-5%] left-[25%]"
        initial={{ x: "15%", y: "20%", scale: 1 }}
        animate={shouldReduceMotion ? {} : {
          x: ["15%", "-10%", "15%"],
          y: ["20%", "-15%", "20%"],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating ambient light particles */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-[1] overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => {
            const size = Math.random() * 6 + 3;
            const initialLeft = `${Math.random() * 100}%`;
            const initialTop = `${Math.random() * 100}%`;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-brand-greenSoft/10 blur-[0.5px]"
                style={{
                  width: size,
                  height: size,
                  left: initialLeft,
                  top: initialTop,
                }}
                animate={{
                  y: [0, -120 - Math.random() * 120],
                  x: [0, (Math.random() - 0.5) * 40],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 12 + Math.random() * 18,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 8,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
