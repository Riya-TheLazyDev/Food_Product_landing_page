import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1600; // 1.6s simulation
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Ease out the progress count
      const t = currentStep / steps;
      const easedT = 1 - Math.pow(1 - t, 3); // Cubic ease-out
      const nextProgress = Math.min(Math.round(easedT * 100), 100);
      
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          // Allow exit transition to complete before triggering completion callback
          setTimeout(onComplete, 850);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-text-primary text-background-main z-[99999] flex flex-col justify-between p-8 md:p-12 select-none"
        >
          {/* Top Brand details */}
          <div className="flex justify-between items-center text-xs tracking-widest uppercase font-medium text-text-muted/65">
            <span>Sip & Vine</span>
            <span>Est. 2026</span>
          </div>

          {/* Middle Logo & Progress Icon */}
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide font-normal">
                Sip & Vine
              </h1>
              <p className="text-text-muted/60 text-xs md:text-sm uppercase tracking-[0.25em] mt-3">
                Organic brews for the soul & soil
              </p>
            </motion.div>

            {/* Drawing Emblem */}
            <div className="w-16 h-20 text-brand-greenSoft mb-6">
              <svg viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <motion.path 
                  d="M24 2C24 2 12 18 12 36C12 50 24 60 24 60C24 60 36 50 36 36C36 18 24 2 24 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="24" 
                  cy="20" 
                  r="6" 
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />
              </svg>
            </div>
          </div>

          {/* Bottom Progress details */}
          <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
            <div className="flex justify-between items-end text-sm tracking-wide font-medium">
              <span className="text-xs uppercase text-text-muted/70 tracking-widest font-sans">
                Curating organic selection...
              </span>
              <span className="font-serif text-xl text-brand-greenSoft">{progress}%</span>
            </div>
            
            {/* Progress line */}
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-brand-greenSoft"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
