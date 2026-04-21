"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import {
  X,
  HeadsetIcon,
  Wind,
  AlertCircle,
  Droplets,
  Pill,
  Zap,
  Leaf,
  Droplet,
  Smile,
  //   Lung,
  Heart,
  Shield,
  Apple,
  Lock,
  Activity,
} from "lucide-react";

const CategoriesPage = () => {
  const [categoriesBySection, setCategoriesBySection] = useState([]);
  const categories = [
    {
      id: 1,
      name: "Pain Relief",
      count: 120,
      section: "COMMON ISSUES",
      icon: X,
    },
    {
      id: 2,
      name: "Headache",
      count: 85,
      section: "COMMON ISSUES",
      icon: HeadsetIcon,
    },
    {
      id: 3,
      name: "Fever",
      count: 90,
      section: "COMMON ISSUES",
      icon: Zap,
    },
    {
      id: 4,
      name: "Cold & Cough",
      count: 150,
      section: "COMMON ISSUES",
      icon: Wind,
    },

    // Digestive Issues
    {
      id: 5,
      name: "Acidity",
      count: 45,
      section: "DIGESTIVE ISSUES",
      icon: Pill,
    },
    {
      id: 6,
      name: "Stomach Pain",
      count: 60,
      section: "DIGESTIVE ISSUES",
      icon: AlertCircle,
    },
    {
      id: 7,
      name: "Indigestion",
      count: 30,
      section: "DIGESTIVE ISSUES",
      icon: Droplets,
    },
    {
      id: 8,
      name: "Diarrhea",
      count: 40,
      section: "DIGESTIVE ISSUES",
      icon: Droplet,
    },

    // Respiratory
    {
      id: 9,
      name: "Sore Throat",
      count: 25,
      section: "RESPIRATORY",
      icon: Smile,
    },
    {
      id: 10,
      name: "Sinus",
      count: 35,
      section: "RESPIRATORY",
      icon: Wind,
    },
    {
      id: 11,
      name: "Asthma",
      count: 50,
      section: "RESPIRATORY",
      icon: Smile,
    },

    // Skin & External
    {
      id: 12,
      name: "Skin Care",
      count: 200,
      section: "SKIN & EXTERNAL",
      icon: Leaf,
    },
    {
      id: 13,
      name: "Acne",
      count: 75,
      section: "SKIN & EXTERNAL",
      icon: AlertCircle,
    },
    {
      id: 14,
      name: "Fungal Infection",
      count: 40,
      section: "SKIN & EXTERNAL",
      icon: Shield,
    },
    {
      id: 15,
      name: "Wound Care",
      count: 55,
      section: "SKIN & EXTERNAL",
      icon: Shield,
    },

    // General Health
    {
      id: 16,
      name: "Weakness",
      count: 30,
      section: "GENERAL HEALTH",
      icon: Activity,
    },
    {
      id: 17,
      name: "Vitamins",
      count: 180,
      section: "GENERAL HEALTH",
      icon: Apple,
    },
    {
      id: 18,
      name: "Immunity Boosters",
      count: 10,
      section: "GENERAL HEALTH",
      icon: Shield,
    },

    // Chronic Conditions
    {
      id: 19,
      name: "Diabetes",
      count: 250,
      section: "CHRONIC CONDITIONS",
      icon: Droplet,
    },
    {
      id: 20,
      name: "Blood Pressure",
      count: 180,
      section: "CHRONIC CONDITIONS",
      icon: Heart,
    },
    {
      id: 21,
      name: "Heart Health",
      count: 130,
      section: "CHRONIC CONDITIONS",
      icon: Heart,
    },
  ];

  useEffect(() => {
    const grouped = categories.reduce((acc, category) => {
      if (!acc[category.section]) {
        acc[category.section] = [];
      }
      acc[category.section].push(category);
      return acc;
    }, {});

    setCategoriesBySection(grouped);
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl text-[#49535B] font-bold  mt-8">
          Browse by Category
        </h1>
        <p className="py-4  text-[#49535B]">
          Find medicines based on your health needs
        </p>
      </div>
      {Object.keys(categoriesBySection).map((section) => (
        <div key={section} className="my-8">
          <h1 className="text-left my-8 text-[#003265] font-bold">{section}</h1>
          <div className="flex flex-wrap gap-6 ">
            {categoriesBySection[section].map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                count={category.count}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      ))}
      {/* <h1 className="text-left my-8">COMMON ISSUES</h1>
      <div className="flex flex-wrap gap-6 ">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div> */}
    </div>
  );
};

export default CategoriesPage;
