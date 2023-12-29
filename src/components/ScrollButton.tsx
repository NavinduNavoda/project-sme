import React from "react";
import Image from "next/image";
import spin from "../../public/spin.svg";
import arrow from "../../public/arrow.svg";

const Scroll = () => {
  return (
    <div className="h-screen absolute top-[100px] hidden lg:block lg:ml-[650px] xl:block xl:ml-[750px] 2xl:ml-[1000px] lg:mt-[30px] xl:mt-[25px] 2xl:mt-8 z-10">
      <div className="relative">
        <Image
          src={arrow}
          alt="click here to scroll"
          className="absolute top-1/3 transform -translate-y-1/3 lg:ml-[65px] xl:ml-[77px] 2xl:ml-[140px] animate-bounce-slow lg:h-[100px] xl:h-[115px] 2xl:h-[160px]"
        />
        <Image
          src={spin}
          alt="click here to scroll"
          className="animate-spin-slow lg:w-[200px] xl:w-[225px] 2xl:w-[350px]"
        />
      </div>
    </div>
  );
};

export default Scroll;
