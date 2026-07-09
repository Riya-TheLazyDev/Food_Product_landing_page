import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

interface Product {
  id: string;
  name: string;
  year: string;
  price: string;
  image: string;
  color: string; // Tailored HSL colors
  bgColor: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Pet Nat Rose",
    year: "2023",
    price: "$28",
    image: "/images/product_1.png",
    color: "bg-[#EAD6C4]",
    bgColor: "bg-accent-peach/20"
  },
  {
    id: "2",
    name: "Red Blend Field Trip",
    year: "2023",
    price: "$32",
    image: "/images/product_2.png",
    color: "bg-[#CFE3D6]",
    bgColor: "bg-brand-green/10"
  },
  {
    id: "3",
    name: "Verdello",
    year: "2023",
    price: "$26",
    image: "/images/product_1.png",
    color: "bg-[#E8DFAF]",
    bgColor: "bg-accent-yellow/20"
  },
  {
    id: "4",
    name: "The Light Work",
    year: "Orange Field Blend 2023",
    price: "$30",
    image: "/images/product_2.png",
    color: "bg-[#CFE3D6]",
    bgColor: "bg-accent-botanical/30"
  }
];

export function Favourites() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background-main/30 relative z-10 border-b border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary font-medium block mb-2 font-sans">Shop Now</span>
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary">Our Favourites Right Now</h2>
          </motion.div>
          <div className="flex gap-3">
            <Magnetic range={35}>
              <button className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/40 transition-colors cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </Magnetic>
            <Magnetic range={35}>
              <button className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/40 transition-colors cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <FavouriteCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FavouriteCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    if (isHovered) {
      const generated = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 120,
        y: -Math.random() * 50 - 20,
        delay: Math.random() * 0.45,
        size: Math.random() * 4.5 + 2.5
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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.12 }}
      className="flex flex-col group shine-sweep-container bg-white border border-border/40 rounded-[2rem] p-4 shadow-soft hover:shadow-card transition-shadow duration-500 h-full"
    >
      <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden ${product.bgColor} mb-5 flex items-center justify-center p-6 bg-white transition-transform duration-500`}>
        {/* Spinning blob shape background */}
        <div 
          className={`absolute w-36 h-36 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-40 mix-blend-multiply ${product.color} animate-[spin_12s_linear_infinite] group-hover:scale-110 transition-transform duration-700`} 
          style={{ animationDuration: `${12 + index * 2.5}s` }}
        />

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

        <img 
          src={product.image} 
          alt={product.name}
          className="h-52 object-contain relative z-10 filter drop-shadow-md transition-transform duration-700 ease-out group-hover:scale-108 group-hover:-rotate-3"
        />
      </div>

      <div className="text-center px-2 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-medium text-text-primary group-hover:text-brand-green transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-text-secondary mb-3 mt-1 h-10 line-clamp-2">
            {product.year}
          </p>
          <p className="text-serif text-lg font-semibold text-text-primary mb-4">
            {product.price}
          </p>
        </div>

        {/* Morphing Add to Cart Button */}
        <motion.div 
          className="relative overflow-hidden rounded-full mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-brand-green hover:bg-brand-greenHover text-white rounded-full py-6 transition-all duration-500 relative overflow-hidden group-hover:bg-brand-greenHover border-none">
            <span className="relative z-10">Add to Cart</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-greenSoft/20 to-accent-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

