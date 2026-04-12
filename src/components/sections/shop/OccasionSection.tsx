import { motion } from "framer-motion";

const occasions = [
  {
    title: "Mid-week sip",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Dinner party",
    image: "https://images.unsplash.com/photo-1551218808-94e220e031ca?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Dinner for two",
    image: "https://images.unsplash.com/photo-1528498033053-356067b84fc1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "A bit more fancy",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2070&auto=format&fit=crop",
  },
];

export function OccasionSection() {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-background-main/50">
      <div className="flex flex-col mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-green/60 mb-2">Inspirations</span>
        <h2 className="font-serif text-3xl md:text-5xl text-text-primary">A sip for every occasion</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {occasions.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 0.98 }}
            className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <h3 className="text-white font-serif text-3xl md:text-4xl leading-tight">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
