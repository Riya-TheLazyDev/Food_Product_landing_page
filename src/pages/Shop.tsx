import { useState, useMemo, useEffect } from "react";
import { products } from "@/data/products";
import { FilterBar } from "@/components/sections/shop/FilterBar";
import type { Filters } from "@/components/sections/shop/FilterBar";
import { ProductSection } from "@/components/sections/shop/ProductSection";
import { OccasionSection } from "@/components/sections/shop/OccasionSection";
import { BottomCTA } from "@/components/sections/shop/BottomCTA";
import { motion } from "framer-motion";

export default function Shop() {
  const [filters, setFilters] = useState<Filters>({
    price: "",
    type: "",
    region: "",
    style: "",
    decade: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      let matchesPrice = true;
      if (filters.price === "under-50") matchesPrice = product.price < 50;
      else if (filters.price === "50-100")
        matchesPrice = product.price >= 50 && product.price <= 100;
      else if (filters.price === "over-100") matchesPrice = product.price > 100;

      return (
        matchesPrice &&
        (!filters.type || product.category === filters.type) &&
        (!filters.region || product.region === filters.region) &&
        (!filters.style || product.style === filters.style) &&
        (!filters.decade || product.decade === filters.decade)
      );
    });
  }, [filters]);

  const categories = [
    "Our Favourites Right Now",
    "Champagne & Sparkling",
    "White Wine",
    "Rosé & Orange",
    "Red Wine",
    "Lo/No",
  ];

  const getGroupedProducts = (category: string) => {
    if (category === "Our Favourites Right Now") {
      return filteredProducts.filter((p) => p.isFavourite);
    }
    return filteredProducts.filter((p) => p.category === category);
  };

  return (
    <div className="bg-background-main min-h-screen pt-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-6">
          Bottle Shop
        </h1>

        <FilterBar filters={filters} setFilters={setFilters} />
      </motion.div>

      {/* Main Content Sections */}
      <div className="mt-16 space-y-10">
        {categories.map((category) => {
          const sectionProducts = getGroupedProducts(category);
          if (sectionProducts.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProductSection title={category} products={sectionProducts} />
            </motion.div>
          );
        })}
      </div>

      <OccasionSection />
      <BottomCTA />
    </div>
  );
}