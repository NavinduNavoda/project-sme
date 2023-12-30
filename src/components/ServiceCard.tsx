import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const ServiceCard = (props: any) => {
  return (
    <div>
      <div className="card w-[225px] 2xl:w-[260px] mb-8 mx-auto">
        <figure>
          <div
            className=" h-[150px] w-[100%] bg-cover rounded-t-[5px]"
            style={{
              backgroundImage: `url(uploaded/${
                props.type == "book"
                  ? "books"
                  : props.type == "service"
                  ? "services"
                  : ""
              }/${props.data?._id}/${props.data?.thumbnail})`,
            }}
          ></div>
        </figure>
        <div className="card-body">
          <p className="text-paragrapgh text-[16px] font-montserrat tracking-[5px] pt-4">
            BUILD YOUR
          </p>
          <h2 className="card-title text-paragrapgh text-[20px] font-montserrat font-black uppercase">
            {props.data?.title.substring(0, 30)} brand
          </h2>
          <p className="text-[16px] text-paragrapgh opacity-[.7] tracking-wide py-4">
            {props.data?.description.substring(0, 80)}...
          </p>

          <Link href="/">
            <div className="card-actions flex text-accentsme  justify-between">
              <p className="text-[16px] text-paragrapgh opacity-[.7] tracking-wide py-4 font-bold">
                Rs.{props.data?.price}
              </p>
              <button className="text-[16px] font-bold mr-[10px] flex items-center">
                BUY NOW
                <HiArrowLongRight size={24} />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
