import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Home from "@/pages/Home";
import WineClub from "@/pages/WineClub";
import Shop from "@/pages/Shop";
import About from "@/pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-main font-sans w-full text-left overflow-x-hidden flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wine-club" element={<WineClub />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
