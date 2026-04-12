import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ProductCard({ product }: { product: Product }) {
  // Mock abstract shapes based on id or category
  const bgColors = ["bg-accent-yellow/20", "bg-accent-botanical/20", "bg-accent-peach/20", "bg-blue-100/40"];
  const bgColor = bgColors[parseInt(product.id) % bgColors.length];

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group flex flex-col bg-white rounded-2xl p-4 border border-transparent hover:border-brand-green/10 hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className={`relative h-64 rounded-xl ${bgColor} flex items-center justify-center overflow-hidden mb-4`}>
        {/* Abstract shape background */}
        <div className="absolute inset-0 opacity-40">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-32 h-32 fill-current text-white/50 animate-pulse">
            <path d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.8C85.2,-30.2,89.5,-15.1,88.7,-0.5C87.8,14.1,81.8,28.2,73.4,41.1C65.1,54,54.4,65.7,41.5,73.1C28.6,80.5,14.3,83.7,-0.7,84.9C-15.7,86.1,-31.4,85.3,-45.3,78.9C-59.2,72.5,-71.4,60.5,-79.1,46.5C-86.8,32.5,-90.1,16.2,-89.4,0.4C-88.7,-15.4,-84.1,-30.8,-75.4,-43.9C-66.7,-57,-53.9,-67.7,-40,-74.5C-26.1,-81.3,-13.1,-84.2,0.8,-85.6C14.7,-87,29.3,-86.9,44.7,-82.6L44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <img 
          src={product.image} 
          alt={product.name}
          className="relative z-10 h-52 object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-medium text-text-primary mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-text-secondary mb-3">
          {product.region} • {product.style}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold text-text-primary">${product.price}</span>
        </div>
        
        <Button className="w-full mt-4 bg-brand-green hover:bg-brand-greenHover text-white rounded-full py-6 transition-colors duration-300">
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}
