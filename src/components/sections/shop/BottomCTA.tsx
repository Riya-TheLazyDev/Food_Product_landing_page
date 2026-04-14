import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Vineyard"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-2xl px-6 text-center text-white">
        <span className="text-xs uppercase tracking-[0.3em] font-medium mb-6 block">
          Join the movement
        </span>
        <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
          Discover natural wines that do right by your palate and the planet
        </h2>
        <Button className="bg-brand-green hover:bg-brand-greenHover text-white px-10 py-8 text-lg rounded-full transition-all hover:scale-105">
          Join the club
        </Button>
      </div>
    </div>
  );
}
