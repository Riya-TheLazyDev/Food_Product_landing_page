export function Journal() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background-main border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-4">
            Journal
          </span>
          <h2 className="text-4xl font-serif text-text-primary">
            Fresh reads & recipes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          <div className="group cursor-pointer">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl mb-6">
              <img 
                src="/images/occasion_2.png" // Re-using image due to rate limit 
                alt="Journal entry 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex gap-4 items-center mb-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
              <span className="text-brand-green">Winemaking</span>
              <span>•</span>
              <span>10 Min read</span>
            </div>
            <h3 className="text-2xl font-serif text-text-primary group-hover:text-brand-green transition-colors">
              Meet the winemakers behind the harvest
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl mb-6">
              <img 
                src="/images/hero_bg.png" // Re-using image due to rate limit 
                alt="Journal entry 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex gap-4 items-center mb-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
              <span className="text-accent-yellow">Food pairings</span>
              <span>•</span>
              <span>5 Min read</span>
            </div>
            <h3 className="text-2xl font-serif text-text-primary group-hover:text-brand-green transition-colors">
              Translating the taste of time
            </h3>
          </div>

        </div>
        
        <div className="mt-16 text-center">
            <button className="text-sm font-medium border-b border-text-primary pb-1 hover:text-brand-green hover:border-brand-green transition-colors">
                View all
            </button>
        </div>
      </div>
    </section>
  );
}
