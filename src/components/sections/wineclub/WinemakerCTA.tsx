import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function WinemakerCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_bg.png')` }} // Assuming grape background or reusing hero_bg
      />
      <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-xs font-medium tracking-widest uppercase mb-6 drop-shadow-sm">
            WINEMAKER STORIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium mb-10 leading-tight drop-shadow-md">
            Our winemakers make DirtyVine what it is. Hear their stories, straight from the farm.
          </h2>
          <Button size="lg" className="bg-brand-green hover:bg-brand-greenHover text-white px-10 rounded-full h-12">
            READ MORE
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
