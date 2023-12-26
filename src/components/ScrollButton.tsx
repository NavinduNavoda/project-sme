import React from "react";
import Image from "next/image";
import spin from "../../public/spin.svg";
import arrow from "../../public/arrow.svg";

const Scroll = () => {
  return (
    <div className="h-screen absolute top-1/4 hidden lg:block lg:ml-[650px] xl:block xl:ml-[800px] 2xl:ml-[1000px] z-20">
      <div className="relative">
        <Image
          src={arrow}
          height={200}
          alt="click here to scroll"
          className="absolute top-1/3 transform -translate-y-1/3 ml-[168px]"
        />
        <Image
          src={spin}
          height={400}
          alt="click here to scroll"
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default Scroll;
