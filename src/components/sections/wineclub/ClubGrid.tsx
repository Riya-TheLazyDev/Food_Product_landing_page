import { motion } from "framer-motion";

export function ClubGrid() {
  const clubs = [
    {
      id: "1",
      name: "Dirty Vine Club",
      subtext: "CURATED FOR YOU",
      image: "/images/occasion_1.png", // reusing imagery that matches the vibe
    },
    {
      id: "2",
      name: "California Club",
      subtext: "LOCAL FAVORITES",
      image: "/images/product_1.png",
    },
    {
      id: "3",
      name: "Club Natural",
      subtext: "100% ORGANIC",
      image: "/images/occasion_2.png",
    },
    {
      id: "4",
      name: "The Lo-No Club",
      subtext: "LOW INTERVENTION",
      image: "/images/product_2.png",
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-background-main">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-4">
            BROWSE CLUBS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8 leading-tight max-w-3xl">
            A curated selection of Mama Earth's best
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${club.image}')` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                <h3 className="font-serif text-2xl lg:text-3xl mb-3 drop-shadow-md">
                  {club.name}
                </h3>
                <span className="text-xs tracking-widest uppercase opacity-80 drop-shadow-md">
                  {club.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
