import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Occasion {
  id: string;
  title: string;
  image: string;
  subtitle: string;
}

const occasions: Occasion[] = [
  {
    id: "1",
    title: "Me time",
    subtitle: "Because you deserve it",
    image: "/images/occasion_1.png",
  },
  {
    id: "2",
    title: "Sunny picnic",
    subtitle: "Share with friends",
    image: "/images/occasion_2.png",
  },
  {
    id: "3",
    title: "Dinner party",
    subtitle: "Food pairings",
    image: "/images/occasion_1.png",
  },
  {
    id: "4",
    title: "Afternoon Aperitif",
    subtitle: "Light & refreshing",
    image: "/images/occasion_2.png",
  }
];

export function Occasions() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-2">Shop By Occasion</span>
            <h2 className="text-3xl font-serif text-text-primary">A sip for every occasion</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-border/50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${occasion.image}')` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="font-serif text-3xl text-white mb-3">
                  {occasion.title}
                </h3>
                <p className="text-white/80 text-sm tracking-wide uppercase opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {occasion.subtitle}
                </p>
                <div className="absolute bottom-10 w-8 border-b border-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
