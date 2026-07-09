import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Users, Wine, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
  targetNum: number;
  suffix: string;
  maxProgress: number; // reference for bar/circle drawing
}

export function Features() {
  const features: Feature[] = [
    {
      title: "Organic Farm",
      desc: "All our vines are tended using organic practices, ensuring healthy soil and expressive fruit without synthetic chemicals.",
      icon: <Sprout className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform" />,
      targetNum: 100,
      suffix: "%",
      maxProgress: 100
    },
    {
      title: "Independent Producers",
      desc: "We partner exclusively with small, family-owned producers committed to traditional methodologies and sustainability.",
      icon: <Users className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform" />,
      targetNum: 48,
      suffix: "+",
      maxProgress: 60
    },
    {
      title: "Organic Grapes",
      desc: "Every bottle is crafted with certified organic grapes, reflecting the pure characteristics of its original terroir.",
      icon: <Wine className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform" />,
      targetNum: 12,
      suffix: " types",
      maxProgress: 12
    },
    {
      title: "Micro Winemaking",
      desc: "Employing micro-winemaking, hand-crafting premium wines in small, meticulously controlled seasonal batches.",
      icon: <RefreshCw className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform" />,
      targetNum: 1500,
      suffix: " cases",
      maxProgress: 2000
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background-main/40 relative z-10 border-b border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary font-medium block mb-3 font-sans">
              Our Methods
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary leading-tight">
              Low intervention. <br/> High vibration.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mt-6 lg:mt-0"
          >
            <Magnetic range={40}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" className="rounded-full border-text-primary text-text-primary hover:bg-text-primary hover:text-background-main px-10 h-13 font-medium text-sm">
                  About Us
                </Button>
              </motion.div>
            </Magnetic>
          </motion.div>
        </div>

        {/* Feature Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <FeatureCard key={feat.title} feat={feat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feat, index }: { feat: Feature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-100px" });

  // 3D Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // range: -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // range: -0.5 to 0.5
    setTilt({ x: x * 12, y: y * -12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Count up logic
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = feat.targetNum;
      const duration = 1800; // 1.8 seconds duration
      const steps = 60;
      const stepValue = end / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const nextVal = Math.min(Math.round(stepValue * currentStep), end);
        setCount(nextVal);
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, feat.targetNum]);

  // Circle path length constants
  const r = 26;
  const strokeDash = 2 * Math.PI * r;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay: index * 0.1 }}
      animate={{
        rotateX: tilt.y,
        rotateY: tilt.x,
        transformPerspective: 800,
      }}
      className="bg-white border border-border/40 p-8 rounded-[2rem] shadow-soft hover:shadow-card flex flex-col justify-between cursor-pointer select-none transition-shadow duration-500 h-full min-h-[380px]"
    >
      <div className="flex flex-col gap-6">
        {/* Animated Icon Container */}
        <div className="w-14 h-14 rounded-2xl bg-brand-green/5 flex items-center justify-center self-start">
          <motion.div
            whileHover={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 0.6 }}
          >
            {feat.icon}
          </motion.div>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-medium text-text-primary mb-3">
            {feat.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed font-sans">
            {feat.desc}
          </p>
        </div>
      </div>

      {/* Progress Indicators & Statistics */}
      <div className="mt-8 pt-6 border-t border-border/30">
        {index % 2 === 0 ? (
          /* Circular indicator */
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r={r}
                  stroke="var(--color-background-beige)"
                  strokeWidth="3.5"
                  fill="transparent"
                />
                <motion.circle
                  cx="28"
                  cy="28"
                  r={r}
                  stroke="var(--color-brand-green)"
                  strokeWidth="3.5"
                  fill="transparent"
                  strokeDasharray={strokeDash}
                  initial={{ strokeDashoffset: strokeDash }}
                  animate={inView ? { strokeDashoffset: strokeDash * (1 - feat.targetNum / feat.maxProgress) } : {}}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-brand-green">
                {count}{feat.suffix}
              </span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold font-sans">
                Verified Ratio
              </span>
            </div>
          </div>
        ) : (
          /* Linear indicator */
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-end text-sm">
              <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold font-sans">
                Scale Matrix
              </span>
              <span className="font-serif text-xl font-semibold text-brand-green">
                {count}{feat.suffix}
              </span>
            </div>
            <div className="w-full h-[5px] bg-background-beige rounded-full overflow-hidden relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-brand-green rounded-full"
                initial={{ width: "0%" }}
                animate={inView ? { width: `${(feat.targetNum / feat.maxProgress) * 100}%` } : {}}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

