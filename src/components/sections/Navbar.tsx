import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const textColor = isHome ? "text-white" : "text-brand-green";
  const linkTextClass = isHome
    ? "text-white hover:text-white/80"
    : "text-text-primary hover:text-brand-green hover:-translate-y-0.5";
  const iconBtnClass = isHome
    ? "text-white hover:text-white/80 hover:bg-white/10"
    : "text-brand-green hover:text-brand-greenHover hover:bg-brand-green/5";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-8 ${textColor}`}
      >
        <div className="flex items-center z-10 gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden rounded-full ${iconBtnClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <Link
            to="/"
            className="font-serif text-2xl font-semibold tracking-wide"
          >
            Sip & Vine
          </Link>
        </div>

        <div
          className={`hidden lg:flex items-center gap-12 text-sm font-medium absolute left-1/2 -translate-x-1/2`}
        >
          <Link
            to="/shop"
            className={`${linkTextClass} transition-all duration-300`}
          >
            Shop
          </Link>
          <Link
            to="/wine-club"
            className={`${linkTextClass} transition-all duration-300`}
          >
            Wine Club
          </Link>
          <Link
            to="/about"
            className={`${linkTextClass} transition-all duration-300`}
          >
            About
          </Link>
          <Link
            to="/journal"
            className={`${linkTextClass} transition-all duration-300`}
          >
            Journal
          </Link>
        </div>

        <div className="flex items-center z-10">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${iconBtnClass}`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </motion.nav>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 z-40 bg-brand-green/95 backdrop-blur-md pt-24 pb-8 px-6 text-white shadow-lg lg:hidden text-center"
          >
            <div className="flex flex-col items-center gap-6 text-lg font-medium">
              <Link
                to="/shop"
                className="hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/wine-club"
                className="hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Wine Club
              </Link>
              <Link
                to="/about"
                className="hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/journal"
                className="hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Journal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
