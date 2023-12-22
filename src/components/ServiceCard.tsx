import React from "react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const ServiceCard = () => {
  return (
    <div className="card w-[235px] 2xl:w-[270px] mb-8 mx-auto">
      <figure>
        <img
          className="w-full hover:scale-110 duration-300"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="text-paragrapgh text-[16px] font-montserrat tracking-[5px] pt-4">
          BUILD YOUR
        </p>
        <h2 className="card-title text-paragrapgh text-[20px] font-montserrat font-black">
          COSMETIC BRAND
        </h2>
<<<<<<< Updated upstream
        <p className="text-[16px] text-paralight tracking-wide py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt
        </p>
        <Link href="/">
          <div className="card-actions flex text-accentsme hover:text-paragrapgh duration-300 hover:scale-105">
            <button className="text-[14px] font-bold pr-2">BUY NOW</button>
            <HiArrowLongRight size={30} />
=======
        <p className="text-[16px] text-paragrapgh opacity-[.7] tracking-wide py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor.
        </p>
        <Link href="/">
          <div className="card-actions flex text-accentsme">
            <button className="text-[16px] font-bold mr-[10px]">BUY NOW</button>
            <HiArrowLongRight size={24} />
>>>>>>> Stashed changes
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
