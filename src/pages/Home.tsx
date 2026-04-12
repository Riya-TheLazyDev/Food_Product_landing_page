import { Hero } from "@/components/sections/Hero";
import { Favourites } from "@/components/sections/Favourites";
import { QuizCTA } from "@/components/sections/QuizCTA";
import { Subscription } from "@/components/sections/Subscription";
import { Occasions } from "@/components/sections/Occasions";
import { Features } from "@/components/sections/Features";
import { Journal } from "@/components/sections/Journal";

export default function Home() {
  return (
    <>
      <Hero />
      <Favourites />
      <QuizCTA />
      <Subscription />
      <Occasions />
      <Features />
      <Journal />
    </>
  );
}
