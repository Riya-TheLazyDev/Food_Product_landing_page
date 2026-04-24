import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function BottomCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[600px] w-full flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Vineyard"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-2xl px-6 text-center text-white">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] font-medium mb-6 block"
        >
          Join the movement
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl mb-10 leading-tight"
        >
          Discover natural wines that do right by your palate and the planet
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button className="bg-brand-green hover:bg-brand-greenHover text-white px-10 py-8 text-lg rounded-full transition-all hover:scale-105 active:scale-95">
            Join the club
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
