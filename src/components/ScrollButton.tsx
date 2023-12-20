import React from "react";
import Image from "next/image";
import spin from "../../public/spin.svg";
import arrow from "../../public/arrow.svg";

const Scroll = () => {
  return (
    <div className="h-screen absolute top-1/4 ml-[1000px] z-10">
      <div className="relative">
        <Image
          src={arrow}
          height={200}
          alt="click here to scroll"
          className="absolute top-1/3 transform -translate-y-1/2 ml-[168px] animate-bounce-slow"
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
