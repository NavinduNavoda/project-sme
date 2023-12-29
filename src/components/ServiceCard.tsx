import React from "react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const ServiceCard = () => {
  return (
    <div className="card w-[225px] 2xl:w-[260px] mb-8 mx-auto">
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
        <p className="text-[16px] text-paragrapgh opacity-[.7] tracking-wide py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor.
        </p>
        <Link href="/">
          <div className="card-actions flex text-accentsme">
            <button className="text-[16px] font-bold mr-[10px]">BUY NOW</button>
            <HiArrowLongRight size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
