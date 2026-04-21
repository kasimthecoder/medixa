import React from "react";

const CategoryCard = ({ name, icon }) => {
  return (
    <div className=" h-40 lg:w-32 w-38 flex-col items-center justify-center p-4 rounded-xl bg-[#F0F3FF] border border-[#49535B] text-center gap-2 cursor-pointer shadow-lg hover:scale-101 transition-all transition-duration-300 hover:shadow-xl">
      <div className="bg-white p-4 rounded-xl flex justify-center w-16 h-16 mx-auto shadow-sm border border-[#49535B]">
        {icon}
      </div>
      <div className="pt-4 font-medium text-[#49535B]">{name}</div>
    </div>
  );
};

export default CategoryCard;
