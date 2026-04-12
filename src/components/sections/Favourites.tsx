import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  year: string;
  price: string;
  image: string;
  color: string;
  bgColor?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Pet Nat Rose",
    year: "2023",
    price: "$28",
    image: "/images/product_1.png",
    color: "accent-peach",
    bgColor: "bg-accent-peach/20"
  },
  {
    id: "2",
    name: "Red Blend Field Trip",
    year: "2023",
    price: "$32",
    image: "/images/product_2.png",
    color: "brand-green",
    bgColor: "bg-brand-green/10"
  },
  {
    id: "3",
    name: "Verdello",
    year: "2023",
    price: "$26",
    image: "/images/product_1.png",
    color: "accent-yellow",
    bgColor: "bg-accent-yellow/20"
  },
  {
    id: "4",
    name: "The Light Work",
    year: "Orange Field Blend 2023",
    price: "$30",
    image: "/images/product_2.png",
    color: "accent-botanical",
    bgColor: "bg-accent-botanical/30"
  }
];

export function Favourites() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-2">Shop Now</span>
            <h2 className="text-3xl font-serif text-text-primary">Our Favourites Right Now</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className={`relative aspect-[4/5] rounded-t-[2rem] overflow-hidden ${product.bgColor} mb-4 flex items-center justify-center p-6 bg-white shadow-soft transition-transform duration-300 group-hover:-translate-y-1`}>
                {/* Decorative shape behind bottle. Using abstract CSS shape */}
                 <div className={`absolute w-40 h-40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-80 mix-blend-multiply bg-${product.color} animate-[spin_10s_linear_infinite]`} style={{ animationDuration: `${10 + index*2}s` }}/>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full object-contain relative z-10 drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center px-2 flex-grow flex flex-col">
                <h3 className="font-serif text-lg font-medium text-text-primary">{product.name}</h3>
                <p className="text-sm text-text-secondary mb-2 h-10">{product.year}</p>
                <p className="text-sm font-medium text-text-primary mb-4">{product.price}</p>
                <Button className="w-full mt-auto rounded-full bg-brand-green hover:bg-brand-greenHover text-white">
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
