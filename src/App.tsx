import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Home from "@/pages/Home";
import WineClub from "@/pages/WineClub";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Scroll restoration on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Entry Brand Loader Screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="min-h-screen bg-background-main font-sans w-full text-left overflow-x-hidden flex flex-col relative">
          {/* Shifting Mesh Gradients & Grain paper overlay */}
          <AnimatedBackground />

          {/* Interactive cursor logic (desktop only) */}
          <CustomCursor />

          {/* Frosted Glass Navigation */}
          <Navbar />

          {/* Staggered page transitions */}
          <main className="flex-grow relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/wine-club" element={<WineClub />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

