import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Obsessed with all three bottles I got this month. So delicious, and the cutest labels, too!",
    author: "Lucy",
    location: "San Francisco",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The organic field trip blend changed how I think about red wines. Extremely fresh, light, and low sulfite.",
    author: "Marcus",
    location: "Brooklyn",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Perfect selection every single month. Customer support is incredibly responsive and swapping bottles is a breeze.",
    author: "Sophia",
    location: "Los Angeles",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Sip & Vine makes weekend dinners so much better. The pairings guide is a wonderful touch.",
    author: "Oliver",
    location: "Austin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "No hangovers, delicious taste profiles, and supporting independent farms. What's not to love?",
    author: "Emma",
    location: "Seattle",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export function Testimonial() {
  const [isHovered, setIsHovered] = useState(false);

  // Triple testimonials list to ensure seamless looping marquee at any screen resolution
  const tripledTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-background-beige relative z-10 border-b border-border/40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-text-secondary font-medium block mb-3 font-sans">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-text-primary leading-tight">
          Loved by Wine Enthusiasts
        </h2>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div 
        className="w-full flex overflow-x-hidden relative py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            x: isHovered ? undefined : ["0%", "-33.333%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // 30s scroll loop
              ease: "linear"
            }
          }}
          className="flex gap-8 whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {tripledTestimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="inline-block bg-white border border-border/30 p-8 md:p-10 rounded-[2.5rem] w-[350px] md:w-[450px] whitespace-normal text-left shadow-soft hover:shadow-card transition-shadow duration-500 relative shrink-0"
    >
      {/* Decorative quotes badge */}
      <span className="absolute top-6 right-8 font-serif text-7xl text-brand-green/5 select-none pointer-events-none">
        ”
      </span>

      <p className="font-serif text-lg md:text-xl text-text-primary leading-relaxed mb-8 italic relative z-10">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4 relative z-10">
        {/* Avatar scales up when card is active/hovered */}
        <motion.div
          animate={{ scale: cardHovered ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-greenSoft/20 shadow-sm"
        >
          <img 
            src={testimonial.avatar} 
            alt={testimonial.author} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex flex-col">
          <h4 className="font-medium text-text-primary text-sm font-sans">{testimonial.author}</h4>
          <span className="text-[10px] uppercase text-text-secondary tracking-widest font-semibold mt-0.5 font-sans">
            {testimonial.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

