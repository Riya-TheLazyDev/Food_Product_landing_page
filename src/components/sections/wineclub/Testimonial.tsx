import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="py-24 px-6 bg-background-beige text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 md:gap-12"
        >
          <button className="hidden sm:flex w-10 h-10 rounded-full border border-border items-center justify-center text-text-secondary hover:bg-border/50 transition-colors shrink-0">
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-primary leading-tight">
            "Obsessed with all three bottles I got this month. So delicious, and the cutest labels, too!"
          </h2>

          <button className="hidden sm:flex w-10 h-10 rounded-full border border-border items-center justify-center text-text-secondary hover:bg-border/50 transition-colors shrink-0">
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
        
        <div className="flex gap-4 sm:hidden mt-8">
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/50 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/50 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mt-10">
          LUCY FROM SAN FRANCISCO
        </span>
      </div>
    </section>
  );
}
