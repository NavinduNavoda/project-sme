import React from "react";
import Link from "next/link";

const AppointmentCard = () => {
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
        <p className="text-[16px] text-paralight tracking-wide py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <Link href="/">
          <div className="card-actions flex text-paralight  justify-between">
            <button className="text-[16px]  hover:text-paragrapgh duration-300 hover:scale-105">
              2024/01/01
            </button>
            <button className="text-[16px] text-accentsme hover:text-accentsme duration-300 hover:scale-105  ">
              No:01
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCard;
