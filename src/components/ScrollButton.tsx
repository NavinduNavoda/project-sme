import React from "react";
import Image from "next/image";
import spin from "../../public/spin.svg";
import arrow from "../../public/arrow.svg";

const Scroll = () => {
  return (
    <div className="h-screen absolute top-[100px] hidden lg:block lg:ml-[650px] xl:block xl:ml-[800px] 2xl:ml-[1000px] z-10">
      <div className="relative">
        <Image
          src={arrow}
          alt="click here to scroll"
          className="absolute top-1/3 transform -translate-y-1/3 ml-[168px] animate-bounce-slow xl:h-[125px]"
        />
        <Image
          src={spin}
          alt="click here to scroll"
          className="animate-spin-slow xl:w-[250px]"
        />
      </div>
    </div>
  );
};

export default Scroll;
