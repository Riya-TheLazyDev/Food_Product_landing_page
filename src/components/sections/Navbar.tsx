import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white"
    >
      <div className="flex items-center z-10">
        <a href="/" className="font-serif text-2xl font-semibold tracking-wide">
          Sip & Vine
        </a>
      </div>

      <div className="hidden md:flex items-center gap-12 text-sm font-medium absolute left-1/2 -translate-x-1/2">
        <a href="#" className="hover:text-white/80 transition-colors">Shop</a>
        <a href="#" className="hover:text-white/80 transition-colors">Wine Club</a>
        <a href="#" className="hover:text-white/80 transition-colors">About</a>
        <a href="#" className="hover:text-white/80 transition-colors">Journal</a>
      </div>
      
      <div className="flex items-center z-10">
        <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10 rounded-full">
          <ShoppingCart className="w-5 h-5" />
          <span className="sr-only">Cart</span>
        </Button>
      </div>
    </motion.nav>
  );
}
