import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const },
  };

  const standards = [
    "Chemical free",
    "Independent producers",
    "100% organic grapes",
    "Processed simply",
  ];

  const journalEntries = [
    {
      title: "Which Wine Next Week?",
      category: "RECIPES",
      readTime: "5 MIN READ",
      image: "https://images.unsplash.com/photo-155312673d-0103b22b60b7?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#EAD6C4]",
    },
    {
      title: "DirtyVine: Our philosophy on wine",
      category: "PHILOSOPHY",
      readTime: "8 MIN READ",
      image: "https://images.unsplash.com/photo-1530260626688-0482da93f46a?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#CFE3D6]",
    },
    {
      title: "Introducing The Bottle Club",
      category: "NEWS",
      readTime: "4 MIN READ",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#E8DFAF]",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-background-main overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-accent-yellow opacity-40 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 left-[5%] w-48 h-48 bg-accent-yellow opacity-30 rounded-full blur-3xl -z-10" />

        <motion.div {...fadeInUp} className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-primary leading-tight mb-6">
            DirtyVine is a new way to do wine, rooted in the really, really old way
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            We believe in the power of natural wine to bring people together, to celebrate the earth, and to nourish the soul. Our journey started with a simple idea: better wine for a better world.
          </p>
        </motion.div>

        <motion.div 
          {...fadeInUp} 
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="w-full max-w-6xl"
        >
          <div className="aspect-[21/9] w-full rounded-[40px] overflow-hidden shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1541445990858-2c21251c5e4f?auto=format&fit=crop&q=80&w=2000" 
              alt="Picnic in vineyard" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Botanical abstract shapes background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] -z-10 flex items-center justify-center">
          <svg width="80%" height="80%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 100C300 100 200 200 200 300C200 400 300 500 400 500C500 500 600 400 600 300C600 200 500 100 400 100ZM400 450C317.5 450 250 382.5 250 300C250 217.5 317.5 150 400 150C482.5 150 550 217.5 550 300C550 382.5 482.5 450 400 450Z" fill="currentColor" />
            <circle cx="150" cy="150" r="80" fill="currentColor" />
            <circle cx="650" cy="450" r="100" fill="currentColor" />
            <rect x="50" y="400" width="120" height="120" rx="60" fill="currentColor" />
          </svg>
        </div>

        <motion.div {...fadeInUp} className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary leading-tight mb-8">
            A place where everyone can drink with a purpose
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            At DirtyVine, we believe that the best wine is the one that's made with care for the land and the people who drink it. We work with small-scale producers who are committed to sustainable practices and minimal intervention.
          </p>
        </motion.div>
      </section>

      {/* 3. NATURAL WINE SECTION */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center bg-background-beige/30">
        {/* Large organic shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-botanical opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-yellow opacity-10 rounded-full blur-3xl" />
        </div>

        <motion.div {...fadeInUp} className="text-center max-w-5xl">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-6 block">
            WHY NATURAL WINE?
          </span>
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-text-primary leading-[1.3] mb-12">
            Natural wines are free from chemicals and additives, so you can feel good about what you're putting in your body. They're also free from pesticides and problematic processing, so you can feel good about what you're putting into the earth, too.
          </p>
          <Button className="bg-brand-green hover:bg-brand-greenHover text-white rounded-full px-10 py-6 text-base font-medium transition-all duration-300">
            More About Us
          </Button>
        </motion.div>
      </section>

      {/* 4. STANDARDS SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-4 block">
              OUR STANDARDS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary leading-tight mb-12">
              Low intervention. High vibration.
            </h2>
            <div className="flex flex-col w-full border-t border-border">
              {standards.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-6 border-b border-border group cursor-pointer"
                >
                  <span className="text-xl md:text-2xl font-serif text-text-primary group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-wide">
                    {item}
                  </span>
                  <Plus className="w-6 h-6 text-text-secondary group-hover:rotate-90 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp} 
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="rounded-[40px] overflow-hidden shadow-card"
          >
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200" 
              alt="Wine and food standards" 
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. JOURNAL SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background-main flex flex-col items-center">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-text-muted mb-4 block">
            THE JOURNAL
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-4">
            Fresh reads & recipes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
          {journalEntries.map((entry, index) => (
            <motion.div 
              key={index} 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <Card className="border-none bg-transparent shadow-none group cursor-pointer overflow-visible">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-soft">
                  <img 
                    src={entry.image} 
                    alt={entry.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full ${entry.color} text-text-primary`}>
                    {entry.category}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted">
                    {entry.readTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-text-primary leading-snug group-hover:text-brand-green transition-colors duration-300">
                  {entry.title}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp}>
          <Button variant="outline" className="rounded-full px-12 py-6 border-border hover:bg-background-beige text-text-primary font-medium transition-all duration-300">
            Read More
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
