import { Button } from "@/components/ui/button";

export function Subscription() {
  return (
    <section className="py-24 px-6 bg-background-beige border-b border-border">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-6">
          Wine Club
        </span>
        <h2 className="text-5xl font-serif text-text-primary mb-10 leading-tight">
          Hand picked and <br/> delivered monthly
        </h2>
        
        <div className="flex justify-center items-center gap-8 mb-10 text-brand-green">
          {/* Abstract SVG shapes mimicking the illustration */}
          <svg width="48" height="64" viewBox="0 0 48 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0C24 0 16 16 16 32C16 48 24 64 24 64C24 64 32 48 32 32C32 16 24 0 24 0Z" />
            <circle cx="24" cy="16" r="8" fill="currentColor"/>
          </svg>
          <svg width="24" height="64" viewBox="0 0 24 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="24" width="8" height="40" rx="2" />
            <path d="M8 24L10 0H14L16 24H8Z" />
          </svg>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C0 24 16 8 24 8C32 8 48 24 48 24C48 24 32 40 24 40C16 40 0 24 0 24Z" />
          </svg>
        </div>

        <p className="text-text-secondary text-lg mb-10 leading-relaxed mx-auto max-w-lg">
          Let us introduce you to your next favorite glass. We'll curate a box of 3, 6, or 12 bottles each month tailored to your tastes and deliver straight to your door.
        </p>

        <Button size="lg" className="bg-brand-green hover:bg-brand-greenHover text-white px-12 h-14 text-base">
          Join the club
        </Button>
      </div>
    </section>
  );
}
