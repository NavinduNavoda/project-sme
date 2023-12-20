import React from "react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const Card = () => {
  return (
    <div className="card w-64">
      <figure>
        <img
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="text-paragrapgh text-[12px] font-montserrat tracking-[5px] pt-4">
          BUILD YOUR
        </p>
        <h2 className="card-title text-paragrapgh text-[20px] font-montserrat font-black">
          COSMETIC BRAND
        </h2>
        <p className="text-[12px] text-paralight tracking-wide py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <Link href="/">
          <div className="card-actions flex text-accentsme">
            <button className="text-[12px] font-bold ">BUY NOW</button>
            <HiArrowLongRight size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
