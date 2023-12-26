// components/OverlapLayout.tsx
import Scroll from "@/components/ScrollButton";
import Image from "next/image";
import React from "react";
import "../hutta.css";

const OverlapLayout: React.FC = () => {
  return (
    <div className="relative px-4 sm:px-4 md:px-24 lg:px-40 pt-4 sm:pt-4 md:pt-4">
      <div className="flex w-full h-screen m-auto relative" id="hutta">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0"></div>

        <div className="w-2/3 p-4 z-10 relative">
          <p className="text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px]  tracking-wide text-[#4C6575] font-black leading-none uppercase">
            your trusted partner for <br />
            achieving your strategic <br /> development
          </p>
          <p className="relative text-[70px] sm:text-[100px] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-montserrat font-black text-accentsme leading-none z-20">
            GOALS
          </p>
          <p className="absolute pt-2 sm:pt-4 md:pt-6 lg:pt-10 xl:pt-12 2xl:pt-12 text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[50px] 2xl:text-[64px] font-montserrat font-black text-white leading-none z-20">
            WE GUIDE <br />
            YOU EARN
          </p>
        </div>
        <div className="p-4 w-1/3 ml-[-50px] relative z-0">
          <Scroll />
        </div>
      </div>

      {/* as;dkalksmdlkmasmd */}
    </div>
  );
};

export default OverlapLayout;
