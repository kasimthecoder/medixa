import React from "react";

const CategoryCard = ({ name, icon }) => {
  return (
    <div className=" h-40 lg:w-32 w-38 flex-col items-center justify-center p-4 rounded-xl bg-[#F0F3FF] text-center gap-2 cursor-pointer hover:shadow-3xl transition-shadow  ">
      <div className="bg-white p-4 rounded-xl flex justify-center w-16 h-16 mx-auto shadow-sm">
        {icon}
      </div>
      <div className="pt-4 font-medium text-[#49535B]">{name}</div>
    </div>
  );
};

export default CategoryCard;
