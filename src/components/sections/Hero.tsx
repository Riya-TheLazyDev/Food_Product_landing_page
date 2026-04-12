import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_bg.png')` }}
      />
      <div className="absolute inset-0 bg-black/20" /> {/* Soft overlay */}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center"
        >
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase mb-4">
            Curated Selection
          </span>
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-medium mb-8 leading-tight">
            Wine and botanical brews that are good for the soul and good for the soil
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button size="lg" className="bg-brand-green hover:bg-brand-greenHover text-white border-none shrink-0 px-10">
              Shop wine
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm px-10">
              Take quiz
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
