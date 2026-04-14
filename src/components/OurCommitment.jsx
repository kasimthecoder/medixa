import React from "react";

const OurCommitment = () => {
  return (
    <div className="bg-[#F0F3FF] py-12 sm:py-16 mt-16 sm:mt-20 rounded-lg text-center">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-7xl">
        <h1 className="text-xs sm:text-sm mb-4 font-bold text-[#003265] opacity-70">
          OUR COMMITMENT
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-10">
          <div className="w-full lg:w-[40%]">
            <img
              src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg"
              className="w-full h-64 sm:h-80 lg:h-96 rounded-3xl sm:rounded-4xl shadow-lg sm:shadow-2xl object-cover"
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
              <div className="w-full py-3 sm:py-4 rounded-lg">
                <h1 className="font-bold text-[#003265] text-sm sm:text-base">
                  Reliable Information
                </h1>
                <p className="text-[#587CB3] text-sm sm:text-base">
                  Clear details on composition, uses, and side effects.
                </p>
              </div>
              <div className="w-full rounded-lg">
                <h1 className="font-bold text-[#003265] text-sm sm:text-base">
                  Easy Comparison
                </h1>
                <p className="text-[#587CB3] text-sm sm:text-base">
                  Clear details on composition, uses, and side effects.
                </p>
              </div>
              {/* <div className="bg-white flex-1  p-5 w-full rounded-lg shadow-sm  ">
                <h1 className="font-bold ">Find Alternatives</h1>
                <p>Clear details on composition, uses, and side effects.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
