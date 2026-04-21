import React from "react";
import { BookCheck, BookOpenCheck, BookOpenText, Shield } from "lucide-react";
import CategoryCard from "./HeroCategoryCard";
const OurCommitment = () => {
  return (
    <div className="bg-[#F0F3FF] py-12 sm:py-16 mt-16 sm:mt-20  text-center border-y border-[#49535B]">
      <div className=" mx-auto text-[#49535B] flex h-full flex-col w-full max-w-7xl items-center gap-12 px-6 sm:px-4 ">
        <h1 className="text-xs sm:text-sm mb-4 font-bold text-[#003265] opacity-70">
          HOW IT HELPS
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-10 ">
          <div className="w-full lg:w-[40%] ">
            <img
              src="https://images.unsplash.com/photo-1758598497259-b51e6ed6c73c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-64 border border-[#49535B] sm:h-80 lg:h-80 rounded-2xl sm:rounded-4xl shadow-lg sm:shadow-2xl object-cover blur-[1px]"
              alt="Healthcare commitment"
            />
          </div>
          <div className="w-full lg:w-[60%] text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#003265]">
              Clear information for better medicine decisions.
            </h1>
            <p className="text-base sm:text-lg mt-6 sm:mt-8 text-[#49535B]">
              Medixa simplifies how you understand medicines. Search, compare,
              and explore detailed information — including composition, side
              effects, and alternatives — all in one place. No confusion. Just
              clear and reliable information when you need it.
            </p>
            <div className="flex flex-col mt-6 sm:mt-8 gap-4">
              <div className="w-full py-3 sm:py-4 rounded-lg flex">
                <div className="p-4 rounded-full mr-3 bg-[#DAE2FD] border border-[#49535B]">
                  <BookCheck size={18} />
                </div>
                <div>
                  <h1 className="font-bold text-[#003265] text-sm sm:text-base ">
                    Reliable Information
                  </h1>
                  <p className="text-[#587CB3] text-sm sm:text-base">
                    Clear details on composition, uses, and side effects.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg flex">
                <div className="p-4 rounded-full mr-3 bg-[#DAE2FD] border border-[#49535B]">
                  <BookOpenText size={18} />
                </div>
                <div className="">
                  <h1 className="font-bold text-[#003265] text-sm sm:text-base">
                    Easy Comparison
                  </h1>
                  <p className="text-[#587CB3] text-sm sm:text-base">
                    Compare medicines by price, composition, and effects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
