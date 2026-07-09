import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const bgColors = [
    "bg-accent-yellow/20",
    "bg-accent-botanical/20",
    "bg-accent-peach/20",
    "bg-brand-greenSoft/10",
  ];

  const bgColor = bgColors[parseInt(product.id) % bgColors.length];
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number; size: number }[]>([]);

  // Generate floating particles near the bottle when hovered
  useEffect(() => {
    if (isHovered) {
      const generated = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 120, // horizontal drift
        y: -Math.random() * 50 - 20,    // upward drift
        delay: Math.random() * 0.5,
        size: Math.random() * 5 + 3     // random dot sizes
      }));
      setParticles(generated);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group border border-border/60 rounded-[2rem] p-5 shadow-soft hover:shadow-card transition-shadow duration-500 bg-white shine-sweep-container flex flex-col justify-between h-full"
    >
      {/* Image Section */}
      <div
        className={`relative h-64 rounded-2xl ${bgColor} flex items-center justify-center overflow-hidden mb-5`}
      >
        {/* Abstract Shape with spinning animation on hover */}
        <div className="absolute inset-0 opacity-30 group-hover:scale-110 transition-transform duration-700">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-36 h-36 fill-current text-white/60 animate-[spin_25s_linear_infinite]"
          >
            <path
              d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.8C85.2,-30.2,89.5,-15.1,88.7,-0.5C87.8,14.1,81.8,28.2,73.4,41.1C65.1,54,54.4,65.7,41.5,73.1C28.6,80.5,14.3,83.7,-0.7,84.9C-15.7,86.1,-31.4,85.3,-45.3,78.9C-59.2,72.5,-71.4,60.5,-79.1,46.5C-86.8,32.5,-90.1,16.2,-89.4,0.4C-88.7,-15.4,-84.1,-30.8,-75.4,-43.9C-66.7,-57,-53.9,-67.7,-40,-74.5C-26.1,-81.3,-13.1,-84.2,0.8,-85.6C14.7,-87,29.3,-86.9,44.7,-82.6L44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Floating Sparks Particles */}
        {isHovered &&
          particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
              animate={{
                opacity: [0, 0.75, 0],
                scale: [0.6, 1.2, 0.4],
                y: p.y - 25,
                x: p.x,
              }}
              transition={{
                duration: 1.6,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute rounded-full bg-brand-greenSoft/50 pointer-events-none z-10"
              style={{
                width: p.size,
                height: p.size,
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

        {/* Product Image reacts to card hover */}
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 h-52 object-contain transition-transform duration-700 ease-out group-hover:scale-108 group-hover:-rotate-2"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-medium text-text-primary mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-text-secondary mb-4">
          {product.region} • {product.style}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-serif text-lg font-semibold text-text-primary">
            ${product.price}
          </span>
        </div>

        {/* Smooth Morphing Button with Glow on Hover */}
        <motion.div 
          className="relative overflow-hidden rounded-full mt-5"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-brand-green hover:bg-brand-greenHover text-white rounded-full py-6 transition-all duration-500 relative overflow-hidden group-hover:bg-brand-greenHover hover:shadow-md border-none">
            <span className="relative z-10">Add to Cart</span>
            {/* Subtle glow layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-greenSoft/20 to-accent-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

