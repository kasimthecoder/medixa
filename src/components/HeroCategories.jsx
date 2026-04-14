import React from "react";
import {
  Brain,
  CopyIcon,
  Droplet,
  Pill,
  Snowflake,
  Tablets,
  Thermometer,
} from "lucide-react";
import CategoryCard from "./CategoryCard";
const HeroCategories = () => {
  const categories = [
    {
      name: "Pain Relief",
      icon: <Pill size={32} color="#49535B" />,
    },
    {
      name: "Headache",
      icon: <Brain size={32} color="#49535B" />,
    },
    {
      name: "Fever",
      icon: <Thermometer size={32} color="#49535B" />,
    },
    {
      name: "Cold",
      icon: <Snowflake size={32} color="#49535B" />,
    },
    {
      name: "Infection",
      icon: <Tablets size={32} color="#49535B" />,
    },
    {
      name: "Allergy",
      icon: <Droplet size={32} color="#49535B" />,
    },
  ];

  return (
    <div className="mt-16">
      <h1 className="text-sm ml-8 lg:ml-44 font-bold text-[#003265] text-left opacity-70">
        BROWSE BY CATEGORY
      </h1>
      <div className="flex flex-wrap gap-6 mt-8 mx-auto w-full max-w-7xl px-4 sm:px-2 lg:px-8 justify-center">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCategories;
