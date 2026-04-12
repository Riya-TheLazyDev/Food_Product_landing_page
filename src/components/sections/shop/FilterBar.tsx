import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Filters {
  price: string;
  type: string;
  region: string;
  style: string;
  decade: string;
}

interface FilterBarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export function FilterBar({ filters, setFilters }: FilterBarProps) {
  const handleValueChange = (key: keyof Filters, value: string) => {
    setFilters({ ...filters, [key]: value === "all" ? "" : value });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8 px-4 max-w-6xl mx-auto">
      {/* Price Filter */}
      <Select onValueChange={(v) => handleValueChange("price", v)}>
        <SelectTrigger className="w-[140px] md:w-[160px] bg-transparent border-brand-green/20 text-text-primary rounded-full">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="under-50">Under $50</SelectItem>
          <SelectItem value="50-100">$50 - $100</SelectItem>
          <SelectItem value="over-100">Over $100</SelectItem>
        </SelectContent>
      </Select>

      {/* Type Filter */}
      <Select onValueChange={(v) => handleValueChange("type", v)}>
        <SelectTrigger className="w-[140px] md:w-[160px] bg-transparent border-brand-green/20 text-text-primary rounded-full">
          <SelectValue placeholder="Type of Wine" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="Champagne & Sparkling">Champagne & Sparkling</SelectItem>
          <SelectItem value="White Wine">White Wine</SelectItem>
          <SelectItem value="Rosé & Orange">Rosé & Orange</SelectItem>
          <SelectItem value="Red Wine">Red Wine</SelectItem>
          <SelectItem value="Lo/No">Lo/No</SelectItem>
        </SelectContent>
      </Select>

      {/* Region Filter */}
      <Select onValueChange={(v) => handleValueChange("region", v)}>
        <SelectTrigger className="w-[140px] md:w-[160px] bg-transparent border-brand-green/20 text-text-primary rounded-full">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Regions</SelectItem>
          <SelectItem value="France">France</SelectItem>
          <SelectItem value="Italy">Italy</SelectItem>
          <SelectItem value="USA">USA</SelectItem>
          <SelectItem value="Germany">Germany</SelectItem>
          <SelectItem value="New Zealand">New Zealand</SelectItem>
        </SelectContent>
      </Select>

      {/* Style Filter */}
      <Select onValueChange={(v) => handleValueChange("style", v)}>
        <SelectTrigger className="w-[140px] md:w-[160px] bg-transparent border-brand-green/20 text-text-primary rounded-full">
          <SelectValue placeholder="Style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Styles</SelectItem>
          <SelectItem value="Bold">Bold</SelectItem>
          <SelectItem value="Light">Light</SelectItem>
          <SelectItem value="Dry">Dry</SelectItem>
          <SelectItem value="Crisp">Crisp</SelectItem>
          <SelectItem value="Zesty">Zesty</SelectItem>
        </SelectContent>
      </Select>

      {/* Decade Filter */}
      <Select onValueChange={(v) => handleValueChange("decade", v)}>
        <SelectTrigger className="w-[140px] md:w-[160px] bg-transparent border-brand-green/20 text-text-primary rounded-full">
          <SelectValue placeholder="Decade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Decades</SelectItem>
          <SelectItem value="2020s">2020s</SelectItem>
          <SelectItem value="2010s">2010s</SelectItem>
          <SelectItem value="2000s">2000s</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
