export type Product = {
  id: string;
  name: string;
  price: number;
  category: string; // 'Champagne & Sparkling', 'White Wine', 'Rosé & Orange', 'Red Wine', 'Lo/No'
  region: string;
  style: string;
  decade: string;
  image: string;
  isFavourite?: boolean;
};

export const products: Product[] = [
  // Favourites
  {
    id: "1",
    name: "Savraro 2022",
    price: 37,
    category: "Red Wine",
    region: "Italy",
    style: "Bold",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    isFavourite: true,
  },
  {
    id: "2",
    name: "Pinot Noir 2023",
    price: 52,
    category: "Red Wine",
    region: "USA",
    style: "Light",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    isFavourite: true,
  },
  {
    id: "3",
    name: "Rosé 2021",
    price: 44,
    category: "Rosé & Orange",
    region: "France",
    style: "Dry",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    isFavourite: true,
  },
  {
    id: "4",
    name: "Chardonnay 2022",
    price: 48,
    category: "White Wine",
    region: "USA",
    style: "Crisp",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    isFavourite: true,
  },
  // Champagne
  {
    id: "5",
    name: "Brut Reserve",
    price: 85,
    category: "Champagne & Sparkling",
    region: "France",
    style: "Complex",
    decade: "2010s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Prestige Cuvée",
    price: 120,
    category: "Champagne & Sparkling",
    region: "France",
    style: "Elegant",
    decade: "2010s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
  // White Wine
  {
    id: "7",
    name: "Sauvignon Blanc",
    price: 32,
    category: "White Wine",
    region: "New Zealand",
    style: "Zesty",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Riesling 2021",
    price: 28,
    category: "White Wine",
    region: "Germany",
    style: "Sweet",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
  // Rosé
  {
    id: "9",
    name: "Provence Rosé",
    price: 35,
    category: "Rosé & Orange",
    region: "France",
    style: "Fruity",
    decade: "2020s",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
];
