import { Pill } from "lucide-react";
import React from "react";

const CategoryCard = ({ name, count, icon: Icon }) => {
  return (
    <div className="bg-[#F0F3FF] w-full lg:w-[23%] rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer border border-[#49535B]">
      <div className=" bg-white rounded-md  w-16 h-16 flex items-center justify-center mb-4 border-[#49535B] border">
        <Icon size={32} color="#49535B" className="" />
      </div>
      <h3 className="text-sm font-medium text-[#49535B]">
        {name}
        <span className="text-xs text-gray-500 ml-2">({count}+)</span>
      </h3>
    </div>
  );
};

export default CategoryCard;
