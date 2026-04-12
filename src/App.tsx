import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Favourites } from "@/components/sections/Favourites";
import { QuizCTA } from "@/components/sections/QuizCTA";
import { Subscription } from "@/components/sections/Subscription";
import { Occasions } from "@/components/sections/Occasions";
import { Features } from "@/components/sections/Features";
import { Journal } from "@/components/sections/Journal";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background-main font-sans w-full text-left overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Favourites />
        <QuizCTA />
        <Subscription />
        <Occasions />
        <Features />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}

export default App;

