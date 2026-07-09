import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Track page scroll to toggle glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextColor = scrolled
    ? "text-text-primary"
    : isHome
    ? "text-white"
    : "text-brand-green";

  const iconBtnClass = scrolled
    ? "text-text-primary hover:bg-brand-green/5"
    : isHome
    ? "text-white hover:bg-white/10"
    : "text-brand-green hover:bg-brand-green/5";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-8 transition-all duration-500 ${
          scrolled
            ? "bg-background-main/75 backdrop-blur-md border-b border-border/40 py-3.5 shadow-soft"
            : "bg-transparent"
        } ${navTextColor}`}
      >
        <div className="flex items-center z-50 gap-4">
          <Magnetic range={40} strength={0.4}>
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden rounded-full ${iconBtnClass}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </Magnetic>

          <Magnetic range={50} strength={0.25}>
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-wide"
            >
              Sip & Vine
            </Link>
          </Magnetic>
        </div>

        {/* Desktop Links with layoutId capsule active indicator */}
        <div className="hidden lg:flex items-center gap-2 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {[
            { path: "/shop", label: "Shop" },
            { path: "/wine-club", label: "Wine Club" },
            { path: "/about", label: "About" }
          ].map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Magnetic key={path} range={40} strength={0.3}>
                <Link
                  to={path}
                  className="relative py-2.5 px-5 transition-colors duration-300 text-sm font-medium hover:opacity-85"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        scrolled || !isHome
                          ? "bg-brand-green/10"
                          : "bg-white/15"
                      }`}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  {label}
                </Link>
              </Magnetic>
            );
          })}
        </div>

        <div className="flex items-center z-50">
          <Magnetic range={40} strength={0.4}>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${iconBtnClass}`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Magnetic>
        </div>
      </motion.nav>

      {/* Mobile/Tablet Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 top-0 z-40 bg-brand-green backdrop-blur-lg flex flex-col justify-center items-center gap-8 text-white px-6 shadow-xl lg:hidden overflow-hidden"
          >
            <motion.div
              className="flex flex-col items-center gap-8 text-3xl font-serif"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {[
                { path: "/shop", label: "Shop" },
                { path: "/wine-club", label: "Wine Club" },
                { path: "/about", label: "About" }
              ].map(({ path, label }) => (
                <motion.div
                  key={path}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: { type: "spring", stiffness: 120, damping: 15 },
                    },
                    closed: { y: 25, opacity: 0 },
                  }}
                >
                  <Link
                    to={path}
                    className="hover:text-accent-peach transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

