import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Break text into words for stagger mask reveal
  const headlineWords = "Wine and botanical brews that are good for the soul and good for the soil".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Image with Scroll-Linked Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('/images/hero_bg.png')`,
          y: bgY
        }}
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-0" />

      {/* Centered Content Container */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-3xl flex flex-col items-center"
      >
        {/* Subtext Tag */}
        <div className="overflow-hidden mb-4">
          <motion.span 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-white/90 text-sm font-medium tracking-[0.25em] uppercase block font-sans"
          >
            Curated Selection
          </motion.span>
        </div>

        {/* Headline Reveal Mask */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium mb-8 leading-tight max-w-2xl select-none">
          {headlineWords.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden mr-[0.22em] py-0.5">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.85, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: 0.8 + index * 0.03 
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Magnetic CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
        >
          <Magnetic range={50}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="bg-brand-green hover:bg-brand-greenHover text-white border-none shrink-0 px-10 h-14 hover-glow text-base">
                Shop Wine
              </Button>
            </motion.div>
          </Magnetic>
          
          <Magnetic range={50}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm px-10 h-14 text-base">
                Take Quiz
              </Button>
            </motion.div>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}

